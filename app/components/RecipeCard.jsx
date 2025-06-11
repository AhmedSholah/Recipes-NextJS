import Link from "next/link";
import Image from "next/image";
import { TbStar, TbClock } from "react-icons/tb";

export default function RecipeCard({ recipe }) {
    return (
        <div className="card bg-base-100 shadow-sm mx-5 md:mx-0">
            <figure>
                <Image
                    src={recipe.image}
                    alt={recipe.name}
                    width={400}
                    height={250}
                    className="object-cover w-full h-48"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{recipe.name}</h2>
                <p>{recipe.cuisine}</p>
                <div className="flex gap-2">
                    <div className="flex items-center gap-2">
                        <TbStar className="text-warning" />
                        <span>
                            {recipe.rating.toFixed(1)} ({recipe.reviewCount})
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <TbClock />
                        <span>
                            {recipe.prepTimeMinutes + recipe.cookTimeMinutes}{" "}
                            minutes
                        </span>
                    </div>
                </div>
                <div className="card-actions justify-end">
                    <Link
                        href={`/recipes/${recipe.id}`}
                        className="btn btn-primary w-full mt-2"
                    >
                        View Recipe
                    </Link>
                </div>
            </div>
        </div>
    );
}
