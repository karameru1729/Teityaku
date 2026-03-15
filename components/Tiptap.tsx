'use client'

import { Editor } from '@tiptap/core'
import StarterKit from '@tiptap/starter-kit'
import { Markdown } from '@tiptap/markdown'
import { EditorContent } from '@tiptap/react'

export default function Tiptap() {
  const editor = new Editor({
    extensions: [StarterKit,
    Markdown.configure({
      indentation: {
        style: 'space', // 'space' or 'tab'
        size: 2, // Number of spaces or tabs
      }
    })
    ],
    
    content: '# Hello World\n\nThis is **Markdown**!',
    contentType: 'markdown',
  })

  return(
    <>
      <EditorContent editor={editor}/>
    </>
  )
}