import React, { useEffect, useState } from "react";
import { axiosInstance } from "../config/axiosInstance";

const About = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  function fetchProductData() {
    axiosInstance
      .get("/users")
      .then((response) => {
        let data = response.data;
        console.log(data);

        setUserData(data);
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
    <div className="grid grid-cols-5 gap-5">
      {userData.map((u) => {
        return (
          <div key={u.id} className="border p-2 bg-red-100">
            <h1 className="text-bold text-xl ">
              Full Name: {u.name.firstname} {u.name.lastname}
            </h1>
            <h2>Email: {u.email}</h2>
            <h3>Username: {u.username}</h3>
            <h4>Password: {u.password}</h4>
            <h5>Phone: {u.phone}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default About;
