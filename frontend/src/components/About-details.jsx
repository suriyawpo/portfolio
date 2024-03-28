import React, { useState } from "react";
import img from "./assets/—Pngtree—green check mark icon flat_5253210.png";
import { FaGraduationCap } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import html from "./assets/pngwing.com (2).png";
import css from "./assets/pngwing.com (3).png";
import tailwindcss from "./assets/Tailwind_CSS_Logo.svg_GkNDLAs.png";
import js from "./assets/IMG_20240328_065320.png";
import reactjs from "./assets/IMG_20240328_065436.png";
import nodejs from "./assets/pngwing.com.png";
import express from "./assets/pngwing.com (1).png";
import mongodb from "./assets/pngwing.com (4).png";

const App = () => {
    const [show, setShow] = useState(2);

    return (
        <>
            <div className=" text-center text-md font-semibold space-x-4 ">
                <div
                    id="skills"
                    class="border w-3/4 mx-auto my-4 xl:my-12"
                ></div>
                <button
                    className={`${
                        show == 1
                            ? "bg-third"
                            : ""
                    } px-4 py-2 rounded-md border hover:bg-third`}
                    onClick={() => {
                        setShow(1);
                    }}
                >
                    Education
                </button>
                <button
                    className={`${
                        show == 2
                            ? "bg-third"
                            : ""
                    } px-4 py-2 rounded-md border hover:bg-third`}
                    onClick={() => {
                        setShow(2);
                    }}
                >
                    Skills
                </button>
                <button
                    className={`${
                        show == 3
                            ? "bg-third"
                            : ""
                    } px-4 py-2 rounded-md border hover:bg-third mt-4  md:mt-0`}
                    onClick={() => {
                        setShow(3);
                    }}
                >
                    My Resume{" "}
                    <MdOutlineFileDownload
                        className={`${
                            show == 3
                                ? "text-white"
                                : "text-third"
                        } text-xl inline-block`}
                    />
                </button>
            </div>
            {
                <div className="text-center mt-6 border rounded-xl p-6 text-white bg-cd1 shadow">
                    {show == 1 && (
                        <div className="  ">
                            <FaGraduationCap className="text-7xl text-white mx-auto mb-6" />
                            <div class="space-y-2">
                                <p className="text-lg font-medium">
                                    B.E,
                                    Mechanical
                                    Engineering
                                </p>
                                <p className="">
                                    2018-2022
                                </p>
                                <p className="text-md">
                                    Mailam
                                    engineering
                                    college,
                                    Anna
                                    University
                                </p>
                            </div>
                        </div>
                    )}
                    {show == 2 && (
                        <div className="flex  gap-12 justify-between flex-col bg-cd1 md:flex-row">
                            <div class="flex-1">
                                <p class="text-xl font-medium mb-4 ">
                                    Frontend
                                    Technologies
                                </p>
                                <div class="">
                                    {" "}
                                    <div class="flex items-center">
                                        <img
                                            src={
                                                html
                                            }
                                            alt=""
                                            class="size-14"
                                        />
                                        <div class="">
                                            <p class="">
                                                HTML
                                            </p>
                                        </div>{" "}
                                    </div>{" "}
                                    <div class="flex items-center">
                                        <img
                                            src={
                                                css
                                            }
                                            alt=""
                                            class="size-14"
                                        />
                                        <div class="">
                                            <p class="">
                                                CSS
                                            </p>
                                        </div>{" "}
                                    </div>{" "}
                                    <div class="flex items-center">
                                        <img
                                            src={
                                                tailwindcss
                                            }
                                            alt=""
                                            class="size-14"
                                        />
                                        <div class="">
                                            <p class="">
                                                TAILWINDCSS
                                            </p>
                                        </div>{" "}
                                    </div>
                                    <div class="flex items-center">
                                        <img
                                            src={
                                                js
                                            }
                                            alt=""
                                            class="size-14"
                                        />
                                        <div class="">
                                            <p class="">
                                                JAVASCRIPT
                                            </p>
                                        </div>{" "}
                                    </div>{" "}
                                    <div class="flex items-center">
                                        <img
                                            src={
                                                reactjs
                                            }
                                            alt=""
                                            class="size-14"
                                        />
                                        <div class="">
                                            <p class="">
                                                REACT.JS
                                            </p>
                                        </div>{" "}
                                    </div>{" "}
                                </div>
                            </div>
                            <div class="flex-1">
                                <p class="text-xl font-medium mb-4 ">
                                    Backend
                                    Technologies
                                </p>
                                <div class="">
                                    {" "}
                                    <div class="flex items-center">
                                        <img
                                            src={
                                                nodejs
                                            }
                                            alt=""
                                            class="size-14"
                                        />
                                        <div class="">
                                            <p class="">
                                                NODEJS
                                            </p>
                                        </div>{" "}
                                    </div>{" "}
                                    <div class="flex items-center">
                                        <img
                                            src={
                                                express
                                            }
                                            alt=""
                                            class="size-14"
                                        />
                                        <div class="">
                                            <p class="">
                                                EXPRESS.JS
                                            </p>
                                        </div>{" "}
                                    </div>{" "}
                                    <div class="flex items-center">
                                        <img
                                            src={
                                                mongodb
                                            }
                                            alt=""
                                            class="size-14"
                                        />
                                        <div class="">
                                            <p class="">
                                                MONGODB
                                            </p>
                                        </div>{" "}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {show == 3 && (
                        <div class="">
                            <img
                                src={
                                    img
                                }
                                alt=""
                                class="size-96 mx-auto"
                            />
                        </div>
                    )}
                </div>
            }
        </>
    );
};

export default App;
