import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Form() {
  const [data, setData] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: { firstName: '', lastName: '', email: '' } });

  const onSubmit = (data) => setData(data);

  return (
    <form
      className="bg-white self-end md:w-[50vw] p-5  rounded-lg"
      onSubmit={handleSubmit(onSubmit)}>
      <h1 className=" text-2xl font-bold">Contact Us</h1>
      <div className="flex flex-col">
        <div className="flex flex-col mt-5">
          <label className="mb-1">First Name*</label>
          <input
            {...register('firstName', { required: true })}
            className={
              `${errors.firstName ? 'border-red-600' : 'border-stone-800'}` +
              ' outline-none border-2  border-solid rounded-lg p-2'
            }
          />
          {errors.firstName && (
            <span className="text-red-600 mt-2">This field is required</span>
          )}
        </div>
        <div className="flex flex-col mt-2">
          <label className="mb-1">Last Name*</label>
          <input
            {...register('lastName', { required: true })}
            className={
              `${errors.lastName ? 'border-red-600' : 'border-stone-800'}` +
              ' outline-none border-2  border-solid rounded-lg p-2'
            }
          />
          {errors.lastName && (
            <span className="text-red-600 mt-2">This field is required</span>
          )}
        </div>
        <div className="flex flex-col mt-2">
          <label className="mb-1">Email Address*</label>
          <input
            {...register('email', {
              required: true,
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            })}
            className={
              `${errors.email ? 'border-red-600' : 'border-stone-800'}` +
              ' outline-none border-2  border-solid rounded-lg p-2'
            }
          />
          {errors.email && (
            <span className="text-red-600 mt-2">
              Please enter a valid email address
            </span>
          )}
        </div>
        <button
          type="submit"
          className=" cursor-pointer bg-green-600 text-white font-semibold rounded-md p-3 mt-5">
          Submit
        </button>
      </div>
    </form>
  );
}
