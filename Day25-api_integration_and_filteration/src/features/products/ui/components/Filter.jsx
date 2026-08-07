import React from "react";
import { useAllCategories } from "../../hook/useProductHook";

const Filter = ({ search, setSearch, categoryValue, setCategoryValue }) => {
  const { data, error, isLoading } = useAllCategories();

  if (isLoading) return <h1>Category loading...</h1>;

  return (
    <div>
      <input
        type="text"
        placeholder="search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "0.7rem 10rem",
          borderRadius: "1rem",
          margin: "2rem",
          textAlign: "center",
        }}
      />
      <select
        name="category"
        value={categoryValue}
        onChange={(e) => setCategoryValue(e.target.value)}
      >
        <option value="">All Category</option>
        {data?.map((category) => (
          <option key={category.id} value={category.slug}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
