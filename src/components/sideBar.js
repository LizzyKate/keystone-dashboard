import React from "react";
import logo from "../assets/logo.svg";
// import { Activity } from "react-iconly";
import { NavLink } from "react-router-dom";
import {
  Gauge,
  Brandy,
  Book,
  ShoppingBag,
  User,
  ChartLine,
  HourglassSimple,
  SelectionInverse,
  Gear,
} from "phosphor-react";

const nav = [
  {
    link: "/",
    icon: <Gauge size={16} />,
    name: "Dashboard",
  },
  {
    link: "/products",
    icon: <Brandy size={16} />,
    name: "Products",
  },
  {
    link: "/blog",
    icon: <Book size={16} />,
    name: "Blog",
  },
  {
    link: "/transactions",
    icon: <ShoppingBag size={16} />,
    name: "Transactions",
  },
  {
    link: "/users",
    icon: <User size={16} />,
    name: "Users",
  },
  {
    link: "/analysis",
    icon: <ChartLine size={16} />,
    name: "Analysis",
  },
  {
    link: "/report",
    icon: <HourglassSimple size={16} />,
    name: "Reports",
  },
  {
    link: "/investment",
    icon: <SelectionInverse size={16} />,
    name: "Investment",
  },
  {
    link: "/settings",
    icon: <Gear size={16} />,
    name: "Settings",
  },
];

function SideBar() {
  return (
    <>
      <div className="">
        <img src={logo} alt="logo" />
      </div>
      <nav className="mt-12">
        {nav.map((e, i) => {
          return (
            <div key={i} className="mt-2">
              <NavLink
                to={e.link}
                className=" text-xs text-gray-500 flex items-center font-semibold py-2 px-4"
                activeClassName="text-blue-600 bg-gray-100 rounded-md"
              >
                <span className="">{e.icon}</span>
                <span className="ml-2">{e.name}</span>
              </NavLink>
            </div>
          );
        })}
      </nav>
    </>
  );
}

export default SideBar;
