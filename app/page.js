import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex items-center flex-col gap-10">
            <h1 className="text-6xl font-bold text-center mt-20">
                Discover Amazing
                <div className="text-primary">Recipes</div>
            </h1>
            <Link href={"/recipes"} className="btn btn-primary">
                Browse Recipes
            </Link>
        </div>
    );
}
