import RecipeCard from "../../components/RecipeCard";

export default async function RecentRecipes() {
    const res = await fetch("https://dummyjson.com/recipes?limit=3");

    let data = await res.json();

    console.log(data);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {data.recipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
        </div>
    );
}
