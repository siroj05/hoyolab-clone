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

interface Props {
  setHtml : (val : string) => void
  html : string
}

export default function MyEditor({
  html,
  setHtml
}:Props) {

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