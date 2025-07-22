import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return null;

  console.log(totalCartQuantity);
  return (
    <div className="fixed bottom-0 left-0 flex w-full items-center justify-between bg-stone-800 px-4 py-3 text-sm text-stone-200 uppercase transition-all sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <div className="flex items-center">
        <Link to="/cart">
          <span>Open cart </span>
          <span>&rarr;</span>
        </Link>
      </div>
    </div>
  );
}

export default CartOverview;
