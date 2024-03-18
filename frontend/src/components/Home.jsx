import React, { useState } from "react";
import Img from "./assets/boy2.png";

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
            <section className=" relative text-white">
                <div class="hidden absolute right-[50%] bottom-[30%] blur-3xl  rounded-full size-24 bg-lime-400"></div>
                <div
                    id="home"
                    className="md:h-[460px] container  flex items-center flex-col gap-8   md:flex-row justify-around md:items-center -z-4"
                >
                    <div className=" space-y-6 flex-1 py-12 ">
                        <p className="text-xl  font-medium text-third">
                            Welcome{" "}
                            <span className="text-white">
                                to my
                                freelance
                                hub!
                            </span>
                        </p>
                        <p className="text-3xl font-medium ">
                            I am{" "}
                            <span className="text-third">
                                Suriya
                            </span>
                            , web
                            developer
                        </p>
                        <p className="">
                            Come and
                            join with me
                            to create
                            your ideas
                            into
                            design...
                        </p>
                        <button
                            className={`btn bg-third `}
                            onClick={
                                handleClick
                            }
                        >
                            Hire me
                        </button>
                    </div>
                    <div className="flex-1">
                        <img
                            className=" mx-auto  "
                            src={Img}
                            alt="Profile"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
