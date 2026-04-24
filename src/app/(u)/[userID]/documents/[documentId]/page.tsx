// app/documents/[id]/page.tsx
import dynamic from 'next/dynamic';
import { useEditor, EditorContent } from '@tiptap/react';
import { TextStyleKit } from '@tiptap/extension-text-style';
import StarterKit from '@tiptap/starter-kit';
import Editor from '@/../components/Editor';

// 非同期コンポーネントにするため `async` をつけます
export default async function DocumentPage({params}: {params: Promise<{ id: string }>; }) 
{
  // awaitを使ってURLのパラメータ（id）を取得する
  const { id } = await params;
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return (
    <div className="p-8">
      <Editor/>
    </div>
  );
}
