import * as Icons from "../icons";
import { HiOutlineTemplate } from "react-icons/hi";


export const NAV_DATA = [
  {
    label: "MAIN MENU",
    items: [
      {
        title: "Dashboard",
        icon: Icons.HomeIcon,
        url: "/",
        items: [],
      },
       
      {
        title: "Profile",
        url: "/profile",
        icon: Icons.User,
        items: [],
      },
      {
        title: "Forms",
        icon: Icons.Alphabet,
        url: "/forms",
        items: [],
      
      },
      {
        title: "Tables",
        url: "/tables",
        icon: Icons.Table,
        items: [],
      },

      {
        title: "Templates",
        url: "/templates",
        icon: HiOutlineTemplate,
        items: [],
      }
       
    ],
  },
  {
    label: "OTHERS",
    items: [
     
      {
        title: "Authentication",
        icon: Icons.Authentication,
        items: [
          {
            title: "Sign In",
            url: "/auth/sign-in",
          },
        ],
      },
    ],
  },
];
