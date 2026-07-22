import React, { useEffect, useState } from "react";
import { axiosInstance } from "../config/axiosInstance";

const Home = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);

  function fetchProductData() {
    axiosInstance
      .get("/products")
      .then((response) => {
        let data = response.data;        
        setProductData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="grid grid-cols-5 grid-rows-5 gap-4 ">
      {productData.map((p) => {
        return (
          <div key={p.id} className="border bg-red-100 flex flex-col justify-center items-center text-center">
            <div className="img">
              <img src={p.image} alt="" className="h-30" />
            </div>
            <div>
              <h1>{p.title}</h1>
              <h1>{p.desc}</h1>
              <h1>{p.price}</h1>
              <button className="bg-red-600 text-white p-2 rounded-full">Add to cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
