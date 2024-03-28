import React from "react";
import Img from "./assets/IMG_20240327_194414.jpg";
import AboutDetails from "./About-details";
const App = () => {
    return (
        <>
            <section
                id="about"
                className="  text-white"
            >
                <div className=" contain mx-auto ">
                    <p class="text-3xl font-bold  text-center mb-6">
                        My{" "}
                        <span class="text-third">
                            Profile
                        </span>
                    </p>
                    <div className="flex gap-16 flex-col md:justify-between md:items-cente md:flex-row">
                        <div className="   rounded-xl  flex-1 relative">
                            <div
                                style={{
                                    backgroundImage:
                                        "linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.2))"
                                }}
                                className="absolute top-0 left-0   w-full text-white px-6 py-2"
                            >
                                <p class="capitalize text-6xl text-third font-cookie text-center p-2 md:p-4">
                                    do
                                    what
                                    you
                                    love,
                                    love
                                    what
                                    you
                                    do
                                </p>
                            </div>
                            <img
                                className="rounded-xl"
                                src={
                                    Img
                                }
                            />
                        </div>
                        <div className="flex-1 xl:mt-24">
                            <div class=" font-bold font-cookie text-3xl xl:text-4xl">
                                <h4 className="mt-4">
                                    A
                                    Little{" "}
                                    <span className="text-third">
                                        About{" "}
                                    </span>
                                    Me
                                </h4>
                            </div>
                            <p className="mt-2 text-justify indent-8">
                                {" "}
                                I am a
                                passionate
                                and
                                detail-oriented
                                Full
                                Stack
                                Web
                                Developer
                                with a
                                focus on
                                the MERN
                                (MongoDB,
                                Express.js,
                                React,
                                Node.js)
                                stack.
                                My goal
                                is to
                                create
                                seamless,
                                user-friendly
                                web
                                applications
                                that
                                provide
                                a
                                positive
                                user
                                experience.
                            </p>
                            <button
                                className={`btn  text-white border hidden`}
                            >
                                Download
                                My
                                Resume
                            </button>
                            {
                                <AboutDetails />
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default App;
