import React from "react";

const App = ({ prjt }) => {
    return (
        <>
            <div className="bg-cd1 shadow-md shadow-black  text-white  overflow-hidden p-2 rounded-lg ">
                <div class="">
                    {" "}
                    <img
                        class="rounded-md"
                        src={prjt.img}
                    />
                </div>
                <div class="text-center">
                    <p class="py-6 text-lg font-bold text-white">
                        {prjt.name}
                    </p>
                </div>
            </div>{" "}
        </>
    );
};

export default App;
