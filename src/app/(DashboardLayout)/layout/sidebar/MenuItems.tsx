import {
  IconCopy,
  IconLayoutDashboard,
  IconUserPlus,
  IconLogin,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
 
  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/",
  },

  {
    id: uniqueId(),
    title: "Master",
    icon: IconUserPlus, 
    href: "#",
    // href: "/utilities/typography",

    items: [
      { name: "Module", link: "/dashboard/module" },
      { name: "Designation", link: "#" },
      { name: "Roles", link: "#" },
      { name: "Designation Modules", link: "#" },
      { name: "Designation Roles", link: "#" },
      { name: "Location Masters", link: "#" },
    ],
  },
  {
    id: uniqueId(),
    title: "Users",
    icon: IconUserPlus,
    href: "/users",
    items: [
      { name: "Module", link: "#" },
      { name: "Designation", link: "#" },
    ],
  },

  {
    id: uniqueId(),
    title: "Login",
    icon: IconLogin,
    href: "/authentication/login",
  },
  {
    id: uniqueId(),
    title: "Report",
    icon: IconCopy,
    href: "#",
    // href: "/authentication/register",
    items: [
      { name: "Module", link: "#" },
      { name: "Designation", link: "#" },
    ],
  },
  
  {
    id: uniqueId(),
    title: "Logs",
    icon: IconCopy,
    href: "#",
    items: [
      { name: "Module", link: "#" },
      { name: "Designation", link: "#" },
    ],
  },
  
];

export default Menuitems;
