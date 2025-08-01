import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, disabled, to, type, soldOut, onClick }) => {
  const className =
    "inline-block cursor-pointer rounded-full bg-yellow-400 px-4 py-3 font-semibold tracking-wide text-stone-800 uppercase transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed sm:px-6 sm:py-4";

  const base =
    "inline-block cursor-pointer text-sm rounded-full bg-yellow-400 font-semibold tracking-wide text-stone-800 uppercase transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-2.5 py-2 md:px-5 md:py-2.5 text-xs ",
    round: base + " px-2.5 py-1 md:px-4 md:py-2 text-sm",
    secondary:
      "inline-block text-sm cursor-pointer rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5",
    soldOut:
      "inline-block text-sm rounded-full bg-yellow-400 font-semibold tracking-wide text-stone-800 uppercase transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed px-2.5 py-2 md:px-5 md:py-2.5 text-xs opacity-70 grayscale cursor-not-allowed",
  };
  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  return (
    <button onClick={onClick} className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
