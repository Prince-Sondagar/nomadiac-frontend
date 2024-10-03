import { Dispatch, SetStateAction } from "react";
import Navbar from "./Navbar";

type IHeader = {
  open?: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const Header = ({ open, setOpen }: IHeader) => <Navbar />;

export default Header;
