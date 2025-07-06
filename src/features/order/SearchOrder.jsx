import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SearchOrder = () => {
  const navigate = useNavigate("");
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;

    navigate(`/order/${query}`);
    setQuery("");
  };
  return (
    <form onSubmit={handleSubmit} className="">
      <input
        placeholder="Search order id..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="ml-2 w-40 rounded-full bg-yellow-100 px-4 py-2 text-xs placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-72 sm:placeholder:text-sm"
      />
    </form>
  );
};

export default SearchOrder;
