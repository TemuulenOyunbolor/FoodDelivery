"use client";

import { useEffect, useState } from "react";
import { CartoIcon } from "./carto";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};

export const PageMenu = () => {
  const [foodCategory, setFoodCategory] = useState([]);
  const backend_url = process.env.PUBLIC_BACKEND_URL;

  const getFoodCategory = async () => {
    const data = await fetch(`${backend_url}/foodCategory`, options);
    const jsonData = await data.json();
    setFoodCategory(jsonData);
  };
  useEffect(() => {
    getFoodCategory();
  }, []);
  return (
    <div>
      {foodCategory.map((cur) => (
        <CartoIcon key={cur._id} id={cur._id} catname={cur.categoryName} />
      ))}
    </div>
  );
};
