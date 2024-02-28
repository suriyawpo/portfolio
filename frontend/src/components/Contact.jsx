import React from "react";
import Image from "./assets/contact.png";
import Form from "./Form";
const App = () => {
    return (
        <>
            <section
                id="contact"
                className="bg-stone-300 text-black"
            >
                <div className="container py-16 ">
                    <div class="w-full flex flex-col  gap-8 md:flex-row items-center justify-between">
                        <div className="flex-1 text-center bg-white rounded-xl">
                            <img
                                className="size-80 mx-auto"
                                src={
                                    Image
                                }
                            />
                        </div>
                        <div className=" flex-1 ">
                            <p className=" text-2xl font-bold capitalize mb-16 ">
                                contact{" "}
                                <span className="text-third">
                                    Me
                                </span>
                            </p>
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
