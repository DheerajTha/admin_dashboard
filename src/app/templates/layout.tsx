import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metaData: Metadata = {
    title: "Templates"
}

export default function Layout ({ children} : PropsWithChildren) {
    return  children
}