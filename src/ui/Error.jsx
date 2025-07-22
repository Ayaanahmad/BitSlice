import { useNavigate, useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";
import { HiArrowLeft } from "react-icons/hi2";

function Error() {
  const error = useRouteError();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <LinkButton to="-1">
        <HiArrowLeft />
        <span>Go Back</span>
      </LinkButton>
    </div>
  );
}

export default Error;
