import React, { useEffect, useMemo, useState } from "react";

const Home = () => {
  const [productData, setProductData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [scrollY, setScrollY] = useState();

  useEffect(() => {
    async function getProductData() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProductData(data);
        setSearchData(data);
      } catch (error) {
        console.error(error);
      }
    }
    getProductData();
  }, []);

  //  Debounced Search Effect
  useEffect(() => {
    if (!searchInput.trim()) {
      setSearchData(productData);
    }

    let timer = setTimeout(() => {
      let result = productData.filter((p) =>
        p.title.toLowerCase().includes(searchInput.toLowerCase()),
      );
      setSearchData(result);
    }, 700);

    // Cleanup: Clear the timer if searchInput changes before 700ms
    return () => clearTimeout(timer);
  }, [searchInput, productData]);

  // throttling
  useEffect(() => {
    let throttle = false;
    const handleScroll = () => {
      if (throttle === true) return;
      throttle = true;
      console.log("scrolling");
      setScrollY(window.scrollY);
      setTimeout(() => {
        throttle = false;
      }, 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="search here..."
        onChange={(e) => setSearchInput(e.target.value)}
        value={searchInput}
        style={{
          padding: "0.8rem",
          width: "15rem",
          borderRadius: "50px",
          textAlign: "center",
        }}
      />
      {searchData.map((p) => (
        <h1 key={p.id}>{p.title}</h1>
      ))}
    </div>
  );
};

export default Home;
