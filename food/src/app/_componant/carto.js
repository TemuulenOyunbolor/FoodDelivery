"use client";

import { useEffect, useState } from "react";

import { Foods } from "./carto.food";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};

export const CartoIcon = ({ id, catname }) => {
  const [foods, setFoods] = useState([]);
  const getFood = async () => {
    const data = await fetch(
      `http://localhost:8000/food/findByCategoryId/${id}`,
      options
    );
    const jsonData = await data.json();
    console.log(jsonData, "homepage");

    setFoods(jsonData);
  };
  useEffect(() => {
    getFood();
  }, []);
  return (
    <div className="w-full bg-[rgba(64,64,64,1)] flex flex-col px-50 gap-5 py-5">
      <div className="w-60 ml-2 text-2xl text-white font-semibold">
        {catname}
      </div>
      <div className="flex gap-5 flex-wrap w-full">
        {foods.map((cur, index) => (
          <Foods
            key={`category-food-${id}-${index}`}
            foodName={cur.foodName}
            price={cur.price}
            ingredients={cur.ingredients}
            image={cur.image}
          />
        ))}
      </div>
    </div>
  );
};
