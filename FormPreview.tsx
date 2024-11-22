import React from 'react';
import { useForm } from 'react-hook-form';
import FieldRenderer from './FieldRenderer';
import { FormSchema } from '../types/SchemaTypes';

interface FormPreviewProps {
  schema: FormSchema;
}

const FormPreview: React.FC<FormPreviewProps> = ({ schema }) => {
  const { formTitle, formDescription, fields } = schema;
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    alert('Form submitted successfully!');
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">{formTitle}</h1>
      <p>{formDescription}</p>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
        {fields.map(field => (
          <FieldRenderer key={field.id} field={field} register={register} errors={errors} />
        ))}
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default FormPreview;
