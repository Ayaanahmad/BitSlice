import { Link } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";
import { HiArrowLeft } from "react-icons/hi2";

function EmptyCart() {
  return (
    <div className="px-4 py-3 lg:ml-35">
      <div className="flex items-center">
        <LinkButton to="/menu">
          <HiArrowLeft/>
          <span>Back to Menu</span>
        </LinkButton>
      </div>
      <p className="mt-5 font-semibold">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
