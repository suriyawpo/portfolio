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
        }
    ];

    return (
        <>
            <div
                id="portfolio"
                className="bg-cd2 text-white"
            >
                <div className="contain py-16">
                    <p className="text-3xl font-bold text-center">
                        My{" "}
                        <span className="text-third ">
                            Portfolio
                        </span>
                    </p>
                    <p class="py-8 w-full mx-auto text-center md:w-3/4">
                        I approach each
                        project with
                        creativity,
                        professionalism,
                        and attention to
                        detail. <br /> I invite
                        you to explore
                        my portfolio.
                    </p>
                    <div className="mt-2 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
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
