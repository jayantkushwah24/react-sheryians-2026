import React from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";

const Form = ({ user, setUser, setToggle, updatedUser, setUpdatedUser }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: { ...updatedUser },
  });

  function formSubmit(data) {
    if (updatedUser === null) {
      user.push({ ...data, id: nanoid() });
    } else {
      let index = user.findIndex((u) => u.id == updatedUser.id);
      user[index] = data;
      setUpdatedUser(null);
    }

    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
    reset();
    setToggle((prev) => !prev);
  }

  return (
    <div>
      <button
        className="cursor-pointer"
        onClick={() => setToggle((prev) => !prev)}
      >
        X
      </button>
      <h1>Create a User</h1>
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="flex flex-col w-fit gap-4 p-4 border rounded"
      >
        {errors.name && (
          <p className="text-red-800 font-bold text-xs">
            ⚠️{errors.name.message}
          </p>
        )}
        <input
          {...register("name", {
            required: "Name is required",
            pattern: {
              value: /^[a-z ,.'-]+$/i,
              message: "Enter valid name",
            },
          })}
          className="border rounded p-2"
          type="text"
          placeholder="Full Name"
        />

        {errors.email && (
          <p className="text-red-800 font-bold text-xs">
            ⚠️{errors.email.message}
          </p>
        )}
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})$/,
              message: "Invalid Email",
            },
          })}
          className="border rounded p-2"
          type="email"
          placeholder="Email"
        />

        {errors.contact && (
          <p className="text-red-800 font-bold text-xs">
            ⚠️{errors.contact.message}
          </p>
        )}
        <input
          {...register("contact", {
            required: "Contact Number is required",
            minLength: {
              value: 10,
              message: "Mininum 10 digits are required",
            },
            maxLength: {
              value: 10,
              message: "Maximum 10 digits are required",
            },
          })}
          className="border rounded p-2"
          type="mobile"
          placeholder="Contact"
        />

        {errors.imageURL && (
          <p className="text-red-800 font-bold text-xs">
            ⚠️{errors.imageURL.message}
          </p>
        )}
        <input
          {...register("imageURL", {
            required: "Image URL is required",
          })}
          className="border rounded p-2"
          type="url"
          placeholder="Image URL"
        />

        <button className="bg-blue-600 p-2 rounded text-white" type="submit">
          Add User
        </button>
      </form>
    </div>
  );
};

export default Form;
