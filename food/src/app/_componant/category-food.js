"use client";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import Image from "next/image";
import { useEffect, useState } from "react";
import { EditIcon } from "../icon/editIcon";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { PictureIcon } from "../icon/picture";
import { DeleteIcon } from "../icon/delete";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};

export const Food = ({ image, foodName, price, ingredients, id }) => {
  const [foodDetail, setFoodDetail] = useState();
  const [addFoodCategory, setAddFoodCategory] = useState();
  const [open, setOpen] = useState(false);
  const [imgUrl, setImgUrl] = useState(null);
  const [addDishChange, setAddDishChange] = useState(false);
  const [foodsType, setFoodsType] = useState([]);
  const [addFood, setAddFood] = useState({
    foodName: "",
    price: "",
    ingredients: "",
  });

  const [addDish, setAddDish] = useState({
    dishfoodName: "",
    price: "",
    ingredients: "",
    dishCategory: "",
    id: "",
  });

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

  const handleEditChange = async () => {
    console.log(addFood, "asd");

    try {
      const res = await fetch("http://localhost:8000/food", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          id: addDish._id,
          foodName: addDish.dishfoodName,
          price: Number(addDish.price),
          ingredients: addDish.ingredients,
          category: addDish.dishCategory,
          image: imgUrl,
        }),
      });

      setOpen(false);
      setAddDishChange(false);
      getFoodType();
      setAddDish({
        dishfoodName: "",
        price: "",
        dishCategory: "",
        ingredients: "",
        _id: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async () => {
    console.log(addFood, "asd");

    try {
      const res = await fetch("http://localhost:8000/food", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          id: _id,
        }),
      });

      setAddDishChange(false);
      getFoodType();
    } catch (err) {
      console.log(err);
    }
  };
  const getFoodType = async () => {
    const data = await fetch(
      `http://localhost:8000/food/findByCategoryId/${id}`,
      options
    );
    const jsonData = await data.json();
    setFoodsType(jsonData), console.log("food", jsonData);
  };

  useEffect(() => {
    getFoodType();
  }, []);

  return (
    <div className="w-[300px] h-[270px] flex flex-col justify-center items-center rounded-2xl gap-2 bg-white border ">
      <div className="w-[257px] h-[149px] relative flex justify-end items-end">
        <Image
          width={100}
          height={100}
          alt="image failed"
          className="w-full h-full rounded-2xl"
          src={image || "/bg.png"}
        />
        <Dialog
          className="max-w-fit"
          open={open}
          onOpenChange={(change) => setOpen(change)}
        >
          <form>
            <DialogTrigger
              asChild
              className="border-none "
              onClick={() => setOpen(true)}
            >
              <button
                className="w-9 h-9 bg-white absolute rounded-full right-4 bottom-4 flex justify-center items-center text-red-500"
                onClick={() => {
                  setFoodDet(true);
                }}
              >
                <EditIcon />
              </button>
            </DialogTrigger>
            <DialogContent className="w-[1000px] max-w-fit!">
              <DialogTitle />
              <div className="flex flex-col gap-4">
                <DialogHeader className="w-[500px]">
                  <DialogTitle>Add new category </DialogTitle>
                </DialogHeader>

                <div className=" flex flex-col gap-3 ">
                  <div className="flex justify-between">
                    {" "}
                    <Label htmlFor="name-1">Dish name </Label>
                    <Input
                      id="name-1"
                      name="name"
                      placeholder="Type category name"
                      value={addDish.dishfoodName || ""}
                      onChange={(e) => {
                        setAddDish({
                          ...addDish,
                          dishfoodName: e.target.value,
                        });
                      }}
                      className="w-[300px]"
                    />
                  </div>
                  <div className="flex  justify-between">
                    <Label htmlFor="price">Dish category</Label>

                    <Input
                      id="name-1"
                      name="name"
                      placeholder="Type category name"
                      value={addDish.dishCategory || ""}
                      onChange={(e) => {
                        setAddDish(e.target.value);
                      }}
                      className="w-[300px]"
                    />
                  </div>
                </div>
                <div className="flex justify-between">
                  <Label htmlFor="text">ingredients</Label>
                  <textarea
                    className="w-[300px]"
                    placeholder="List ingredients..."
                    value={addDish.ingredients || ""}
                    onChange={(e) =>
                      setAddDish({ ...addDish, ingredients: e.target.value })
                    }
                  />
                </div>
                <div className="flex justify-between">
                  <Label htmlFor="text">Price</Label>
                  <Input
                    className="w-[300px]"
                    placeholder="Price"
                    value={addDish.price || ""}
                    onChange={(e) =>
                      setAddDish({ ...addDish, price: e.target.value })
                    }
                  />
                </div>

                {!imgUrl ? (
                  <div className="flex justify-between">
                    {" "}
                    Food Image
                    <Label htmlFor="file-input">
                      <div className="w-[300px] h-[200px] border border-dashed flex justify-center items-center rounded-2xl bg-blue-300 flex-col">
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
                <div className="flex justify-between ">
                  <div>
                    <DialogClose asChild>
                      <Button variant="outline" onClick={handleDelete}>
                        <DeleteIcon />
                      </Button>
                    </DialogClose>
                  </div>{" "}
                  <div>
                    <Button type="submit" onClick={handleEditChange}>
                      Add Dish
                    </Button>
                  </div>
                </div>
              </div>
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
