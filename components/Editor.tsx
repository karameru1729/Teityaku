'use client'

import { useEffect, useState, useRef } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

export default function CustomEditor() {
  // ボタンの表示位置（トップとレフト）を管理
  const [buttonPos, setButtonPos] = useState<{ top: number; left: number } | null>(null);
  
  // エディタ全体を囲むコンテナの参照を取得（座標計算の基準にするため）
  const editorContainerRef = useRef<HTMLDivElement>(null);

  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>ここに入力...</p><p>次の行</p><p>その次の行</p>',
    immediatelyRender: false,
  });

  useEffect(() => {
    if (!editor || !editorContainerRef.current) return;

    const handleMouseMove = (event: MouseEvent) => {
      // 1. マウスの画面上の座標を取得
      const coords = { left: event.clientX, top: event.clientY };
      const pos = editor.view.posAtCoords(coords);

      if (pos) {
        // 2. その位置にあるDOMを取得
        let domNode = editor.view.domAtPos(pos.pos).node;

        // 【重要】もし取得したのが「テキスト(文字)」だったら、その親要素（pタグなど）をターゲットにする
        if (domNode.nodeType === 3) { // 3 = テキストノード
          domNode = domNode.parentNode as Node;
        }

        // 3. HTML要素として座標を計算
        if (domNode instanceof HTMLElement) {
          const nodeRect = domNode.getBoundingClientRect();
          const containerRect = editorContainerRef.current!.getBoundingClientRect();

          // 【重要】「親コンテナのトップ」から「現在の行のトップ」までの引き算をして、正しいY座標を出す
          const relativeTop = nodeRect.top - containerRect.top;
          
          setButtonPos({ 
            top: relativeTop, 
            left: -30 // 左に30pxはみ出させる
          });
        }
      } else {
        // エディタの枠外などにマウスがいったらボタンを隠す
        setButtonPos(null);
      }
    };

    // window全体ではなく、エディタのコンテナの中だけでマウスの動きを監視する
    const container = editorContainerRef.current;
    container.addEventListener('mousemove', handleMouseMove);
    
    // クリーンアップ
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, [editor]);

  if (!editor) return null;

  return (
    // 【重要】ここに ref と relative を設定します
    <div ref={editorContainerRef} className="relative max-w-2xl mx-auto mt-10 p-4 border border-gray-300 min-h-[300px]">
      
      {/* アクションボタン */}
      {buttonPos && (
        <button 
          className="absolute w-6 h-6 bg-gray-200 rounded text-gray-600 flex items-center justify-center cursor-grab hover:bg-gray-300 transition-colors"
          style={{ 
            top: `${buttonPos.top}px`, 
            left: `${buttonPos.left}px` 
          }}
        >
          ⋮⋮
        </button>
      )}

      {/* エディタ本体 */}
      <EditorContent editor={editor} />
      
    </div>
  );
}