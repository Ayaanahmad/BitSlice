import { formatCurrency } from "../../utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import Button from "../../ui/Button";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";
import LinkButton from "../../ui/LinkButton";
import { useNavigation } from "react-router-dom";
import PageLoader from "../../ui/PageLoader";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice: unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={isLoading ? <PageLoader /> : imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? `opacity-70 grayscale` : ""}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm text-stone-500 capitalize italic">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium text-stone-500 uppercase">
              Sold out
            </p>
          )}

          {isInCart && (
            // <div className="flex items-center gap-3 sm:gap-6">
            <div className="flex flex-col items-center gap-2 sm:flex-row sm:items-center sm:gap-6">
              <UpdateItemQuantity pizzaId={id} quantity={currentQuantity} />
              <DeleteItem pizzaId={id} />
            </div>
          )}
          {!isInCart && (
            <Button
              onClick={handleAddToCart}
              type={soldOut ? "soldOut" : "small"}
              disabled={soldOut}
            >
              Add to Cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
