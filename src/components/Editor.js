// src/components/Editor.js
import React from 'react';
import PropTypes from 'prop-types';

function Editor({ markdown, setMarkdown }) {
  return (
    <textarea
      id="editor"
      className="w-full h-64 p-4 border-2 border-gray-300 rounded-lg"
      value={markdown}
      onChange={(e) => setMarkdown(e.target.value)}
    />
  );
}

Editor.propTypes = {
  markdown: PropTypes.string.isRequired,
  setMarkdown: PropTypes.func.isRequired,
};

export default Editor;
