import React from "react";

export default function Footer() {
    return (
        <div className=" bg-white flex flex-wrap p-3">
            <div className="w-full p-4 sm:w-full lg:w-3/6">
                <h3 className="text-xl font-bold mb-2">About Us</h3>
                <p>
                    We are a team of nurses, doctors, technologists and executives dedicated to help nurses find jobs that they love.
                </p>
                <p className="mt-2">
                    All rights reserved {(new Date().getFullYear())} - Health Explore
                </p>
            </div>
            <div className="w-full p-4 sm:w-full lg:w-1/4">
                <h3 className="text-xl font-bold mb-2">Site Map</h3>
                <p>
                    Nurses
                </p>
                <p>
                    Employers
                </p>
                <p>
                    Social networking
                </p>
                <p>
                    Jobs
                </p>
            </div>
            <div className="w-full p-4 sm:w-full lg:w-1/4">
                <h3 className="text-xl font-bold mb-2">Privacy</h3>
                <p>
                    Terms of Use
                </p>
                <p>
                    Privacy Policy
                </p>
                <p>
                    Cookie Policy
                </p>
            </div>
        </div>
    )
}