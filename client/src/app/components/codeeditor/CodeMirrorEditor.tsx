// components/CodeMirrorEditor.tsx
"use client";

import { useEffect, useRef, useState } from 'react';
import { EditorView, basicSetup } from '@codemirror/basic-setup';
import { EditorState } from '@codemirror/state';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';
import {  Compartment } from '@codemirror/state';
const CodeMirrorEditor: React.FC = () => {
  const htmlEditorRef = useRef<HTMLDivElement>(null);
  const cssEditorRef = useRef<HTMLDivElement>(null);
  const jsEditorRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [activeEditor, setActiveEditor] = useState<string>('html');
  const [htmlEditor, setHtmlEditor] = useState<EditorView | null>(null);
  const [cssEditor, setCssEditor] = useState<EditorView | null>(null);
  const [jsEditor, setJsEditor] = useState<EditorView | null>(null);

  useEffect(() => {
    if (!htmlEditorRef.current || !cssEditorRef.current || !jsEditorRef.current) return;

    const htmlView = new EditorView({
      doc: '<!-- HTML Code -->\n<div id="app"></div>',
      extensions: [basicSetup, html(), oneDark],
      parent: htmlEditorRef.current,
    });
    setHtmlEditor(htmlView);

    const cssView = new EditorView({
      doc: '/* CSS Code */\n#app { color: red; }',
      extensions: [basicSetup, css(), oneDark],
      parent: cssEditorRef.current,
    });
    setCssEditor(cssView);

    const jsView = new EditorView({
      doc: '// JavaScript Code\nconsole.log("Hello, World!");',
      extensions: [basicSetup, javascript(), oneDark],
      parent: jsEditorRef.current,
    });
    setJsEditor(jsView);

    return () => {
      htmlView.destroy();
      cssView.destroy();
      jsView.destroy();
    };
    
  }, []);

  const updateIframe = () => {
    if (!htmlEditor || !cssEditor || !jsEditor || !iframeRef.current) return;

    const htmlCode = htmlEditor.state.doc.toString();
    const cssCode = cssEditor.state.doc.toString();
    const jsCode = jsEditor.state.doc.toString();
    const iframeDoc = iframeRef.current.contentDocument;

    if (!iframeDoc) return;

    iframeDoc.open();
    iframeDoc.write(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <style>${cssCode}</style>
        </head>
        <body>
          ${htmlCode}
          <script>${jsCode}<\/script>
        </body>
      </html>
    `);
    iframeDoc.close();
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex flex-col">
        <div className="flex justify-around bg-gray-700 text-white ">
          <button
            className={`p-2 ${activeEditor === 'html' ? 'bg-gray-600' : ''}`}
            onClick={() => setActiveEditor('html')}
          >
            HTML
          </button>
          <button
            className={`p-2 ${activeEditor === 'css' ? 'bg-gray-600' : ''}`}
            onClick={() => setActiveEditor('css')}
          >
            CSS
          </button>
          <button
            className={`p-2 ${activeEditor === 'js' ? 'bg-gray-600' : ''}`}
            onClick={() => setActiveEditor('js')}
          >
            JavaScript
          </button>
        </div>
        <div className="flex-grow overflow-y-auto  ">
          <div ref={htmlEditorRef} className={`h-5/6 ${activeEditor === 'html' ? 'block' : 'hidden'} bg-[#282c34]`}></div>
          <div ref={cssEditorRef} className={`h-5/6 ${activeEditor === 'css' ? 'block' : 'hidden'} bg-[#282c34]`}></div>
          <div ref={jsEditorRef} className={`h-5/6 ${activeEditor === 'js' ? 'block' : 'hidden'} bg-[#282c34]`}></div>
        </div>
       
      </div>
      <div className="w-1/2 border-l bg-white h-5/6">
        <iframe ref={iframeRef} className="w-full h-full border-none"></iframe>
        <div className='flex justify-end'>

        <button className="bg-lime-500 p-4 text-white" onClick={updateIframe}>Run</button>
        </div>
      </div>
    </div>
  );
};

export default CodeMirrorEditor;