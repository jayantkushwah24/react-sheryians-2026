const ProductCard = ({ id, imgUrl, title, price, desc, deleteProd }) => {
  return (
    <div className=" w-[24vw] flex flex-col items-center justify-center border-2 p-4 rounded-2xl">
      <img src={imgUrl} alt="" className="h-40 " />
      <h1 className="text-2xl font-bold">{title}</h1>
      <h3 className="text-xl font-medium">${price}</h3>
      <p className="text-gray-600 text-sm m-4">{desc}</p>
      <button onClick={() => deleteProd(id)} className="border bg-red-600 text-white px-8 cursor-pointer py-2 rounded-xl">
        Delete
      </button>
    </div>
  );
};

export default ProductCard;
