import React, { useState } from 'react';
import Editor from 'react-json-editor-ajrm';
import locale from 'react-json-editor-ajrm/locale/en';

interface JSONEditorProps {
  onChange: (json: string) => void;
}

const JSONEditor: React.FC<JSONEditorProps> = ({ onChange }) => {
  const [error, setError] = useState<string | null>(null);

  const handleJSONChange = (content: any) => {
    try {
      JSON.parse(content.json); // Validate JSON
      onChange(content.json); // Pass the valid JSON to the parent
      setError(null); // Clear errors
    } catch (e) {
      setError('Invalid JSON');
    }
  };

  return (
    <div className="p-4">
      <div style={{ height: '400px', overflowY: 'auto' }}>
        <Editor
          locale={locale}
          onChange={handleJSONChange}
          theme="dark"
        />
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default JSONEditor;
