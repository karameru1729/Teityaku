'use client' // 1️⃣ ここはクライアントコンポーネントにします

import dynamic from 'next/dynamic';
import React from 'react';

// 2️⃣ ここで ssr: false を指定して、本体の Editor を読み込む
// ※パス('./Editor')は、Editor.tsxがある実際の場所に合わせて調整してください
const Editor = dynamic(() => import('./Editor'), {
  ssr: false,
  loading: () => <p>エディタを読み込み中...</p>,
});

export default function EditorWrapper() {
  return <Editor />;
}