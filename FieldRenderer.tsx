import React from 'react';
import { FormField } from '../types/SchemaTypes';

interface FieldRendererProps {
  field: FormField;
  register: any;
  errors: any;
}

const FieldRenderer: React.FC<FieldRendererProps> = ({ field, register, errors }) => {
  const { id, type, label, required, placeholder, options, validation } = field;

  switch (type) {
    case 'text':
    case 'email':
      return (
        <div className="mb-4">
          <label htmlFor={id} className="block font-bold">{label}</label>
          <input
            id={id}
            type={type}
            placeholder={placeholder}
            {...register(id, { required, pattern: validation })}
            className="border p-2 rounded w-full"
          />
          {errors[id] && <p className="text-red-500">{errors[id].message}</p>}
        </div>
      );
    case 'select':
      return (
        <div className="mb-4">
          <label htmlFor={id} className="block font-bold">{label}</label>
          <select id={id} {...register(id, { required })} className="border p-2 rounded w-full">
            {options?.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
          </select>
        </div>
      );
    case 'textarea':
      return (
        <div className="mb-4">
          <label htmlFor={id} className="block font-bold">{label}</label>
          <textarea
            id={id}
            placeholder={placeholder}
            {...register(id, { required })}
            className="border p-2 rounded w-full"
          />
        </div>
      );
    default:
      return null;
  }
};

export default FieldRenderer;
