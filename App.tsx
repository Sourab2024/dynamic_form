import React, { useState } from 'react';
import JSONEditor from '../components/JSONEditor';
import FormPreview from '../components/FormPreview';
import { FormSchema } from '../types/SchemaTypes';

const App: React.FC = () => {
  const [schema, setSchema] = useState<FormSchema>({
    formTitle: '',
    formDescription: '',
    fields: [],
  });

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2">
      <JSONEditor onChange={(json: string) => setSchema(JSON.parse(json))} />
      </div>
      <div className="w-full md:w-1/2">
        <FormPreview schema={schema} />
      </div>
    </div>
  );
};

export default App;
