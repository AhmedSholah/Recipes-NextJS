import Link from "next/link";
import { LuChefHat } from "react-icons/lu";

export default function NavBar() {
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
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <a>Link</a>
                        </li>
                        <li>
                            <details>
                                <summary>Parent</summary>
                                <ul className="bg-base-100 rounded-t-none p-2">
                                    <li>
                                        <a>Link 1</a>
                                    </li>
                                    <li>
                                        <a>Link 2</a>
                                    </li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
