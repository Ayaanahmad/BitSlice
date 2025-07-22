import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
import LinkButton from "../../ui/LinkButton";

function Menu() {
  const menu = useLoaderData();
  console.log(menu);
  return (
    <div>
      <div className="flex items-center px-4 py-3">
        <LinkButton to="/">
          <span>&larr; </span>
          <span>Back to Home</span>
        </LinkButton>
      </div>
      <ul className="divide-y divide-stone-300 px-4">
        {menu.map((pizza) => (
          <MenuItem pizza={pizza} key={pizza.id} />
        ))}
      </ul>
    </div>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
