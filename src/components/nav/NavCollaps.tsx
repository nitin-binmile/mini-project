import { NavList } from "./NavList";
import { Button } from "../Button/Button";

const NavCollaps = () => {
  return (
    <div className="flex justify-end lg:justify-between  w-full list-none">
      <div className="hidden  lg:flex justify-between  w-full list-none">
        <NavList />
        <div className="flex items-center gap-[20px]">
          <Button mode="secondary"> Create a resume</Button>
          <Button mode="primary">Sing In </Button>
        </div>
      </div>
      <div className="flex lg:hidden  bg-menubar w-[68px] h-[18px] bg-no-repeat"></div>
    </div>
  );
};

export default NavCollaps;
