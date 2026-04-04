// app/documents/[id]/page.tsx
import dynamic from 'next/dynamic'
import { useEditor, EditorContent } from '@tiptap/react'
import { TextStyleKit } from '@tiptap/extension-text-style'
import StarterKit from '@tiptap/starter-kit'
import EditorMenuBarWrapper from '@/../components/EditorMenuBarWrapper'
import EditorMenuBar from '@/../components/EditorMenuBar'
import EditorWrapper from '@/../components/EditorWrapper'

// 非同期コンポーネントにするため `async` をつけます
export default async function DocumentPage({params}: {params: Promise<{ id: string }>; }) 
{
  // awaitを使ってURLのパラメータ（id）を取得する
  const { id } = await params;
  return (
    <div className="p-8">
      <EditorWrapper/>
    </div>
  );
}
