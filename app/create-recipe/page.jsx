"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "../store/useAuth";

export default function page() {
    const router = useRouter();
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        router.push("/login");
    }

    return <div>page</div>;
}
