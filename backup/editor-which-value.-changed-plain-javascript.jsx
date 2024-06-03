import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-json';
import 'prismjs/themes/prism.css';

const JsonEditor = () => {
  const initialJson = {
    'Partner ID': 'Prefill Value',
    deviceChannel: 'Hello',
    AcctInfo: {
      acctInfo: 'Prefill value',
      chAccAgeInd: '',
    },
  };

  const [code, setCode] = useState(JSON.stringify(initialJson, null, 2));
  const [originalJson] = useState(initialJson);
  const [editedJson, setEditedJson] = useState(initialJson);

  const handleChange = (newCode) => {
    setCode(newCode);
    try {
      const parsedJson = JSON.parse(newCode);
      setEditedJson(parsedJson);
    } catch (e) {
      console.error('Invalid JSON');
    }
  };

  const findDifferences = (original, edited) => {
    const changes = {};
    const checkChanges = (origObj, editObj, path = '') => {
      for (const key in origObj) {
        const newPath = path ? `${path}.${key}` : key;
        if (typeof origObj[key] === 'object' && origObj[key] !== null) {
          checkChanges(origObj[key], editObj[key], newPath);
        } else if (origObj[key] !== editObj[key]) {
          changes[newPath] = { original: origObj[key], edited: editObj[key] };
        }
      }
      for (const key in editObj) {
        if (!(key in origObj)) {
          const newPath = path ? `${path}.${key}` : key;
          changes[newPath] = { original: undefined, edited: editObj[key] };
        }
      }
    };
    checkChanges(original, edited);
    return changes;
  };

  const changes = findDifferences(originalJson, editedJson);
  console.log(changes);

  return (
    <div>
      <h1>JSON Editor</h1>
      <Editor
        value={code}
        onValueChange={handleChange}
        highlight={(code) => highlight(code, languages.json, 'json')}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 12,
          border: '1px solid #ddd',
          borderRadius: '4px',
          minHeight: '400px',
        }}
      />
      <h2>Changes</h2>
      <pre>{JSON.stringify(changes, null, 2)}</pre>
    </div>
  );
};

export default JsonEditor;
