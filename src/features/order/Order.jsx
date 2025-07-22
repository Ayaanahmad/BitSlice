// Test ID: IIDSAT

import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import OrderItem from "./OrderItem";
import LinkButton from "../../ui/LinkButton";
import { useEffect, useState } from "react";

function Order() {
  const order = useLoaderData();
  console.log(order);
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const newOrderFlag = localStorage.getItem("newOrderPlaced");
    if (newOrderFlag === "true") {
      setShowModal(true);
      localStorage.removeItem("newOrderPlaced");
    }
  }, []);

  return (
    <div className="space-y-8 px-4 py-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-bold">Order #{id} status</h2>

        <div className="space-x-2">
          {priority && (
            <span className="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold tracking-wide text-red-50 uppercase">
              Priority
            </span>
          )}
          <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-semibold tracking-wide text-green-50 uppercase">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 bg-stone-200 px-6 py-5">
        <p className="font-medium">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-sm text-stone-500">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className="divide-y divide-stone-200">
        {cart.map((item) => (
          <OrderItem item={item} key={item.id} />
        ))}
      </ul>

      <div className="space-y-2 bg-stone-200 px-6 py-5">
        <p className="text-sm font-medium text-stone-600">
          Price pizza: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="text-sm font-medium text-stone-600">
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="font-bold">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
      <div className="flex justify-center">
        <LinkButton to="/menu">
          <span>Back to Menu</span>
        </LinkButton>
      </div>
      {showModal && (
        <div className="bg-opacity-30 fixed inset-0 z-50 flex items-center justify-center bg-white/30 backdrop-blur-sm">
          <div className="w-11/12 max-w-md rounded-lg border border-yellow-400 bg-white p-6 text-center shadow-lg">
            <h2 className="mb-2 text-xl font-semibold">🎉 Order Placed!</h2>
            <p className="mb-1 text-sm">Please note your Order ID:</p>
            <p className="mb-4 font-mono text-lg font-bold">{order.id}</p>
            <button
              className="cursor-pointer rounded-full bg-yellow-400 px-4 py-2 font-semibold text-stone-800 transition hover:bg-yellow-300"
              onClick={() => setShowModal(false)}
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
