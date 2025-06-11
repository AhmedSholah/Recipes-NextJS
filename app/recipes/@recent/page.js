import { Suspense } from "react";
import RecentRecipes from "./RecentRecipes";

export default function page() {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Recent Recipes</h2>

            <Suspense fallback={<p>Loading recent recipes...</p>}>
                <RecentRecipes />
            </Suspense>
        </div>
    );
}
