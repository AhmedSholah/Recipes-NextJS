import RecipeCard from "../../components/RecipeCard.jsx";

export default async function FeaturedRecipes() {
    const res = await fetch("http://localhost:3000/api/recipes");
    const data = await res.json();

    // Sort recipes by rating in descending order and take the top 2
    const topRecipes = data.recipes
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 2);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Top 2 Featured Recipes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {topRecipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div>
    );
}
