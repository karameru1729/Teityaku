'use client'

import { useEffect, useState, useRef } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

export default function CustomEditor() {
  const [buttonPos, setButtonPos] = useState<{ top: number; left: number } | null>(null);
  const editorContainerRef = useRef<HTMLDivElement>(null);

  const editor = useEditor({
    extensions: [StarterKit],
    content: '<div>ここに入力...</div>',
    immediatelyRender: false,
  });

  useEffect(() => {
    if (!editor || !editorContainerRef.current) return;

    const container = editorContainerRef.current;

    const handleMouseMove = (event: MouseEvent) => {
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
    };

    const handleMouseLeave = () => {
      setButtonPos(null);
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [editor]);

  if (!editor) return null;

  return (
    <div ref={editorContainerRef} className="relative max-w-2xl mx-auto mt-10 p-4 border border-gray-300 min-h-[300px]">
      
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
          <button 
            className="w-6 h-6 bg-gray-200 rounded text-gray-600 flex items-center justify-center cursor-grab hover:bg-gray-300 transition-colors"
            onClick={() => alert('ボタンが押せました！')} // 確認用
          >
            ⋮⋮
          </button>
        </div>
      )}

      {/* エディタ本体 */}
      <EditorContent editor={editor} />
    </div>
  );
}