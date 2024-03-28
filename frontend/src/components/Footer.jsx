import React from "react";
import logo from "./assets/1.png";
import { FiArrowUpCircle } from "react-icons/fi";
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
        <footer className=" text-white ">
            <div className="contain mx-auto  ">
                <div class="text-cener w-full grid grid-cols-2 md:grid-cols-3  gap-10 flex-col md:flex-row">
                    <div class="">
                        <div className="  text-4xl font-bold">
                            <p class="text-4xl text-third text-semibold font-cookie">
                                SW
                            </p>
                        </div>
                        <p className="text-lg font-normal mb-4"></p>
                        <p className="text-sm  mb-4">
                            Get in touch
                            with us
                            today to
                            discover how
                            I can bring
                            your vision
                            to life.{" "}
                        </p>
                        <div class="hidden">
                            <FiArrowUpCircle class="text-5xl text-third mx-auto" />
                            <p class="text-center mt-2">
                                up
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col ">
                        <p class="text-lg text-third font-bold mb-6">
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
                        <p class="text-lg text-third font-bold mb-6">
                            Follow me on
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
                </div>
                <p className="text-sm mt-6 text-center">
                    &copy; 2024 sw. All
                    rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
