import React, { useMemo, useState } from "react";
import { createEditor, Descendant } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { withHistory } from "slate-history";
import { FileText } from "lucide-react";


const MyEditor = () => {
  const [editor] = useState(() => withReact(createEditor()));
  const initialValue = [
    {
      type: "paragraph",
      children: [{ text: "Hello World" }]
    }
  ];
  return (
    <div className="App">
      <Slate editor={editor} initialValue={initialValue}>
        <Editable />
      </Slate>
    </div>
  );
};

export default MyEditor;
