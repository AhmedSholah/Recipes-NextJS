"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function TagsList() {
    const [tags, setTags] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTags = async () => {
            try {
                const res = await fetch("https://dummyjson.com/recipes/tags");
                const data = await res.json();
                setTags(data.slice(0, 6));
            } catch (error) {
                console.error("Failed to fetch tags:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTags();
    }, []);

    if (loading)
        return (
            <div className="flex w-full h-full justify-center items-center">
                <span className="loading loading-spinner loading-xl"></span>
            </div>
        );

    return (
        <div className="flex gap-2 flex-wrap">
            {tags.map((tag) => (
                // <div key={tag} href={"/"}>
                <span
                    key={tag}
                    className="badge badge-outline badge-primary border-bg-orange-600"
                >
                    {tag}
                </span>
                // </d>
            ))}
        </div>
    );
}
