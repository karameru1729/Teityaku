"use client";
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Paragraph from '@tiptap/extension-paragraph';
import { Placeholder } from '@tiptap/extensions';
import { TrailingNode } from '@tiptap/extensions/trailing-node';

export default function TitleEditor(){

  const CustomDocument = Document.extend({
    content: 'heading block*', 
  });

  const CustomDivBlock = Paragraph.extend({
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

  const editor = useEditor({
    extensions: [StarterKit.configure({
        // StarterKitに最初から入っている標準の<p>を「無効化」する
        paragraph: false, 
        document: false
      }),
      // 4. 代わりに、上で作ったカスタム版（<div>版）を追加する
      CustomDivBlock,
      CustomDocument,
      TrailingNode,
      Placeholder.configure({
      placeholder: '新規ページ',
    }),
    ],
    immediatelyRender: false,
    editorProps: {
      attributes: {
        // フォーカス時の枠線を消し、必要に応じてエディタ全体のスタイルもここに書けます
        class: 'focus:outline-none', 
      },
    },
    /*
    onUpdate: ({ editor }) => {
      const editorJson = editor.getJSON();
      debouncedSave(editorJson);
    },
    */
  });

  return (
    <div className="flex flex-col max-w-2xl mx-auto mt-10 p-1">
      <EditorContent editor={editor}/>
    </div>
  );
}
