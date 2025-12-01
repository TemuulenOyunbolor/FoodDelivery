"use client";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import Image from "next/image";
import { useState } from "react";
import { EditIcon } from "../icon/editIcon";

export const Foods = ({ image, foodName, price, ingredients }) => {
  const [foodDetail, setFoodDetail] = useState();

  const [saveFood, setSaveFood] = useState(() => {
    const saved = localStorage.getItem("saveFoods");
    return saved ? JSON.parse(saved) : [];
  });

  const [page, setPage] = useState(1);

  const handlePlus = () => {
    setPage(page + 1);
  };
  const handleBack = () => {
    if (page === 1) {
      return;
    } else {
      setPage(page - 1);
    }
  };

  const handleAdd = () => {
    const saved = JSON.parse(localStorage.getItem("savedFoods")) || [];

    const newItem = { image, foodName, ingredients, price, page };

    const updateList = [...saved, newItem];

    setSaveFood(updateList);
    localStorage.setItem("savedFoods", JSON.stringify(updateList));
  };

  return (
    <div className="w-[300px] h-[270px] flex flex-col justify-center items-center rounded-2xl gap-2 bg-white border">
      <div className="w-[257px] h-[149px] relative flex justify-end items-end">
        <Image
          width={100}
          height={100}
          alt="image failed"
          className="w-full h-full rounded-2xl"
          src={image || "/bg.png"}
        />
        <Dialog className="max-w-fit">
          <form>
            <DialogTrigger asChild>
              <button
                className="w-9 h-9 bg-white absolute rounded-full right-4 bottom-4 flex justify-center items-center text-red-500"
                onClick={() => {
                  setFoodDetail(true);
                }}
              >
                +
              </button>
            </DialogTrigger>
            <DialogContent className="w-[1000px] max-w-fit!">
              <DialogTitle />
              {foodDetail && (
                <div className="w-[826px] h-[412px] bg-white rounded-2xl flex  items-center justify-between">
                  <div className="relative flex justify-end  items-end w-[377px] h-[364px]  ">
                    <img
                      className="w-[357px] h-[354px] object-cover hover:opacity-30 rounded-lg p-4  "
                      src={image}
                    />
                  </div>
                  <div className="w-[377px] h-[364px] flex flex-col items-end   ">
                    <div className="flex  flex-col gap-10 justify-between h-full ">
                      <div className=" flex  w-[377px] flex-col h-24 ">
                        <p className="text-[#ef4444] text-[30px] ">
                          {foodName}
                        </p>

                        <div className="h-8 w-[378px] text-[16px]">
                          {ingredients}
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex justify-between w-full h-full">
                          <div>
                            <p>Total price </p>
                            <p className="text-[24px] font-semibold">
                              ${price}
                            </p>
                          </div>
                          <div className="flex gap-2">
                            <button
                              className="w-11 h-11 rounded-full flex items-center justify-center border-gray-300 border"
                              onClick={handleBack}
                            >
                              -
                            </button>
                            <div className="">{page}</div>
                            <button
                              className=" w-11 h-11 rounded-full flex items-center justify-center border-gray-300 border"
                              onClick={handlePlus}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <DialogFooter>
                          <DialogClose asChild></DialogClose>
                          <Button type="submit" onClick={handleAdd}>
                            Save changes
                          </Button>
                        </DialogFooter>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </DialogContent>
          </form>
        </Dialog>
      </div>
      <div className="w-[260px] flex justify-between items-center ">
        <p className="text-red-400"> {foodName}</p>
        <p>{price}</p>
      </div>
      <div className="">{ingredients}</div>
    </div>
  );
};
