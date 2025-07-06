import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";
import SearchOrder from "../features/order/SearchOrder";
function Home() {
  const userName = useSelector((state) => state.user.userName);
  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8 text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {!userName ? (
        <CreateUser />
      ) : (
        <>
          <h1 className="mb-4 text-xl font-semibold md:text-3xl">Welcome, {userName}</h1>
          <Button type="primary" to="menu">
            Continue Ordering
          </Button>
        </>
      )}
    </div>
  );
}

export default Home;
