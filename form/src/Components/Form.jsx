import React from "react";
import {useForm} from "react-hook-form"

const Form = ({handleFormSubmitData}) => {
const {register,handleSubmit} = useForm()
  return (
    <div className="mt-10 flex justify-center gap-10">
      <form className="flex gap-10" onSubmit={handleSubmit(data=>handleFormSubmitData(data))}>
        <input {...register("name")}
          className="px-2 py-1 border-1 rounded-md text-base font-semibold bg-white outline-none"
          type="text"
          placeholder="name"
        />

        <input {...register("email")}
          className="px-2 py-1 border-1 rounded-md text-base font-semibold bg-white outline-none"
          type="text"
          placeholder="email"
        />

        <input {...register("image")}
          className="px-2 py-1 border-1 rounded-md text-base font-semibold bg-white outline-none"
          type="text"
          placeholder="image Url"
        />

        <input
          className="px-5 py-1 bg-blue-600 text-white rounded-md cursor-pointer"
          type="submit"
        />
      </form>
    </div>
  );
};

export default Form;
