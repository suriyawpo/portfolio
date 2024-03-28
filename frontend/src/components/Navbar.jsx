import React, { useState } from "react";
import img from "./assets/IMG_20240327_141347.png";
const Navbar = () => {
    const [menu, setMenu] =
        useState(false);
    const [show, setShow] = useState(1);
    const openMenu = () => {
        setMenu(!menu);
    };

    return (
        <div className="fixe w-full text-white">
            <div className=" py-4 px-4 md:px-16">
                <nav className=" flex justify-between items-center ">
                    <div className=" text-4xl font-bold">
                        <p class="text-4xl text-third text-semibold font-cookie xl:text-6xl">
                            SW
                        </p>
                    </div>
                    <div className=" hidden font-medium md:flex md:flex-row items-center space-x-8 capitalize text-left">
                        <a
                            className={`${
                                show ==
                                1
                                    ? "text-third"
                                    : ""
                            } hover:text-third`}
                            onClick={() => {
                                setShow(
                                    1
                                );
                            }}
                            href="#home"
                        >
                            home
                        </a>
                        <a
                            className={`${
                                show ==
                                2
                                    ? "text-third"
                                    : ""
                            } hover:text-third`}
                            onClick={() => {
                                setShow(
                                    2
                                );
                            }}
                            href="#about"
                        >
                            about me
                        </a>
                        <a
                            className={`${
                                show ==
                                3
                                    ? "text-third"
                                    : ""
                            } hover:text-third`}
                            onClick={() => {
                                setShow(
                                    3
                                );
                            }}
                            href="#skills"
                        >
                            skills
                        </a>
                        <a
                            className={`${
                                show ==
                                4
                                    ? "text-third"
                                    : ""
                            } hover:text-third`}
                            onClick={() => {
                                setShow(
                                    4
                                );
                            }}
                            href="#portfolio"
                        >
                            portfolio
                        </a>
                        <a
                            className={`${
                                show ==
                                5
                                    ? "text-third"
                                    : ""
                            } btn border-2 rounded-xl hover:text-third`}
                            onClick={() => {
                                setShow(
                                    5
                                );
                            }}
                            href="#contact"
                        >
                            Contact Me
                        </a>
                    </div>

                    <button
                        className="text-third border rounded w-fit md:hidden z-20 fixed right-8"
                        onClick={
                            openMenu
                        }
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={
                                1.5
                            }
                            stroke="currentColor"
                            className="size-8 bg-white stroke-2"
                        >
                            {" "}
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </button>
                </nav>
            </div>

            <div
                className={`fixed flex w-full z-20 h-dvh top-0  transition-all duration-300 ${
                    menu
                        ? "right-0 opacity-1"
                        : "right-full opacity-0"
                }`}
            >
                <div className="bg-cd2 text-white w-2/3 ">
                    <div
                        className="w relative flex justify-between items-center px-8 my-8"
                        onClick={
                            openMenu
                        }
                    >
                        <p class="text-4xl text-third text-semibold font-cookie ">
                            SW
                        </p>
                        <button className="bsolute right-4 top-4 ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={
                                    1.5
                                }
                                stroke="currentColor"
                                className="size-7"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18 18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className=" flex flex-col mt-12 space-y-6 capitalize text-left px-8">
                        <a
                            className={`${
                                show ==
                                1
                                    ? "text-third"
                                    : ""
                            }`}
                            onClick={() => {
                                setShow(
                                    1
                                );
                                openMenu();
                            }}
                            href="#home"
                        >
                            home
                        </a>
                        <a
                            className={`${
                                show ==
                                2
                                    ? "text-third"
                                    : ""
                            }`}
                            onClick={() => {
                                setShow(
                                    2
                                );
                                openMenu();
                            }}
                            href="#about"
                        >
                            about me
                        </a>
                        <a
                            className={`${
                                show ==
                                3
                                    ? "text-third"
                                    : ""
                            }`}
                            onClick={() => {
                                setShow(
                                    3
                                );
                                openMenu();
                            }}
                            href="#skills"
                        >
                            Skills
                        </a>
                        <a
                            className={`${
                                show ==
                                4
                                    ? "text-third"
                                    : ""
                            }`}
                            onClick={() => {
                                setShow(
                                    4
                                );
                                openMenu();
                            }}
                            href="#portfolio"
                        >
                            My Portfolio
                        </a>
                        <a
                            className={`${
                                show ==
                                5
                                    ? "text-third"
                                    : ""
                            } px-3 py-1 rounded-md border text-center mt-6`}
                            onClick={() => {
                                setShow(
                                    5
                                );
                                openMenu();
                            }}
                            href="#contact"
                        >
                            Contact
                        </a>
                    </div>
                </div>
                <div
                    className="bg-black bg-opacity-50 w-1/3"
                    onClick={openMenu}
                ></div>
            </div>
        </div>
    );
};

export default Navbar;
