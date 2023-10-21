"use client";

import Link from "next/link";
import React, { useState } from "react";
import { axios } from "axios";
import { useRouter } from "next/navigation";

const SignupPage = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
        username: "",
    });

    const onSignup = async () => {};

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Signup</h1>
            <hr />

            <label htmlFor="username">Username</label>
            <input
                className="p-2 border rounded-lg mb-4 border-blue-500"
                type="text"
                id="usename"
                value={user.username}
                onChange={e => setUser({ ...user, username: e.target.value })}
                placeholder="username"
            />

            <label htmlFor="email">Email</label>
            <input
                className="p-2 border rounded-lg mb-4 border-blue-500"
                type="text"
                id="usename"
                value={user.email}
                onChange={e => setUser({ ...user, email: e.target.value })}
                placeholder="email"
            />

            <label htmlFor="password">Password</label>
            <input
                className="p-2 border rounded-lg mb-4 border-blue-500"
                type="text"
                id="usename"
                value={user.password}
                onChange={e => setUser({ ...user, password: e.target.value })}
                placeholder="password"
            />

            <button
                onClick={onSignup}
                className="p-2 border rounded-lg mb-4 border-blue-500 bg-blue-500 text-white"
            >
                Signup Here
            </button>

            <Link href="/login">Visit Login Page</Link>
        </div>
    );
};

export default SignupPage;
