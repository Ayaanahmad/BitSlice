import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

const Header = () => {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        <div className="flex items-center gap-2 mr-0">
          <img src="./BitSlice.png" className="w-10" alt="" />
          <p>BitSlice</p>
        </div>
      </Link>
      <SearchOrder />
    </header>
  );
};

export default Header;
