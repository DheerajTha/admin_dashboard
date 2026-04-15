import * as Icons from "../icons";
import { HiOutlineTemplate } from "react-icons/hi";
import { BiCategory } from "react-icons/bi";
import { GrGallery } from "react-icons/gr";
import { AiFillProduct } from "react-icons/ai";


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
        title: "Tables",
        url: "/tables",
        icon: Icons.Table,
        items: [],
      },

      {
        title: "Category",
        url: "/category",
        icon: BiCategory,
        items: [],
      },
      {
        title: "Product",
        url: "/product",
        icon: AiFillProduct,
        items: [],
      },
      {
        title: "Media",
        url: "/media",
        icon: GrGallery,
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
            url: "/auth/sign_in",
          },
          {
            title: "Sign Up",
            url: "/auth/sign-up",
          },
        ],
      },
    ],
  },
];
