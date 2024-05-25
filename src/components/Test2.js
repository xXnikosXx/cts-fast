// components/EmailForm.js
import { useForm } from 'react-hook-form';

export default function DeleteEmail() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('/api/delete-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        reset();
        alert('Email submitted successfully!');
      } else {
        alert(result.message || 'Failed to submit email.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="email"
        {...register('email', { required: true })}
        placeholder="Enter your email"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
