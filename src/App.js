import React, { useState } from 'react';
import './App.css';
import { marked } from 'marked';
import 'bootstrap/dist/css/bootstrap.min.css';

marked.setOptions({
  breaks: true, // Markdown line breaks
});

const defaultMarkdown = `
# Welcome to my Markdown Previewer!
## This is a subheading...
### Check out these cool features:
- List item 1
- List item 2
[Link](https://github.com/iamfarhatsharefi)
\`Inline code\`
\`\`\`
Code block
\`\`\`
> Blockquote
**Bold text**
![Image](https://via.placeholder.com/150)
`;

function App() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  return (
    <div className="container-fluid d-flex flex-column align-items-center min-vh-100 bg-light p-4">
      <header className="text-center mb-4">
        <h1 className="text-dark display-4">Markdown Previewer</h1>
        <p className="lead text-muted">Convert Markdown to HTML in real-time!</p>
      </header>
      
      <div className="row w-100">
        {/* Editor Section */}
        <div className="col-md-6 mb-4">
          <h3 className="text-primary">Editor</h3>
          <textarea
            id="editor"
            className="form-control p-3"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            rows="12"
          />
        </div>

        {/* Preview Section */}
        <div className="col-md-6 mb-4">
          <h3 className="text-success">Preview</h3>
          <div
            id="preview"
            className="border p-3 bg-white rounded shadow-sm"
            dangerouslySetInnerHTML={{ __html: marked(markdown) }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
