import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";

const HeroSection = () => {
    return (
        <div
            className="relative flex items-center justify-center bg-cover bg-center"
            style={{backgroundImage: 'url("/bckg.png")', height: "70vh"}}
        >
            <div className="text-center text-white">
                <h1 className="text-4xl font-semibold mb-4 font-sans">
                    Find and book <span style={{color: "#ff9e15"}}> The Best</span> Doctors Near You
                </h1>

                <div className="flex flex-col items-center mt-8 sm:flex-row sm:justify-center">
                    <div className="relative mb-4 sm:mb-0">
                        <FontAwesomeIcon
                            icon={faMapMarkerAlt}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#ff9e15]"
                        />
                        <input
                            type="text"
                            placeholder="Location"
                            className="py-2 px-6 pl-12 border border-gray-300 rounded-sm focus:outline-none w-full sm:w-64 md:w-80 lg:w-96 h-14"
                        />
                    </div>
                    <input
                        type="text"
                        placeholder="Search for Doctors, Specialists, Experts, Surgeons"
                        className="py-2 px-6 border border-gray-300 focus:outline-none rounded-sm w-full sm:w-64 md:w-80 lg:w-96 h-14"
                    />
                    <button className="bg-[#ff9e15] text-white py-2 px-8 rounded-sm h-14 mt-4 sm:mt-0 sm:ml-4 hover:bg-[#e68812]">
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
