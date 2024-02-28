import React from "react";

const App = ({ prjt }) => {
    return (
        <>
            <div className="shadow-xl shadow-black rounded-xl bg-gray-700 p-4 overflow-hidden ">
                <div class="bg-amber-400">
                    {" "}
                    <img
                        class="bg-cover"
                        src={prjt.img}
                    />
                </div>
                <div class="text-center">
                    <p class="pt-4 text-md font-semibold text-third">
                        {prjt.name}
                    </p>
                    <p class="pt-4 text-sm">
                        Lorem ipsum
                        dolor sit amet,
                        consectetur
                        adipisicing
                        elit.
                    </p>
                </div>
            </div>{" "}
        </>
    );
};

export default App;
