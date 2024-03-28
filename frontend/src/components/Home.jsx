import React, { useState } from "react";
import Navbar from "./Navbar.jsx";
import img from "./assets/boy-2026700_1280.png";

const Home = () => {
    const [
        buttonClicked,
        setButtonClicked
    ] = useState(false);

    const handleClick = () => {
        setButtonClicked(true);
    };

    const buttonColor = buttonClicked
        ? "bg-red-500"
        : "bg-red-500";

    return (
        <>
            <section className=" relative text-white ">
                <Navbar />
                <div
                    id="home"
                    className="h-[550px] container  flex gap-24 flex-col items-center justify-center -z-4"
                >
                    <div className=" order-3 text-center md:w-1/2">
                        <p className="text-3xl font-medium text-third  xl:text-5xl">
                            Fullstack
                            Web
                            Developer
                        </p>
                        <p className="py-4">
                            I will
                            design and
                            develop your
                            ideas into
                            stunning
                            websites
                            using mern
                            stack.
                        </p>
                        <button
                            className={`px-4 py-2 bg-third text-white rounded-md `}
                            onClick={
                                handleClick
                            }
                        >
                            Get Started
                        </button>
                    </div>
                    <div className="order-1 text-center">
                        <img
                            src={img}
                            alt=""
                            class="size-24 mx-auto"
                        />
                        <p className="mt-2 text-3xl  font-medium text-white font-cookie  xl:text-5xl">
                            Hey! I am{" "}
                            <span className="text-third">
                                Suriya
                            </span>
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
