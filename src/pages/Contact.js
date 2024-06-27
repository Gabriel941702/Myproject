import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ThemeContext } from '../context/ThemeContext';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  message: yup.string().required('Message is required'),
});

const Contact = () => {
  const { theme } = useContext(ThemeContext); // Access theme context
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    console.log(data);
    alert('Message sent successfully!');
  };

  return (
    <div className={`container mx-auto p-6 ${theme === 'dark' ? 'dark' : ''}`}>
      <h1 className="text-4xl font-bold mb-6 text-blue-600 dark:text-blue-300">Contact Us</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={`max-w-lg mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md ${theme === 'dark' ? 'dark' : 'light'}`}>
        <div className="mb-4">
          <label className={`block ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Name</label>
          <input {...register('name')} className={`w-full p-2 border border-gray-300 rounded mt-1 ${theme === 'dark' ? 'bg-gray-700 text-white' : ''}`} />
          <p className="text-red-600">{errors.name?.message}</p>
        </div>
        <div className="mb-4">
          <label className={`block ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Email</label>
          <input {...register('email')} className={`w-full p-2 border border-gray-300 rounded mt-1 ${theme === 'dark' ? 'bg-gray-700 text-white' : ''}`} />
          <p className="text-red-600">{errors.email?.message}</p>
        </div>
        <div className="mb-4">
          <label className={`block ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Message</label>
          <textarea {...register('message')} className={`w-full p-2 border border-gray-300 rounded mt-1 ${theme === 'dark' ? 'bg-gray-700 text-white' : ''}`} />
          <p className="text-red-600">{errors.message?.message}</p>
        </div>
        <button type="submit" className={`bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 ${theme === 'dark' ? 'dark:bg-gray-700 dark:text-white' : ''}`}>Send</button>
      </form>
    </div>
  );
};

export default Contact;
