// app/documents/[id]/page.tsx
import { useEditor, EditorContent } from '@tiptap/react'
import { TextStyleKit } from '@tiptap/extension-text-style'
import StarterKit from '@tiptap/starter-kit'
import React from 'react'

// 非同期コンポーネントにするため `async` をつけます
export default async function DocumentPage({
  params,
}: {
  params: Promise<{ id: string }>; // 型定義：idという文字列が入ったPromise
}) {
  // awaitを使ってURLのパラメータ（id）を取得する
  const { id } = await params;
  const extensions = [StarterKit, TextStyleKit]
  const editor = useEditor({ extensions, content:'<h2> Hi there,</h2>'})
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">
        ドキュメントID: {id}
      </h1>
      <p>ここの中身はURLごとに変わります。</p>
    </div>
  );
}