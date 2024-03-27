'use client'
import React, { useState, useEffect } from 'react';
import Editor from './Editor'
import styles from "./editor.module.css"
import Button from './Button';
import { redirect } from 'next/navigation';


function EditorApp() {
  const [html, setHtml] = useState('html', '')
  const [css, setCss] = useState('css', '')
  // const [js, setJs] = useState('js', '')
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
        </html>
      `)
    }, 250)

   

    return () => clearTimeout(timeout)
  }, [html, css])


  async function backToCourse() {
  
    redirect("/");
  }
  return (
    <>
      <div className={styles.topPane}>
        <div className={styles.paneContainer}>
          <div className={styles.htmlBox}>
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        </div>
        <div className={styles.cssBox}>
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        </div>
        </div>
      </div>
      <div className={styles.pane}>
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
       
      </div>
      <Button action={backToCourse}  caption="Back To Course"/>
    </>
  )
}

export default EditorApp;