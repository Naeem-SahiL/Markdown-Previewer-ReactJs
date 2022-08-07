import { marked } from 'marked';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { EditorContext } from "./EditorContext";


function EditorContextProvider({ children }) {
    const [previewText, setPreviewText] = useState('');
    const [editorTxt, setEditorTxt] = useState(
        `# Play with it  
**Nobody** is going to charge you!!!  
double space and then enter for new line  
____  
Markdown is so popular now adays 
=
#### even docs of popular frameworks and liberaries are written in markdown
here is h2  
- 
<a href="https://linkedin.com/in/naeemsahil" target="_blank">follow me on linkedIn</a>`
    );

    useEffect(() => {
        const parsed = marked(editorTxt);
        setPreviewText(parsed);
    }, [editorTxt])

    return (
        <EditorContext.Provider value={{ previewText, editorTxt, setEditorTxt }}>
            {children}
        </EditorContext.Provider>
    )
}

export default EditorContextProvider