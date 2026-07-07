import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";

const ReactHookForm = () => {
  console.log("form re-rendering");

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function formSubmit(data) {
    console.log(data);
    reset();
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-200">
      <form
        className="flex flex-col gap-5 p-4 border rounded bg-white"
        onSubmit={handleSubmit(formSubmit)}
      >
        <input
          {...register("name")}
          type="text"
          placeholder="Product Name"
          className="p-2 border rounded"
        />
        <input
          {...register("price")}
          type="text"
          placeholder="Product Price"
          className="p-2 border rounded"
        />
        <select
          {...register("category")}
          name="category"
          id=""
          className="p-2 border rounded"
        >
          <option value="" disabled selected>
            Select Product Category
          </option>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kids">Kids</option>
        </select>
        <input
          {...register("imageURL")}
          type="url"
          placeholder="Product Image URL"
          className="p-2 border rounded"
        />
        <button type="submit" className="p-2 bg-green-600 rounded text-white">
          Create
        </button>
      </form>
    </div>
  );
};

export default ReactHookForm;
