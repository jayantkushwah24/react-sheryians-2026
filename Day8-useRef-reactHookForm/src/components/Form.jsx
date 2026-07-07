import React, { useRef, useState } from "react";

const Form = () => {
  console.log("form re-rendering");
  const [formData, setFormData] = useState({});
  const formRef = useRef({});

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formRef);
    const obj = {
      name: formRef.current.productName.value,
      price: formRef.current.productPrice.value,
      category: formRef.current.productCategory.value,
      imageURL: formRef.current.productImageURL.value,
    };
    setFormData(obj);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-200">
      <form
        className="flex flex-col gap-5 p-4 border rounded bg-white"
        onSubmit={handleFormSubmit}
      >
        <input
          //   onChange={(e) =>
          //     setFormData({ ...formData, productName: e.target.value })
          //   }
          ref={(e) => (formRef.current.productName = e)}
          type="text"
          placeholder="Product Name"
          className="p-2 border rounded"
        />
        <input
          type="text"
          ref={(e) => (formRef.current.productPrice = e)}
          placeholder="Product Price"
          className="p-2 border rounded"
        />
        <select
          name="category"
          id=""
          className="p-2 border rounded"
          ref={(e) => (formRef.current.productCategory = e)}
        >
          <option value="" disabled selected>
            Select Product Category
          </option>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kids">Kids</option>
        </select>
        <input
          type="url"
          ref={(e) => (formRef.current.productImageURL = e)}
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

export default Form;

/**
 * when we handle form using useState inside input onChange it is not good because it
 * will re-render page too much.
 *
 * we have better option to handle form's input tag like using usRef.
 *
 * useRef is used to fetch the element from the real dom. (not from virtual dom)..
 * it is capable of storing reference of one or more html elements
 *
 * we pass the reference of html elements using ref={} attribute inside html tag..
 * ref={} provides reference of html elements to useRef
 */
