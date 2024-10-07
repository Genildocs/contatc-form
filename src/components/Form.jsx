import { useState } from 'react';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Completed from './Completed';
export default function Form() {
  const [valid, setValid] = useState(false);
  const notify = () => toast('Formulario enviado com sucesso!');
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

  const onSubmit = (data) => {
    setValid(true);
    notify();
  };

  return (
    <form
      className="bg-white self-end md:w-[50vw] xl:w-[35vw]  p-5 md:p-8  rounded-lg"
      onSubmit={handleSubmit(onSubmit)}>
      <ToastContainer />
      <h1 className=" text-2xl font-bold">Contact Us</h1>
      <div className="d-flex ">
        {/* First and Last Name */}
        <div className="md:flex items-center justify-between gap-5">
          <div className="d-flex flex-1  mt-5">
            <label className="mb-1">First Name*</label>
            <input
              {...register('firstName', { required: true })}
              className={
                `${
                  errors.firstName
                    ? 'border-red-600'
                    : 'border-stone-800 hover:border-green-300'
                }` + ' input-borders '
              }
            />
            {errors.firstName && (
              <span className="text-red-600 h-2 mt-2">
                This field is required
              </span>
            )}
          </div>
          <div className="d-flex flex-1 mt-2 md:mt-5  ">
            <label className="mb-1">Last Name*</label>
            <input
              {...register('lastName', { required: true })}
              className={
                `${
                  errors.lastName
                    ? 'border-red-600'
                    : 'border-stone-800 hover:border-green-300'
                }` + ' input-borders'
              }
            />
            {errors.lastName && (
              <span className="text-red-600 h-2 mt-2">
                This field is required
              </span>
            )}
          </div>
        </div>
        {/* Email Address */}
        <div className="d-flex mt-2">
          <label className="mb-1">Email Address*</label>
          <input
            {...register('email', {
              required: true,
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            })}
            className={
              `${
                errors.email
                  ? 'border-red-600 '
                  : 'border-stone-800 hover:border-green-300'
              }` + ' input-borders'
            }
          />
          {errors.email && (
            <div className="text-red-600 h-2 mt-2">
              Please enter a valid email address
            </div>
          )}
        </div>
        {/* Query Type */}
        <div className="mt-2">
          <span>Query Type*</span>
          <div className="md:flex items-center justify-between gap-5">
            <div className="flex md:flex-1 items-center gap-2 input-borders mt-2 mb-2 hover:border-green-300 ">
              <input
                name="queryType"
                type="radio"
                className="cursor-pointer"
                {...register('queryType', { required: true })}
              />
              <label>General Enquiry</label>
            </div>
            <div className="flex md:flex-1 items-center gap-2 input-borders hover:border-green-300 ">
              <input
                name="queryType"
                type="radio"
                className="cursor-pointer"
                {...register('queryType', { required: true })}
              />
              <label>Support Request</label>
            </div>
          </div>
          {errors.queryType && (
            <div className="text-red-600 h-2 mt-1">
              <p>Please select a query type</p>
            </div>
          )}
        </div>
        {/* Message */}
        <div className="mt-2 d-flex">
          <label className="mb-1">Message*</label>
          <textarea
            {...register('message', { required: true })}
            className={clsx(
              'input-borders',
              errors.message
                ? 'border-red-600'
                : 'border-stone-800 hover:border-green-300 '
            )}
          />
          {errors.message && (
            <span className="text-red-600 h-2 mt-2">
              This field is required
            </span>
          )}
        </div>
        {/* Terms and conditions */}
        <div className="md:my-5">
          <div className="flex items-center gap-3 mt-3 ">
            <input
              type="checkbox"
              className="cursor-pointer"
              {...register('consent', { required: true })}
            />
            <label>I consent to being contacted by the team*</label>
          </div>
          {errors.consent && (
            <span className="text-red-600 h-2 ">
              To submit this form, please consent to being contacted
            </span>
          )}
        </div>
        <button
          type="submit"
          className=" cursor-pointer bg-green-300 text-white font-semibold rounded-md p-3 mt-5 hover:bg-green-900">
          Submit
        </button>
      </div>
    </form>
  );
}
