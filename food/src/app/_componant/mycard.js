"use client";
import { useEffect, useState } from "react";

export const MyCard = ({
  image,
  foodName,
  ingredients,
  price,
  count,
  setSaveFood,
}) => {
  const [page, setPage] = useState(count || 0);

  const removeFood = () => {
    const saved = JSON.parse(localStorage.getItem("savedFoods"));
    const updateList = saved.filter((item) => item.foodName !== foodName);
    localStorage.setItem("savedFoods", JSON.stringify(updateList));
    setSaveFood(updateList);
  };

  const handelPlusClick = () => {
    const saved = JSON.parse(localStorage.getItem("savedFoods"));
    const updateList = saved.map((item) => item);
  };

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
  useEffect(() => {
    const saved = localStorage.getItem("savedFoods");
  });

  return (
    <div className="w-full  ">
      <div className="w-120  border-dashed border-b border-[#09090B80]   h-30 flex gap-5 mb-5 ">
        <div className="w-[25%]  h-25 border rounded-2xl">
          <img className="w-full h-full" src={image}></img>
        </div>
        <div className="flex flex-col w-[71%] h-25 ">
          <div className="  h-35 flex justify-between">
            <div className=" w-[85%]">
              <p className="text-[#EF4444] text-base">{foodName}</p>
              <p className="text-xs text-black">{ingredients}</p>
            </div>
            <button
              className="h-7 w-7 border rounded-full flex justify-center items-center border-red-500 cursor-pointer text-red-500"
              onClick={removeFood}
            >
              x
            </button>
          </div>
          <div className="w-[330px] gap-3 flex justify-between">
            <div className="flex gap-5">
              <button onClick={handleBack}>-</button>
              <button>{page}</button>
              <button onClick={handlePlus}>+</button>
            </div>
            <div> ${price * page}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
