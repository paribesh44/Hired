import React from "react";
import { MdHome } from "react-icons/md";
import { MdOutlineHistory } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import { BiLogOutCircle } from "react-icons/bi";

export const Profiledata = [
  {
    title: "Edit Profile",
    icon: <FiEdit3 size={20} />,
    // selected: true,
    link: ["/UserHomeTab"],
  },
  {
    title: "LogOut",
    icon: <BiLogOutCircle size={20} />,
    // selected: false,
    link: ["/UserHistory"],
  },
];
