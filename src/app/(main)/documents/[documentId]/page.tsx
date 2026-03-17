// app/documents/[id]/page.tsx
import dynamic from 'next/dynamic'
import { useEditor, EditorContent } from '@tiptap/react'
import { TextStyleKit } from '@tiptap/extension-text-style'
import StarterKit from '@tiptap/starter-kit'
import EditorMenuBarWrapper from '@/../components/EditorMenuBarWrapper'

// 非同期コンポーネントにするため `async` をつけます
export default async function DocumentPage({
  params,
}: {
  params: Promise<{ id: string }>; // 型定義：idという文字列が入ったPromise
}) {
  // awaitを使ってURLのパラメータ（id）を取得する
  const { id } = await params;
  const extensions = [StarterKit, TextStyleKit]
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">
        ドキュメントID: {id}
      </h1>
      <EditorMenuBarWrapper/>
      <p>ここの中身はURLごとに変わります。</p>
    </div>
  );
}