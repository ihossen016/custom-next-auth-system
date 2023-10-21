"use client";

import Link from "next/link";
import React, { useState } from "react";
import { axios } from "axios";
import { useRouter } from "next/navigation";

const LoginPage = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const onLogin = async () => {};

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Login</h1>
            <hr />

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
                onClick={onLogin}
                className="p-2 border rounded-lg mb-4 border-blue-500 bg-blue-500 text-white"
            >
                Login Here
            </button>

            <Link href="/signup">Visit Signup Page</Link>
        </div>
    );
};

export default LoginPage;
