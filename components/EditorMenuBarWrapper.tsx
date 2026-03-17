"use client"; // 1. フック（useEditor）を使うため必須です！

import { useEditor, EditorContent } from '@tiptap/react' // 2. EditorContent を追加
import dynamic from 'next/dynamic';
import {TextStyle} from '@tiptap/extension-text-style' // ※名前がおそらく TextStyle が正しいはずです
import StarterKit from '@tiptap/starter-kit'

// メニューバーを動的インポート（わかりやすいように変数名を EditorMenuBar に変更しました）
const EditorMenuBar = dynamic(() => import('./EditorMenuBar'), {
  ssr: false,
  loading: () => <p>メニューバーを読み込み中...</p>,
});

const extensions = [StarterKit, TextStyle]

export default function EditorWrapper() {
  const editor = useEditor({ 
    extensions, 
    content: '<h2> Hi there,</h2>', 
    immediatelyRender: false 
  });

  // 3. TypeScriptエラーの解消: editor が null の間は描画を待機する
  if (!editor) {
    return <p>エディタを準備中...</p>;
  }

  return (
    <div className="editor-container">
      {/* editorが確実に存在するのでTypeScriptに怒られません */}
      <EditorMenuBar editor={editor} />
      
      {/* 4. これがないと、文字を入力する場所が表示されません！ */}
      <EditorContent editor={editor} />
    </div>
  );
}