"use client";

import Link from "next/link";
import { LuChefHat } from "react-icons/lu";
import { useAuth } from "../store/useAuth";

export default function NavBar() {
    const { isAuthenticated, logout } = useAuth();

    function handleLogout() {
        logout();
    }

    return (
        <div className="navbar bg-base-100 shadow-sm sticky top-0 mb-5 z-50 ">
            <div className="container mx-auto flex items-center">
                <div className="flex-1">
                    <Link
                        href={"/"}
                        className="flex items-center gap-2 text-xl font-bold"
                    >
                        <LuChefHat fontSize={32} className="text-primary" />
                        RecipeCraft
                    </Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 flex items-center gap-3">
                        <li>
                            <Link href={"/recipes"}>Recipes</Link>
                        </li>
                        <li>
                            <Link href={"/create-recipe"}>Create Recipe</Link>
                        </li>
                        {isAuthenticated ? (
                            <button
                                className="btn btn-soft btn-error"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        ) : (
                            <li>
                                <Link
                                    className="btn btn-primary"
                                    href={"/login"}
                                >
                                    Login
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}
