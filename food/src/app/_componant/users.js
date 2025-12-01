"use client";

import { useEffect, useState } from "react";
import { DownIcon } from "../icon/downIcon";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
export const AdminUsers = ({ id, status }) => {
  const backend_url = process.env.PUBLIC_BACKEND_URL;
  const [orderStatus, setOrderStatus] = useState("");
  console.log(orderStatus, "asd");

  const getOrderStatus = async () => {
    const data = await fetch(`${backend_url}/foodOrder`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
      },
    });
    const jsonData = await data.json();
    setOrderStatus(jsonData), console.log(jsonData, "asd");
  };

  useEffect(() => {
    getOrderStatus();
  }, []);

  const handlOrderChange = async (id, status) => {
    try {
      const res = await fetch(`${backend_url}/foodOrder`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          id: id,
          status: status,
        }),
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-100% h-[52px] bg-white flex items-center pl-5 border-t border-gray-200 gap-25">
      <div className="w-12">
        <input type="Checkbox" />
      </div>
      <div className="w-14 flex justify-center "> 1</div>
      <div className="w-[214px]  text-gray-400 flex justify-center">
        Amgalan
      </div>
      <div className="w-40  text-gray-400 flex justify-between items-center">
        2 foods <DownIcon />
      </div>
      <div className="flex  w-40  text-gray-400 items-center">2024/12/20</div>

      <div className="w-40 text-gray-400 justify-center flex">$26.97</div>
      <div className="w-[214px] text-gray-400">2024/12/СБД, 12-р хороо,</div>
      <div className="w-40 justify-between flex items-center  border rounded-2xl border-red-600 font-semibold">
        <Select
          value={status}
          onValueChange={(value) => handlOrderChange(id, value)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue>
              <SelectValue />
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="PENDING">Pending</SelectItem>
              <SelectItem value="DELIVERED">Delivered</SelectItem>
              <SelectItem value="CANCELED">Canceled</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
