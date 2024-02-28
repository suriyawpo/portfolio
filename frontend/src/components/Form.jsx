import React, { useState } from "react";

const Form = () => {
    const [formData, setFormData] =
        useState({
            username: "",
            email: "",
            message: ""
        });
    const [error, seterror] = useState({
        username: "",
        email: "",
        message: ""
    });

    // Add onChange handlers to update the state when input values change
    const handleChange = e => {
        const { name, value } =
            e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validate = () => {
        let valid = true;
        if (!formData.username.trim()) {
            const srt = "username";
            seterror(pre => {
                return {
                    ...pre,
                    [srt]: "Name required"
                };
            });
            valid = false;
        } else {
            seterror(pre => {
                return {
                    ...pre,
                    username: ""
                };
            });
        }
        if (!formData.email.trim()) {
            seterror(pre => {
                return {
                    ...pre,
                    email: "Email required"
                };
            });
            valid = false;
        } else {
            seterror(pre => {
                return {
                    ...pre,
                    email: ""
                };
            });
        }
        if (!formData.message.trim()) {
            seterror(pre => {
                return {
                    ...pre,
                    message:
                        "Message can't be blank"
                };
            });
            valid = false;
        } else {
            seterror(pre => {
                return {
                    ...pre,
                    message: ""
                };
            });
        }
        return valid;
    };

    const handlesubmit = e => {
        e.preventDefault();
        if (validate()) {
            console.log("valid");
        } else return;
    };
    return (
        <div className="font-medium">
            <form
                onSubmit={handlesubmit}
                className="space-y-6 "
            >
                <div className="">
                    <label className="">
                        Name
                        <input
                            type="text"
                            name="username"
                            placeholder="Enter your name"
                            value={
                                formData.username
                            }
                            onChange={
                                handleChange
                            }
                            className={`${
                                error.username
                                    ? "border-red-500"
                                    : "border-white"
                            } text-white border-b bg-gray-900 rounded-xl focus:border-yellow-400 focus:outline-none px-2 py-1 w-full `}
                        />
                    </label>
                    <p className="text-red-500 text-[12px]">
                        {error.username}
                    </p>
                </div>
                <div className="">
                    <label className="">
                        Email
                        <input
                            type="text"
                            name="email"
                            placeholder="Enter your email"
                            value={
                                formData.email
                            }
                            onChange={
                                handleChange
                            }
                            className={`${
                                error.email
                                    ? "border-red-500"
                                    : "border-white "
                            } text-white rounded-xl border-b bg-gray-900 focus:border-yellow-400 focus:outline-none px-2 py-1 w-full `}
                        />
                    </label>
                    <p className="text-red-500 text-[12px]">
                        {error.email}
                    </p>
                </div>
                <div className="">
                    <textarea
                        name="message"
                        value={
                            formData.message
                        }
                        onChange={
                            handleChange
                        }
                        className="text-white w-full p-3 rounded-xl outline-none bg-gray-900"
                        placeholder="Your message"
                    />
                    <p className="text-red-500 text-[12px]">
                        {error.message}
                    </p>
                </div>
                <div className="text-center">
                    <button
                        className="px-8 py-2 rounded-lg bg-third"
                        type="submit"
                    >
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;
