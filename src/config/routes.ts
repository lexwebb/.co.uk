import { IconType } from "react-icons/lib";
import { RiFileList2Line, RiHomeLine } from "react-icons/ri";
import CV from "../pages/CV";
import Home from "../pages/Home";

interface RouteConfig {
  name: string;
  icon: IconType;
  page: () => JSX.Element;
}

export const routes: { [path: string]: RouteConfig } = {
  "/": {
    name: "Home",
    icon: RiHomeLine,
    page: Home,
  },
  "/cv": {
    name: "CV",
    icon: RiFileList2Line,
    page: CV,
  },
};
