// src/App.js
import React, { useState } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import './App.css';

function App() {
  const [markdown, setMarkdown] = useState(`# Heading 1\n## Heading 2\n\n[Link](https://www.freecodecamp.org)\n\n\`inline code\`\n\n\`\`\`\ncode block\n\`\`\`\n\n- List item\n\n> Blockquote\n\n![Image](https://via.placeholder.com/150)\n\n**Bold Text**`);

  return (
    <div className="app">
      <Editor markdown={markdown} setMarkdown={setMarkdown} />
      <Preview markdown={markdown} />
    </div>
  );
}

export default App;
