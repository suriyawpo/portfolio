import React from "react";
import Img from "./assets/about.png";
import { MdOutlineDisplaySettings } from "react-icons/md";
import {
    PiPaintBrush,
    PiComputerTower
} from "react-icons/pi";

const App = () => {
    return (
        <div class="  text-white">
            <div class="container  py-8 ">
                <p class="capitalize text-2xl text-center font-bold">
                    what i{" "}
                    <span class="text-third">
                        Do
                    </span>
                </p>
                <p class="md:w-3/4 mx-auto text-center py-6">
                    Lorem ipsum dolor
                    sit amet,
                    consectetur
                    adipisicing elit.
                    Eos aliquam quam
                    praesentium
                    necessitatibus
                    minima totam atque
                </p>
                <div class=" mt-4 grid grid-cols-1 gap-6 md:grid-cols-3">
                    {" "}
                    <div className=" shadow-md shadow-black bg-cd2 p-8  rounded-xl overflow-hidden ">
                        <div class="">
                            {" "}
                            <PiPaintBrush class="size-20 mx-auto" />
                        </div>
                        <div class="text-center mt-8">
                            <p class="mt-4 text-lg text-third font-semibold ">
                                Web
                                Design
                            </p>
                            <p class="text-sm  mt-1">
                                i do
                                website
                                designing
                            </p>
                        </div>
                    </div>{" "}
                    <div className=" shadow-md shadow-black bg-cd2 p-8 rounded-xl overflow-hidden ">
                        <div class="">
                            {" "}
                            <MdOutlineDisplaySettings class="size-20 mx-auto" />
                        </div>
                        <div class="text-center mt-8">
                            <p class="mt-4 text-lg font-semibold text-third">
                                Frontend
                                Development
                            </p>
                            <p class="text-sm mt-1">
                                i do
                                website
                                designing
                            </p>
                        </div>
                    </div>{" "}
                    <div className="flex-1 shadow-md shadow-black bg-cd2 p-8 rounded-xl overflow-hidden ">
                        <div class="">
                            {" "}
                            <PiComputerTower class="size-20 mx-auto" />
                        </div>
                        <div class="text-center mt-8">
                            <p class="mt-4 text-lg font-semibold text-third">
                                Backend
                                Development{" "}
                            </p>
                            <p class="text-sm mt-1">
                                i do
                                website
                                designing
                            </p>
                        </div>
                    </div>{" "}
                </div>
            </div>
        </div>
    );
};

export default App;
