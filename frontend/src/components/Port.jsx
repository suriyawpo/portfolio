import React from "react";

const App = ({ prjt }) => {
    return (
        <>
            <div className="bg-cd2 shadow-md shadow-black rounded-xl text-white p-4 overflow-hidden ">
                <div class="">
                    {" "}
                    <img
                        class="bg-cover"
                        src={prjt.img}
                    />
                </div>
                <div class="text-center">
                    <p class="pt-4 text-md font-bold text-third">
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
