"use client";

import { useState } from "react";
import { LeftIcon } from "../icon/leftIcon";

export default function Home() {
  const [catchToken, setCatchToken] = useState({ email: "", password: "" });

  const handleLogin = async () => {
    console.log(catchToken, "asd");

    try {
      const res = await fetch("http://localhost:8000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          email: catchToken.email,
          password: catchToken.password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          const token = data.token;
          {
            localStorage.setItem("token", data.token);
            window.location.href = "/";
          }
        });

      setCatchToken;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full h-full flex justify-between items-center">
      <div className="flex flex-col w-[1000px] items-center">
        <div className="flex  flex-col  p-6 rounded-2xl  w-[500px]  h-[300px] gap-5">
          <div>
            <button className="border w-8 h-8 flex justify-center items-center cursor-pointer ">
              <LeftIcon />
            </button>
          </div>
          <div>
            <p className="font-semibold">Log in</p>
            <p className="text-gray-400">
              Log in to enjoy your favorite dishes.
            </p>
          </div>
          <div className="flex flex-col gap-2 w-[500px]">
            <input
              className="border rounded-2xl pl-3"
              placeholder="Enter your email address"
              value={catchToken.email}
              onChange={(e) =>
                setCatchToken({ ...catchToken, email: e.target.value })
              }
            ></input>
            <input
              className="border rounded-2xl pl-3"
              type="Password"
              id="Password"
              placeholder="Password"
              value={catchToken.password}
              onChange={(e) =>
                setCatchToken({ ...catchToken, password: e.target.value })
              }
            ></input>
          </div>
          <p className="">Forgot password ?</p>
          <div className="w-[500px]">
            <button
              className="bg-gray-400 w-full h-10 rounded-2xl"
              onClick={handleLogin}
            >
              {" "}
              Let`s go{" "}
            </button>
          </div>
          <button className="flex gap-5 ">
            <p>Don`t have an account?</p>
            <p className="text-blue-600">Sign up</p>
          </button>
        </div>
      </div>
      <div className="w-full h-full rounded-4xl py-8 flex justify-center">
        <img
          className="w-[1200px] h-[1100px]  rounded-4xl "
          src="/loginPic.png"
        ></img>
      </div>
    </div>
  );
}
