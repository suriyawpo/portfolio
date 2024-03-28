import React from "react";
import Img from "./assets/about.png";
import { MdOutlineDisplaySettings } from "react-icons/md";
import {
    PiPaintBrush,
    PiComputerTower
} from "react-icons/pi";

const App = () => {
    return (
        <div class=" bg-cd2 text-white">
            <div class="contain   ">
                <p class="capitalize text-3xl text-center font-bold">
                    what i{" "}
                    <span class="text-third">
                        Do
                    </span>
                </p>
                <p class="md:w-3/4 mx-auto text-center py-6">
                    I strive to deliver
                    innovative solutions
                    that exceed
                    expectations and
                    <br/>
                    leave a lasting
                    impression on users.
                </p>
                <div class=" mt-4 grid grid-cols-1 gap-12 md:grid-cols-3">
                    {" "}
                    <div className=" shadow-md shadow-black bg-cd1 p-4  rounded-xl overflow-hidden ">
                        <div class="">
                            {" "}
                            <PiPaintBrush class="size-20 mx-auto text-third" />
                        </div>
                        <div class="text-center mt-8">
                            <p class="mt-4 text-xl text-thir font-semibold ">
                                Web
                                Design
                            </p>
                            <p class="mt-2">
                                Crafting
                                intuitive
                                interfaces
                                for
                                seamless
                                user
                                experiences.
                            </p>
                        </div>
                    </div>{" "}
                    <div className=" shadow-md shadow-black bg-cd1 p-4 rounded-xl overflow-hidden ">
                        <div class="">
                            {" "}
                            <MdOutlineDisplaySettings class="size-20 mx-auto text-third" />
                        </div>
                        <div class="text-center mt-8">
                            <p class="mt-4 text-xl font-semibold ">
                                Frontend
                                Development
                            </p>
                            <p class=" mt-2">
                                Building
                                engaging
                                web
                                interfaces
                                with
                                modern
                                technologies
                                and
                                responsive
                                design
                                principles.
                            </p>
                        </div>
                    </div>{" "}
                    <div className="flex-1 shadow-md shadow-black bg-cd1 p-4 rounded-xl overflow-hidden ">
                        <div class="">
                            {" "}
                            <PiComputerTower class="size-20 mx-auto text-third" />
                        </div>
                        <div class="text-center mt-8">
                            <p class="mt-4 text-xl font-semibold ">
                                Backend
                                Development{" "}
                            </p>
                            <p class="text- mt-2">
                          Implementing robust server-side solutions for data management and system functionality."
                            </p>
                        </div>
                    </div>{" "}
                </div>
            </div>
        </div>
    );
};

export default App;
