'use client'

import { useEffect, useState, useRef } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import EditorMenuBar from './EditorMenuBar';
import Paragraph from '@tiptap/extension-paragraph';
import { TrailingNode } from '@tiptap/extensions/trailing-node';
import { drizzle } from 'drizzle-orm/libsql';
import { documents } from '@/db/schema/documents';
import { db } from "@/db/db";

const CustomDivBlock = Paragraph.extend({
  // Tiptap内部での名前を 'paragraph' のままにしておくことで、
  // Enterキーを押した時の「標準の改行先」として自動的に認識されます。
  name: 'paragraph',

  parseHTML() {
    return [
      { tag: 'div' },
      { tag: 'p' }, // 既存のデータに<p>が混ざっていても読み込めるようにしておくのが安全です
    ];
  },

  renderHTML({ HTMLAttributes }) {
    // 画面に出力する時は <div> にする
    return ['div', HTMLAttributes, 0];
  },
});

export default function CustomEditor() {
  const [buttonPos, setButtonPos] = useState<{ top: number; left: number } | null>(null);
  const [isMenuBarOpen, setIsMenuBarOpen] = useState(false);
  const editorContainerRef = useRef<HTMLDivElement>(null);

  const debouncedSave = useDebouncedCallback((editorJson) => {
    await db.update(documents).set({ content: editorJson }).where(eq(documents.id, "target-document-id"));
  }, 1000);

  const editor = useEditor({
    extensions: [StarterKit.configure({
        // StarterKitに最初から入っている標準の<p>を「無効化」する
        paragraph: false, 
      }),
      // 4. 代わりに、上で作ったカスタム版（<div>版）を追加する
      CustomDivBlock,TrailingNode],
    content: `<div>あいうえお</div>`,
    immediatelyRender: false,
    editorProps: {
      attributes: {
        // フォーカス時の枠線を消し、必要に応じてエディタ全体のスタイルもここに書けます
        class: 'focus:outline-none', 
      },
    },
    onUpdate: ({ editor }) => {
      const editorJson = editor.getJSON();
      debouncedSave(editorJson);
    },
  });

  useEffect(() => {
    if (!editor || !editorContainerRef.current) return;
    const container = editorContainerRef.current;
    const handleMouseMove = (event: MouseEvent) => {
      if (isMenuBarOpen) return;
      const coords = { left: event.clientX, top: event.clientY };
      const pos = editor.view.posAtCoords(coords);
      if (pos) {
        let domNode = editor.view.domAtPos(pos.pos).node;

        if (domNode.nodeType === 3) {
          domNode = domNode.parentNode as Node;
        }

        if (domNode instanceof HTMLElement) {
          const nodeRect = domNode.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();
          const relativeTop = nodeRect.top - containerRect.top;
          setButtonPos({ 
            top: relativeTop, 
            left: -30 // 左に30pxはみ出させる
          });
        }
      }
    }

    const handleMouseLeave = () => {
      if (!isMenuBarOpen) {
        setButtonPos(null);
        setIsMenuBarOpen(false); // エディタからマウスが離れたらメニューバーも閉じる（必要に応じて調整）
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
     if (
        editorContainerRef.current &&
        !editorContainerRef.current.contains(event.target as Node)
      ) {
        // メニューを閉じて、ボタンも非表示にする
        setIsMenuBarOpen(false);
        setButtonPos(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    container.addEventListener('mousemove', handleMouseMove);   
    container.addEventListener('mouseleave', handleMouseLeave);

    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [editor,isMenuBarOpen]);

  if (!editor) return null;

  return (
    <div ref={editorContainerRef} className="relative flex flex-col max-w-2xl border border-white mx-auto mt-10 p-2">
      {/* アクションボタン */}
      {buttonPos && (
        // 【修正ポイント】
        // エディタ本体（left: 0）からボタン（left: -30）までの隙間を埋める透明なラッパーを追加
        <div 
          className="absolute z-10 flex items-center"
          style={{ 
            top: `${buttonPos.top}px`, 
            left: `${buttonPos.left}px`,
            width: `${Math.abs(buttonPos.left)}px`, // -30pxの距離を埋めるための幅30pxを確保
            height: '24px' // ボタンと同じ高さ（必要に応じて調整）
          }}
        >
          <div className="flex flex-row items-center gap-1">
            <button 
              className="w-6 h-6 bg-zinc-700 rounded text-zinc-500 flex items-center justify-center cursor-grab hover:bg-zinc-600 transition-colors"
              onClick={() => setIsMenuBarOpen(!isMenuBarOpen)} // 確認用
            >
              ⋮⋮
            </button>
            <EditorMenuBar editor={editor} isOpen={isMenuBarOpen} />
          </div>
        </div>
      )}

      {/* エディタ本体 */}
      <EditorContent onClick={() => {setIsMenuBarOpen(false)}} editor={editor}/>
    </div>
  );
}
