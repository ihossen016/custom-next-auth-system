"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const SignupPage = () => {
    const route = useRouter();
    const [user, setUser] = useState({
        email: "",
        password: "",
        username: "",
    });
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [loading, setLoading] = useState(false);

    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            console.log("Signup successful", response.data);

            toast.success("Signup successful", {
                duration: 4000,
                position: "top-center",
            });

            route.push("/login");
            setLoading(false);
        } catch (error: any) {
            console.log("Signup failed ", error.message);

            toast.error(error.message, {
                duration: 4000,
                position: "top-center",
            });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (
            user.email.length > 0 &&
            user.password.length > 0 &&
            user.username.length > 0
        ) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>{loading ? "Processing" : "Signup"}</h1>
            <hr />

            <label htmlFor="username">Username</label>
            <input
                className="p-2 border rounded-lg mb-4 border-blue-500"
                type="text"
                id="usename"
                value={user.username}
                onChange={e => setUser({ ...user, username: e.target.value })}
                placeholder="username"
                disabled={loading}
            />

            <label htmlFor="email">Email</label>
            <input
                className="p-2 border rounded-lg mb-4 border-blue-500"
                type="text"
                id="usename"
                value={user.email}
                onChange={e => setUser({ ...user, email: e.target.value })}
                placeholder="email"
                disabled={loading}
            />

            <label htmlFor="password">Password</label>
            <input
                className="p-2 border rounded-lg mb-4 border-blue-500"
                type="text"
                id="usename"
                value={user.password}
                onChange={e => setUser({ ...user, password: e.target.value })}
                placeholder="password"
                disabled={loading}
            />

            <button
                onClick={onSignup}
                className={`p-2 border rounded-lg mb-4 border-blue-500 bg-blue-500 text-white ${
                    buttonDisabled ? "cursor-not-allowed" : ""
                }`}
                disabled={buttonDisabled}
            >
                {buttonDisabled ? "No Signup" : "Signup Here"}
            </button>

            <Link href="/login">Visit Login Page</Link>
        </div>
    );
};

export default SignupPage;
