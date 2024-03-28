import React from "react";
import Image from "./assets/contact.png";
import img from "./assets/man-593333_1280.jpg";
import Form from "./Form";
import {
    FiArrowDownCircle,
    FiArrowRightCircle
} from "react-icons/fi";

const App = () => {
    return (
        <>
            <section
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7),rgba(0,0,0,0.7)),url(${img})`
                }}
                id="contact"
                className="bg-center bg-cover bg-no-repeat text-white"
            >
                <div className="contain ">
                    <p className=" text-3xl text-center font-bold capitalize mb-12 ">
                        contact{" "}
                        <span className="text-third">
                            Me
                        </span>
                    </p>
                    <div class="w-full flex flex-col  gap-16 md:flex-row items-center justify-center md:gap-12">
                        <div className="flex-1 text-center  rounded-xl">
                            <img
                                className="size-80 mx-auto"
                                src={
                                    Image
                                }
                            />
                            <p class="text-lg mt-4">
                                Mail to{" "}
                                <a
                                    href=""
                                    class="text-third"
                                >
                                    suriyasry5050@gmail.com
                                </a>
                            </p>
                            <p class="text-md py-4">
                                Or
                            </p>
                            <div class="flex justify-center items-center gap-2">
                                <p class="capitalize text-lg">
                                    send
                                    me a
                                    message
                                </p>
                                <FiArrowRightCircle class="size-10 text-third hidden md:block" />
                                <FiArrowDownCircle class="size-10 text-third md:hidden" />
                            </div>
                        </div>
                        <div className=" flex-1 ">
                            <div className="mx-auto mt-8">
                                <Form />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default App;
