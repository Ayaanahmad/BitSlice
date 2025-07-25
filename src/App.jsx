import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Order, {loader as orderLoader} from "./features/order/Order";
import CreateOrder, { action as createOrderAction } from "./features/order/CreateOrder";
import Cart from "./features/cart/Cart";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";

const router = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout />,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        errorElement: <Error/>, 
        loader: menuLoader
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction
      },
      {
        path: "/order/:orderId",
        element: <Order/>,
        errorElement: <Error/>,
        loader: orderLoader
      },
      {
        path: "*",
        element: <Error/>
      }
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
