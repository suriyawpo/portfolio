import React from "react";
import Port from "./Port";
import prjt1 from "./assets/tourism.png";
import prjt2 from "./assets/7up.png";
import prjt3 from "./assets/portfolio.png";

const App = () => {
    const project = [
        {
            name: "Tour booking Website",
            img: prjt1
        },
        {
            name: "7Up Website",
            img: prjt2
        },
        {
            name: "Portfolio Website",
            img: prjt3
        },
        {
            name: "7Up Website",
            img: prjt2
        },
                {
            name: "Tour booking Website",
            img: prjt1
        },
    ];

    return (
        <>
            <div className="text-white">
                <div className="container py-16">
                    <p className="text-2xl font-bold text-center">
                        My{" "}
                        <span className="text-third">
                            Portfolio
                        </span>
                    </p>
                    <p class="py-8 w-full mx-auto text-center md:w-3/4">
                        Lorem ipsum
                        dolor sit amet,
                        consectetur
                        adipisicing hgf
                        jdonds hxdincs
                        jvxdrjn gcxv
                        Consequatur
                        alias, dicta
                        aspernatur.
                    </p>
                    <div className="mt-2 grid grid-cols-1 gap-8 md:grid-cols-3">
                        {project.map(
                            (
                                element,
                                index
                            ) => {
                                return (
                                    <Port
                                        prjt={
                                            element
                                        }
                                        class="flex-1 overflow-x-scroll"
                                    />
                                );
                            }
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;
