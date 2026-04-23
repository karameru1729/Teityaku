import { Extension } from '@tiptap/core'

export const DocumentStartBackspaceExtension = Extension.create({
  name: 'documentStartBackspace',

  addKeyboardShortcuts() {
    return {
      Backspace: ({ editor }) => {
        const { state } = editor
        const { selection } = state
        const { empty, $anchor } = selection

        // ドキュメントの完全な先頭（絶対位置の1）にカーソルがあり、何も選択されていない状態か判定
        // ※ ProseMirrorの内部構造では、最初のブロックの先頭は pos === 1 になります
        if (empty && $anchor.pos === 1) {
          // タイトルの入力欄をIDで探す
          const titleInput = document.getElementById('notion-title-input') as HTMLTextAreaElement | HTMLInputElement
          
          if (titleInput) {
            // デフォルトのバックスペース挙動（ブロックの削除など）を防ぐ
            titleInput.focus()

            // カーソルをタイトルの文字の最後に移動させる（UX向上）
            // 少し遅延させないとReact/ブラウザのレンダリングサイクルで先頭に戻ってしまうことがあるため setTimeout を使用
            setTimeout(() => {
              const length = titleInput.value.length
              titleInput.setSelectionRange(length, length)
            }, 0)

            return true // ここで処理を完了とする
          }
        }

         // 先頭以外でのバックスペースは標準の挙動に任せる
        return false
      },
    }
  },
})
