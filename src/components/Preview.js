// src/components/Preview.js
import React from 'react';
import PropTypes from 'prop-types';
import { marked } from 'marked';

function Preview({ markdown }) {
  return (
    <div
      id="preview"
      className="w-full h-64 p-4 bg-white border-2 border-gray-300 rounded-lg shadow-md overflow-y-auto"
      dangerouslySetInnerHTML={{ __html: marked(markdown) }}
    />
  );
}

Preview.propTypes = {
  markdown: PropTypes.string.isRequired,
};

export default Preview;
