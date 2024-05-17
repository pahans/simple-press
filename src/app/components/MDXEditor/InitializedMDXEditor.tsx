"use client";
import type { ForwardedRef } from "react";
import {
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  markdownShortcutPlugin,
  toolbarPlugin,
  MDXEditor,
  UndoRedo,
  CodeToggle,
  CreateLink,
  ListsToggle,
  InsertCodeBlock,
  InsertImage,
  BoldItalicUnderlineToggles,
  InsertTable,
  type MDXEditorMethods,
  type MDXEditorProps,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";

export default function InitializedMDXEditor({
  editorRef,
  ...props
}: { editorRef: ForwardedRef<MDXEditorMethods> | null } & MDXEditorProps) {
  return (
    <MDXEditor
      contentEditableClassName="prose"
      plugins={[
        headingsPlugin(),
        listsPlugin(),
        quotePlugin(),
        thematicBreakPlugin(),
        markdownShortcutPlugin(),
        toolbarPlugin({
          toolbarContents: () => (
            <>
              <UndoRedo />
              <BoldItalicUnderlineToggles />
              <CodeToggle />
              <InsertCodeBlock />
              <CreateLink />
              <ListsToggle />
              <InsertTable />
              <InsertImage />
            </>
          ),
        }),
      ]}
      {...props}
      ref={editorRef}
    />
  );
}
