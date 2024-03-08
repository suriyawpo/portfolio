import React from "react";
import logo from "./assets/1.png";
import {
    MdEmail,
    MdAddIcCall
} from "react-icons/md";
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedin
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-bg text-white py-8">
            <div className="container mx-auto  ">
                <div class="text-cener w-full grid grid-cols-2 md:grid-cols-4  gap-10 flex-col md:flex-row">
                    <div class="">
                        <div className="  text-4xl font-bold">
                            <span className="">
                                Portfo
                            </span>
                            <span className="text-third">
                                lio
                            </span>
                        </div>
                        <p className="text-lg font-normal mb-4"></p>
                        <p className="text-sm  mb-4">
                            Explore the
                            World with
                            Tourism.
                            Your gateway
                            to
                            unforgettable
                            experiences.
                        </p>
                    </div>
                    <div className="flex flex-col ">
                        <p class="text-lg  font-bold mb-6">
                            Links
                        </p>
                        <div className="flex flex-col  text-sm ">
                            <a
                                href="#"
                                className=" hover:text-yellow-300 mb-3"
                            >
                                Home
                            </a>
                            <a
                                href="#"
                                className=" hover:text-white mb-3"
                            >
                                Products
                            </a>
                            <a
                                href="#"
                                className=" hover:text-white mb-3"
                            >
                                About Us
                            </a>
                            <a
                                href="#"
                                className=" hover:text-white mb-3"
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col ">
                        <p class="text-lg font-bold mb-6">
                            Follow us on
                        </p>
                        <div className=" text-sm ">
                            <a
                                href="#"
                                className=" hover:text-white flex items-center mb-3"
                            >
                                <FaFacebook className="size-6 mr-2" />
                                Facebook
                            </a>
                            <a
                                href="#"
                                className=" hover:text-white flex items-center mb-3"
                            >
                                <FaTwitter className="size-6 mr-2" />
                                Twitter
                            </a>
                            <a
                                href="#"
                                className=" hover:text-white flex items-center mb-3"
                            >
                                <FaInstagram className="mr-2 size-6" />
                                Instagram
                            </a>
                            <a
                                href="#"
                                className=" hover:text-white flex items-center mb-3"
                            >
                                <FaLinkedin className=" size-6 mr-2" />
                                LinkedIn
                            </a>
                        </div>
                    </div>
                    <div className="text-sm ">
                        <p className="mb-6 font-bold text-lg">
                            Contact Us
                        </p>
                        <div className="flex items-center gap-3 mb-3">
                            <MdEmail className="size-6 " />
                            <p className="">
                                7Up@gmail.com
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <MdAddIcCall className="size-6" />
                            <p className="">
                                +61-93045672
                            </p>
                        </div>
                    </div>
                </div>
                <p className="text-sm mt-6 text-center">
                    &copy; 2024 7Up. All
                    rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
