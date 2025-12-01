"use client";

import { usePathname } from "next/navigation";
import { FirstLogo } from "../icon/firstlogo";
import { MenuIcon } from "../icon/foodMenuIcon";
import { OrderIcon } from "../icon/orderIcon";

export const AdminSideBar = () => {
  const path = usePathname();

  console.log(path);

  return (
    <div className="h-screen w-[300px] flex flex-col gap-5  items-center p-5">
      <div className="flex items-center justify-center w-[165px]">
        <FirstLogo />
        <div>
          <h1 className="text-black">NomNom</h1>
          <p className="text-gray-100 ">Swift delivery</p>
        </div>
      </div>

      <a
        href="/admin/menu"
        className={`flex justify-center items-center rounded-2xl h-10 w-[165px] cursor-pointer gap-3  ${
          path == "/admin/menu" ? "bg-black text-white" : ""
        }`}
      >
        <MenuIcon strokeColor={path == "/admin/menu" ? "white" : "black"} />{" "}
        <p>Food menu</p>
      </a>
      <a
        href="/admin/order"
        className={`flex justify-center items-center gap-1 rounded-2xl h-10 w-[165px] cursor-pointer ${
          path == "/admin/order" ? "bg-black text-white" : ""
        }`}
      >
        <OrderIcon orderColor={path == "/admin/order" ? "white" : "black"} />
        <p className="">Orders</p>
      </a>
    </div>
  );
};
