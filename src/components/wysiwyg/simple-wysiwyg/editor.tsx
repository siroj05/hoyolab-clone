import { useState } from 'react';
import Editor, {  BtnBold,
  BtnBulletList,
  BtnClearFormatting,
  BtnItalic,
  BtnLink,
  BtnNumberedList,
  BtnRedo,
  BtnStrikeThrough,
  BtnStyles,
  BtnUnderline,
  BtnUndo,
  EditorProvider,
  HtmlButton,
  Separator,
  Toolbar, } from 'react-simple-wysiwyg';

export default function MyEditor() {
  const [html, setHtml] = useState('');
  console.log(html)
  function onChange(e:any) {
    setHtml(e.target.value);
  }

  return (
    <div className='flex flex-col gap-2'>
    <label htmlFor="">Konten</label>
    <EditorProvider>
      <Editor value={html} onChange={onChange}>
        <Toolbar>
          <BtnUndo />
          <BtnRedo />
          <Separator />
          <BtnBold />
          <BtnItalic />
          <BtnUnderline />
          <BtnStrikeThrough />
          <Separator />
          <BtnNumberedList />
          <BtnBulletList />
          <Separator />
          <BtnClearFormatting />
          <HtmlButton />
          <Separator />
          <BtnStyles />
        </Toolbar>
      </Editor>
    </EditorProvider>
    </div>
  );
}