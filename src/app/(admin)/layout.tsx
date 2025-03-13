'use client'

import Sidebar from "@/component/Sidebar/sideBar";
import { Suspense } from "react";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <>
            <Sidebar />
            <div className="pl-64">
                {children}
            </div>
        </>
    );
}
