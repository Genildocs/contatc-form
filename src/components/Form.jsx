import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const schema = Joi.object({
  firstName: Joi.string()
    .pattern(new RegExp(/^[a-zA-Z]+$/))
    .required(),
  lastName: Joi.string()
    .pattern(new RegExp(/^[a-zA-Z]+$/))
    .required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: false })
    .pattern(new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/))
    .required(),
  queryType: Joi.string().required(),
  message: Joi.string().required(),
  consent: Joi.boolean().valid(true).required(),
});

export default function Form() {
  const notify = () => {
    toast('Formulario enviado com sucesso!');
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(schema),
  });
  console.log(errors);
  function onSubmit(data) {
    console.log(data);
    notify();
  }

  return (
    <>
      <ToastContainer />
      <form
        className="bg-white p-5 md:w-[50vw] xl:w-[35vw] md:p-8 md:my-12 rounded-lg"
        onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-2xl font-bold mb-5">Contact Us</h1>
        <div className="md:flex justify-between">
          {/* First and Last Name */}
          <div>
            <label>First Name*</label>
            <input
              {...register('firstName')}
              className={`${
                errors.firstName
                  ? 'border-red-600'
                  : 'border-stone-800 hover:border-green-300'
              }  block w-full input-borders mt-2  `}
            />
            <div className="h-5 mt-2 mb-2">
              {errors.firstName && (
                <p className="text-red-600">This field is required</p>
              )}
            </div>
          </div>
          <div>
            <label>Last Name*</label>
            <input
              {...register('lastName')}
              className={`${
                errors.lastName
                  ? 'border-red-600'
                  : 'border-stone-800 hover:border-green-300'
              }  block w-full input-borders mt-2  `}
            />
            <div className="h-2 mt-2 mb-5">
              {errors.lastName && (
                <p className="text-red-600">This field is required</p>
              )}
            </div>
          </div>
        </div>
        {/* Email Address */}
        <div>
          <label>Email*</label>
          <input
            {...register('email')}
            className={`${
              errors.email
                ? 'border-red-600'
                : 'border-stone-800 hover:border-green-300'
            }  block w-full input-borders mt-2  `}
          />
          <div className="h-2 mt-2 mb-2">
            {errors.email && (
              <p className="text-red-600">Please enter a valid email address</p>
            )}
          </div>
        </div>
        {/* Query Type */}
        <div className="mt-5">
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
                {...register('queryType')}
              />
              <label>Support Request</label>
            </div>
          </div>
          <div className="text-red-600 h-2 my-2">
            {errors.queryType && <p>Please select a query type</p>}
          </div>
        </div>
        {/* Message */}
        <div className="mt-5 d-flex">
          <label className="mb-1">Message*</label>
          <textarea
            {...register('message')}
            className={`
            ${
              errors.message
                ? 'border-red-600'
                : 'border-stone-800 hover:border-green-300 '
            } input-borders`}
          />
          <div className="text-red-600 h-2 my-2">
            {errors.message && (
              <span className="text-red-600 ">This field is required</span>
            )}
          </div>
        </div>
        {/* Terms and conditions */}
        <div className="md:my-5">
          <div className="flex items-center gap-3 mt-3 ">
            <input
              type="checkbox"
              className="cursor-pointer"
              {...register('consent')}
            />
            <label>I consent to being contacted by the team*</label>
          </div>
          <div className="text-red-600 h-2 my-2">
            {errors.consent && (
              <span className="text-red-600  ">
                To submit this form, please consent to being contacted
              </span>
            )}
          </div>
        </div>
        <div>
          <input
            type="submit"
            value="Submit"
            className=" cursor-pointer bg-green-300 text-white font-semibold rounded-md p-3 mt-16 md:mt-5 hover:bg-green-900 w-full"
          />
        </div>
      </form>
    </>
  );
}
