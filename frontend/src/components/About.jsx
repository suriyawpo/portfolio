import React from "react";
import Img from "./assets/1.png";
import AboutDetails from "./About-details";
const App = () => {
    return (
        <>
            <section
                id="about"
                className="  text-white   py-16"
            >
                <div className=" container  mx-auto ">
                    <div className="flex gap-16 flex-col md:justify-between md:items-center md:flex-row">
                        <div className="   rounded-xl  flex-1">
                            <img
                                className=""
                                src={
                                    Img
                                }
                            />
                        </div>
                        <div className="flex-1 ">
                            <div class=" font-bold text-xl ">
                                <h4 className="">
                                    A
                                    Little{" "}
                                    <span className="text-third">
                                        About{" "}
                                    </span>
                                    Me
                                </h4>
                            </div>
                            <p className="mt-6 text-justify indent-8">
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
                                className={`btn bg-third text-white`}
                            >
                                Read
                                more
                            </button>
                            {
                                //<AboutDetails />
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default App;
