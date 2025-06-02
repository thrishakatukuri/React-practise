import React from "react";

const PromoBanner = () => {
    const she = {
        name: "Thrisha Katukuri",
        sameAs: true,
    };
    return (
        <div>
            <p className=" m-1 w-[99%] py-1 bg-orange-500 text-white  rounded shadow-md text-lg font-semibold text-center">
                Welcome! To My World🫣...
            </p>
            {/* <div className="w-Full bg-gray-500  w-[95%] m-5 rounded p-5">
                <p className="text-yellow-500">{she.name}</p>
                <p>🫣 <span className={she.sameAs ? "text-green-500" : "text-red-500"}>{she.sameAs ? "haha!🫣" : "ushhh😤"}</span></p>
            </div> */}
        </div>
    );
};
export { PromoBanner }
