import React from "react";

export default function Header() {
    const nav_items = ["profile","jobs","professional network","lounge","salary"];
    return (
        <nav>
            <div className="bg-white p-3 px-5 flex flex-wrap justify-between items-center sm:visible">
                <div className="w-9/12 lg:w-1/4 font-bold text-blue-400">
                    <span className="lg:hidden">&#9776;</span>
                    <span className="ml-3">HEALTH EXPLORE</span>
                </div>
                <div className="w-auto sm:w-full lg:w-auto hidden lg:block">
                    {
                        nav_items.map((item)=>{
                            return (
                                <a key={item} href="#" className="mx-4 font-bold uppercase">
                                    {item}
                                </a>
                            );
                        })
                    }
                </div>
                <div className="w-1/4 flex items-center justify-end lg:justify-between lg:w-1/4">
                    <button className="hidden lg:block border border-blue-400 mx-4 p-2 px-4 pt rounded-lg text-blue-400 font-bold ">
                        CREATE JOB
                    </button>
                    <span className="relative w-10 p-1 font-bold text-center text-white h-10 bg-blue-400 rounded-full">
                        JO
                        <div
                            className="absolute top-0 right-0 h-4 w-4 border-2 border-white rounded-full bg-red-400 z-2"></div>
                    </span>
                    <a href="#" className="hidden lg:block font-bold">
                        LOGOUT
                    </a>
                </div>
            </div>
        </nav>
    )
}