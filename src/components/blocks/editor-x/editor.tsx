'use client'

import {
  type InitialConfigType,
  LexicalComposer,
} from '@lexical/react/LexicalComposer'
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin'
import type { EditorState, SerializedEditorState } from 'lexical'
import { type FC, useMemo } from 'react'

import { editorTheme } from '@/components/editor/themes/editor-theme'
import { TooltipProvider } from '@/components/ui/tooltip'

import { nodes } from './nodes'
import { Plugins, type PluginsProps } from './plugins'

const editorConfig: InitialConfigType = {
  namespace: 'Editor',
  theme: editorTheme,
  nodes,
  onError: (error: Error) => {
    console.error(error)
  },
}

type EditorProps = {
  editorState?: EditorState
  editorSerializedState?: SerializedEditorState
  onChange?: (editorState: EditorState) => void
  onSerializedChange?: (editorSerializedState: SerializedEditorState) => void
} & PluginsProps

export const Editor: FC<EditorProps> = ({
  editorState,
  editorSerializedState,
  onChange,
  onSerializedChange,
  placeholder,
  wrapperClassName,
}) => {
  const initialConfig = useMemo(
    () => ({
      ...editorConfig,
      ...(editorState ? { editorState } : {}),
      ...(editorSerializedState
        ? { editorState: JSON.stringify(editorSerializedState) }
        : {}),
    }),
    [editorSerializedState, editorState],
  )
  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: <_explanation>
    // biome-ignore lint/a11y/useKeyWithClickEvents: <_explanation>
    <div
      className="bg-background overflow-hidden rounded-lg border shadow"
      onClick={(e) => e.stopPropagation()}
    >
      <LexicalComposer initialConfig={initialConfig}>
        <TooltipProvider>
          <Plugins
            wrapperClassName={wrapperClassName}
            placeholder={placeholder}
          />

          <OnChangePlugin
            ignoreSelectionChange={true}
            onChange={(editorState) => {
              onChange?.(editorState)
              onSerializedChange?.(editorState.toJSON())
            }}
          />
        </TooltipProvider>
      </LexicalComposer>
    </div>
  )
}
