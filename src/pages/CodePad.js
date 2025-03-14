import React, { useState, useEffect } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { javascript } from '@codemirror/lang-javascript';
import "./CodePad.css"; 

const CodePad = () => {
  const [htmlCode, setHtml] = useState("");
  const [cssCode, setCss] = useState("");
  const [jsCode, setJs] = useState("");
  const [theme] = useState('dark'); // Removed unused 'setTheme'
  const [output, setOutput] = useState("");

  const srcDoc = `
    <html>
      <style>${cssCode}</style>
      <body>${htmlCode}</body>
      <script>${jsCode}</script>
    </html>
  `;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOutput(srcDoc);
    }, 300);
    return () => clearTimeout(timeout);
  }, [srcDoc]); // Added 'srcDoc' to dependency array

  const downloadFile = (code, language) => {
    const blob = new Blob([code], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = `code.${language}`;
    link.href = url;
    link.click();
  };

  const clearCode = () => {
    setHtml("");
    setCss("");
    setJs("");
  };

  return (
    <div className="codepad-container">
      <nav className="navbar">
        <div className="logo">WebDevHub</div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/learn">Learn</a></li>
          <li><a href="/codepad">CodePad</a></li>
          <li><a href="/resources">Resources</a></li>
        </ul>
      </nav>

      <header className="codepad-hero">
        <h1>⚡ Interactive Code Playground</h1>
        <p>Write HTML, CSS & JavaScript — See the magic happen in real-time!</p>
      </header>

      <div className="controls">
        <button onClick={() => downloadFile(htmlCode, "html")}>💾 Download HTML</button>
        <button onClick={() => downloadFile(cssCode, "css")}>💾 Download CSS</button>
        <button onClick={() => downloadFile(jsCode, "js")}>💾 Download JS</button>
        <button onClick={clearCode}>🧹 Clear All</button>
      </div>

      <div className="editor-container">
        <div className="editor">
          <h3>📝 HTML</h3>
          <CodeMirror
            value={htmlCode}
            height="200px"
            theme={theme}
            extensions={[html()]}
            onChange={(value) => setHtml(value)}
          />
        </div>
        <div className="editor">
          <h3>🎨 CSS</h3>
          <CodeMirror
            value={cssCode}
            height="200px"
            theme={theme}
            extensions={[css()]}
            onChange={(value) => setCss(value)}
          />
        </div>
        <div className="editor">
          <h3>⚙️ JavaScript</h3>
          <CodeMirror
            value={jsCode}
            height="200px"
            theme={theme}
            extensions={[javascript()]}
            onChange={(value) => setJs(value)}
          />
        </div>
      </div>

      <div className="output-container">
        <h3>🌐 Live Output</h3>
        <iframe
          srcDoc={output}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>

      <footer>
        <p>© 2025 WebDevHub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CodePad;
