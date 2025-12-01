"use client";

import { useEffect, useState } from "react";
import { FirstLogo } from "../icon/firstlogo";
import { Location } from "../icon/LocationIcon";
import { Order } from "../icon/order";
import { RegisterIcon } from "../icon/registerIcon";
import { Rightarrow } from "../icon/rightarrow";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MyCard } from "./mycard";

export const Header = () => {
  const [address, setAddress] = useState();
  const [saveFood, setSaveFood] = useState([]);
  console.log(saveFood);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("savedFoods");
      if (saved) setSaveFood(JSON.parse(saved));
    }
  }, []);
  const Totalprice = saveFood.reduce((sum, item) => {
    return sum + item.price * item.page;
  }, 0);

  return (
    <div className="bg-black h-[150px] flex justify-between items-center">
      <div className="flex items-center justify-center w-[165px]">
        <FirstLogo />
        <div>
          <h1 className="text-white">
            Nom <span className="text-red-500">Nom</span>
          </h1>
          <p className="text-gray-100 ">Swift delivery</p>
        </div>
      </div>
      <div className="flex gap-5">
        <div className=" flex gap-2 bg-white h-8 rounded-2xl p-1 justify-center items-center">
          <Location />
          <p className="text-red-500">
            Delivery address:
            <span className="text-gray-400">Add Location</span>
          </p>
          <Rightarrow />
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">
              <Order />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[555px]">
            <SheetHeader>
              <SheetTitle className="text-white">Order Detail</SheetTitle>
            </SheetHeader>

            <div className="flex w-full max-w-lg flex-col gap-6">
              <Tabs defaultValue="">
                <TabsList className="w-135">
                  <TabsTrigger value="Card" className="rounded-2xl">
                    Card
                  </TabsTrigger>
                  <TabsTrigger value="Order" className="rounded-2xl">
                    Order
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="Card" className="w-145">
                  <div className="w-135 mt-5 h-175 flex rounded-2xl text-xl items-center flex-col  bg-white">
                    <div className=" h-[60%] w-120 flex justify-start gap-6 flex-col mt-3 overflow-scroll">
                      <div className="text-[#71717A] h-10 text-2xl w-115 font-semibold ">
                        My card
                      </div>
                      {saveFood.map((save, index) => {
                        return (
                          <MyCard
                            key={index}
                            image={save.image}
                            foodName={save.foodName}
                            ingredients={save.ingredients}
                            price={save.price}
                            count={save.page}
                            setSaveFood={setSaveFood}
                          />
                        );
                      })}
                    </div>
                    <div className="w-120 h-50  flex  justify-between  flex-col">
                      <div className="text-[#71717A] h-11 text-xl flex items-end  font-semibold ">
                        Delivery location
                      </div>
                      <div className=" h-26  flex flex-col justify-between">
                        <textarea
                          placeholder="Please share your complete address"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                        />

                        <p className=" text-sm text-[#EF4444] h-8 ml-1">
                          Please complete your address
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white w-135 h-64 rounded-2xl mt-15! flex justify-center items-center">
                    <div className="h-[90%] w-121  flex flex-col justify-between">
                      <div className="text-[rgb(139,139,144)] h-10 text-[23px] w-124 font-semibold flex mr-4  ">
                        Payment info
                      </div>
                      <div className="w-120  h-58  flex justify-around flex-col mt-2 mr-3 ">
                        <div className="h-[54%] flex flex-col justify-between ">
                          <div className=" h-18  flex flex-col justify-between ">
                            <div className="flex justify-between">
                              <p className="h-9  flex text-[18px] items-center">
                                Items
                              </p>
                              <p>${Totalprice}</p>
                            </div>
                            <div className="flex justify-between">
                              <p className="h-9  text-[18px] flex items-center">
                                Shipping``
                              </p>
                              <p>$10</p>
                            </div>
                          </div>
                          <div className="h-5  flex items-center">
                            <div className="w-full border border-dashed border-[#09090B80]"></div>
                          </div>
                        </div>

                        <div className="h-12 mt-2 text-[18px] flex justify-between ">
                          <p>Total</p>
                          <p>${Totalprice + 10}</p>
                        </div>
                        <button className="w-full h-10 bg-[#EF4444] cursor-pointer flex items-center justify-center rounded-2xl">
                          <p className="text-white font-medium">Checkout</p>
                        </button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="Order">asdas</TabsContent>
              </Tabs>
            </div>
          </SheetContent>
        </Sheet>
        <div className="bg-red-500 w-8 rounded-2xl h-8 justify-center items-center flex">
          <RegisterIcon />
        </div>
      </div>
    </div>
    //
  );
};
