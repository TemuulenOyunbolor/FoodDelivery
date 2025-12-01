"use client";

import { AdminSideBar } from "@/app/_componant/admin-sidebar";
import { Category } from "@/app/_componant/category-container";
import { CategoryFoods } from "@/app/_componant/category-foods";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PictureIcon } from "@/app/icon/picture";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};

export default function Home() {
  const [foodMenu, setFoodMenu] = useState([]);
  const [foods, setFoods] = useState([]);
  const [addFoodCategory, setAddFoodCategory] = useState("");
  const [open, setOpen] = useState(false);

  const getFood = async () => {
    const data = await fetch(`http://localhost:8000/food`, options);
    const jsonData = await data.json();
    console.log(jsonData, "aas");

    setFoods(jsonData);
  };

  const getMenu = async () => {
    const data = await fetch(`http://localhost:8000/foodCategory`, options);
    const jsonData = await data.json();
    setFoodMenu(jsonData);
  };

  useEffect(() => {
    getMenu(), getFood();
  }, []);

  const handleAddChange = async () => {
    try {
      const res = await fetch("http://localhost:8000/foodCategory", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({ categoryName: addFoodCategory }),
      });
      await getMenu();
      await getFood();
      setOpen(false);
      setAddFoodCategory;
      ("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full h-full flex">
      <AdminSideBar />
      <div
        className="w-full p-5 flex flex-col gap-5"
        style={{ background: "rgba(244, 244, 245, 1)" }}
      >
        <div className="w-full flex justify-end">
          <img src="/Avatar.png"></img>
        </div>
        <div className="bg-white flex flex-col gap-3">
          <p className="font-semibold text-2xl">Dishes category</p>
          <div className="flex gap-5 pb-5 flex-wrap">
            <div className="flex items-center border gap-2  px-4 py-2justify-center rounded-2xl">
              <h1 className="font-semibold cursor-pointer">All Dishes</h1>
              <div className="bg-black px-4 rounded-2xl text-white flex items-center justify-center">
                {foods.length}
              </div>
            </div>
            {foodMenu.map((food, index) => {
              return (
                <Category
                  foodName={food.categoryName}
                  key={index}
                  totalfood={food.food}
                />
              );
            })}
            <div className="w-9 h-9 bg-red-500 rounded-2xl flex justify-center items-center text-white text-xl cursor-pointer ">
              <Dialog open={open} onOpenChange={(change) => setOpen(change)}>
                <DialogTrigger
                  asChild
                  className="border-none "
                  onClick={() => setOpen(true)}
                >
                  <Button className="bg-red" variant="outline">
                    +
                  </Button>
                </DialogTrigger>
                <DialogContent className="h-fit">
                  <DialogHeader>
                    <DialogTitle>Add new category </DialogTitle>
                  </DialogHeader>

                  <div className="grid gap-3">
                    <Label htmlFor="name-1">Category name </Label>
                    <Input
                      id="name-1"
                      name="name"
                      placeholder="Type category name"
                      value={addFoodCategory}
                      onChange={(e) => {
                        setAddFoodCategory(e.target.value);
                      }}
                    />
                  </div>

                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button type="submit" onClick={handleAddChange}>
                      Add category
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>

        {foodMenu.map((category, index) => {
          return (
            <CategoryFoods
              id={category._id}
              key={`category-foods-${index}`}
              catname={category.categoryName}
              totalfood={category.food}
            />
          );
        })}
      </div>
    </div>
  );
}
