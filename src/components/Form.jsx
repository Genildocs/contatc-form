import { useState } from 'react';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';
export default function Form() {
  const [data, setData] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = (data) => setData(data);
  console.log(watch('consent'));
  return (
    <form
      className="bg-white self-end md:w-[35vw]  p-5 md:p-8  rounded-lg"
      onSubmit={handleSubmit(onSubmit)}>
      <h1 className=" text-2xl font-bold">Contact Us</h1>
      <div className="flex flex-col ">
        {/* First and Last Name */}
        <div className="md:flex items-center justify-between gap-5">
          <div className="flex flex-col flex-1  mt-5">
            <label className="mb-1">First Name*</label>
            <input
              {...register('firstName', { required: true })}
              className={
                `${errors.firstName ? 'border-red-600' : 'border-stone-800'}` +
                ' outline-none border-2  border-solid rounded-lg p-2 '
              }
            />
            {errors.firstName && (
              <span className="text-red-600 mt-2">This field is required</span>
            )}
          </div>
          <div className="flex flex-col flex-1 mt-2 md:mt-5">
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
        </div>
        {/* Email Address */}
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
        {/* Query Type */}
        <div className="mt-2">
          <span>Query Type*</span>
          <div className="md:flex items-center justify-between gap-5">
            <div className="flex md:flex-1 items-center gap-2 border-2  border-solid rounded-lg p-2 mt-2 mb-2">
              <input
                name="queryType"
                type="radio"
                {...register('queryType', { required: true })}
              />
              <label>General Enquiry</label>
            </div>
            <div className="flex md:flex-1 items-center gap-2 border-2  border-solid rounded-lg p-2">
              <input
                name="queryType"
                type="radio"
                {...register('queryType', { required: true })}
              />
              <label>Support Request</label>
            </div>
          </div>
          {errors.queryType && (
            <div className="text-red-600 mt-2">
              <p>Please select a query type</p>
            </div>
          )}
        </div>
        {/* Message */}
        <div className="mt-2 flex flex-col">
          <label className="mb-1">Message*</label>
          <textarea
            {...register('message', { required: true })}
            className={clsx(
              'outline-none border-2  border-solid rounded-lg p-2 ',
              errors.message ? 'border-red-600' : 'border-stone-800'
            )}
          />
          {errors.message && (
            <span className="text-red-600 mt-2">This field is required</span>
          )}
        </div>
        {/* Terms and conditions */}
        <div className="md:my-5">
          <div className="flex items-center gap-3 mt-3 ">
            <input
              type="checkbox"
              {...register('consent', { required: true })}
            />
            <label>I consent to being contacted by the team*</label>
          </div>
          {errors.consent && (
            <span className="text-red-600 mt-2">
              To submit this form, please consent to being contacted
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
