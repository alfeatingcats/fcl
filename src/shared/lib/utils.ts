import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { EBBINGHAUS_INTERVALS } from "./const";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateRepetitionSchedule = () => {
  const now = new Date();
  return EBBINGHAUS_INTERVALS.map((intervalMinutes, index) => ({
    repetitionNumber: index + 1,
    scheduledAt: new Date(now.getTime() + intervalMinutes * 60 * 1000),
  }));
};

// export const extractTextFromLexicalJSON = (lexicalJSON: unknown): string => {
//   const editor = createEditor({ nodes: [] });
//   const editorState = editor.parseEditorState(lexicalJSON as string);

//   let text = "";
//   editorState.read(() => {
//     text = $getRoot().getTextContent().trim().replace(/\s+/g, " ");
//   });
//   return text;
// };

type LexicalNode = {
  text?: string;
  children?: LexicalNode[];
};

export const extractTextFromLexicalJSON2 = (lexicalJSON: unknown): string => {
  const traverse = (node: LexicalNode): string => {
    if (node.text) return node.text;
    if (node.children) return node.children.map(traverse).join(" ");
    return "";
  };

  try {
    const root = (lexicalJSON as { root: LexicalNode }).root;
    return traverse(root).trim().replace(/\s+/g, " ");
  } catch {
    return "";
  }
};
