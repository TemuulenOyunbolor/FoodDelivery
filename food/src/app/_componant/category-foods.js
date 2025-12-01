"use client";

import { useEffect, useState } from "react";
import { Food } from "./category-food";
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
import { PictureIcon } from "../icon/picture";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};

const UPLOAD_PRESET = "delivery";
const CLOUD_NAME = "djmbysbc1";

export const CategoryFoods = ({ id, catname, totalfood }) => {
  const [imgUrl, setImgUrl] = useState(null);
  const [uploading, setUploading] = useState(false);
  const backend_url = process.env.PUBLIC_BACKEND_URL;
  const [foods, setFoods] = useState([]);
  const [addFood, setAddFood] = useState({
    foodName: "",
    price: "",
    ingredients: "",
  });
  console.log(id);

  const [open, setOpen] = useState(false);

  const getFood = async () => {
    const data = await fetch(
      `${backend_url}/food/findByCategoryId/${id}`,
      options
    );
    const jsonData = await data.json();
    console.log(jsonData, "asd");

    setFoods(jsonData);
  };
  useEffect(() => {
    getFood();
  }, []);
  const handleAddChange = async () => {
    console.log(addFood, "asd");

    try {
      const res = await fetch(`${backend_url}/food`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          foodName: addFood.foodName,
          price: Number(addFood.price),
          ingredients: addFood.ingredients,
          category: id,
          image: imgUrl,
        }),
      });

      setAddFood({ foodName: "", price: "" });
      setOpen(false);
      getFood();
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogoUpload = async (event) => {
    console.log(event, "hahaa");

    const file = event.target.files[0];

    if (!file) return;

    setUploading(true);

    try {
      const url = await uploadToCloudinary(file);

      setImgUrl(url);
    } catch (err) {
      console.log("Failed to upload logo: " + err.message);
    } finally {
      setUploading(false);
    }
  };
  const uploadToCloudinary = async (file) => {
    const formData = new FormData();

    formData.append("file", file);

    formData.append("upload_preset", UPLOAD_PRESET);

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,

        {
          method: "POST",

          body: formData,
        }
      );

      const data = await response.json();
      console.log(data);

      return data.secure_url;
    } catch (error) {
      console.error("Cloudinary upload failed:", error);
    }
  };

  return (
    <div className="bg-white p-6 flex flex-col gap-4  ">
      <div className="bg-white">
        <p className="font-semibold ">
          {catname} ({totalfood})
        </p>
      </div>
      <div className="flex gap-5 flex-wrap ">
        <div className="w-[300px] h-[270px] flex flex-col justify-center items-center border-red-400 gap-2 bg-white border border-dashed ">
          <div className="w-9 h-9 bg-red-500 rounded-2xl flex justify-center items-center text-white text-xl cursor-pointer ">
            <Dialog open={open} onOpenChange={(change) => setOpen(change)}>
              <DialogTrigger
                asChild
                className="bg-transparent border-none hover:bg-transparent"
                onClick={() => setOpen(true)}
              >
                <Button
                  className="bg-red hover:bg-transparent"
                  variant="outline"
                >
                  +
                </Button>
              </DialogTrigger>
              <DialogContent className="h-fit">
                <DialogHeader>
                  <DialogTitle>Add new dishes {catname}</DialogTitle>
                </DialogHeader>
                <div className="flex gap-4  ">
                  <div className="grid gap-3">
                    <Label htmlFor="name-1">Food name </Label>
                    <Input
                      id="name-1"
                      name="name"
                      placeholder="Type food name"
                      value={addFood.foodName}
                      onChange={(e) =>
                        setAddFood({ ...addFood, foodName: e.target.value })
                      }
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="username-1">food price</Label>
                    <Input
                      id="username-1"
                      name="username"
                      placeholder="Enter price"
                      value={addFood.price}
                      onChange={(e) =>
                        setAddFood({ ...addFood, price: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="grid gap-3  ">
                  <Label>Ingredients</Label>
                  <textarea
                    placeholder="List ingredients..."
                    value={addFood.ingredients}
                    onChange={(e) =>
                      setAddFood({ ...addFood, ingredients: e.target.value })
                    }
                  />
                </div>
                {!imgUrl ? (
                  <div>
                    {" "}
                    Food Image
                    <Label htmlFor="file-input">
                      <div className="w-[460px] h-[300px] border border-dashed flex justify-center items-center rounded-2xl bg-blue-300 flex-col">
                        <div className="bg-white w-10 h-10 rounded-3xl flex justify-center items-center ">
                          <PictureIcon />
                        </div>
                        Choose a file or drag & drop it here
                      </div>
                    </Label>
                    <Input
                      id="file-input"
                      className="hidden"
                      type="file"
                      onChange={handleLogoUpload}
                    />
                  </div>
                ) : (
                  <img
                    style={{
                      width: "100%",
                      height: "200px",
                      borderRadius: "10px",
                      border: "none",
                      display: "block",
                    }}
                    src={imgUrl}
                    alt="Uplouded"
                  />
                )}
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button type="submit" onClick={handleAddChange}>
                    Add dish
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <div className="w-[120px] h-10 flex justify-center items-center ">
            Add new Dish to {catname}
          </div>
        </div>

        {foods.map((cur, index) => (
          <Food
            key={`category-food-${id}-${index}`}
            foodName={cur.foodName}
            price={cur.price}
            ingredients={cur.ingredients}
            image={cur.image}
            id={cur._id}
          />
        ))}
      </div>
    </div>
  );
};
