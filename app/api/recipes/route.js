const DUMMYJSON_BASE_URL = "https://dummyjson.com/recipes";

export async function GET() {
    try {
        const res = await fetch(DUMMYJSON_BASE_URL);
        const data = await res.json();
        return new Response(JSON.stringify(data), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        return new Response(
            JSON.stringify({
                message: "Internal Server Error",
                error: error.message,
            }),
            {
                status: 500,
                headers: { "Content-Type": "application/json" },
            }
        );
    }
}

export async function POST(request) {
    try {
        const newRecipeData = await request.json();

        const response = await fetch(`${DUMMYJSON_BASE_URL}/add`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newRecipeData),
        });

        const addedRecipe = await response.json();
        return new Response(JSON.stringify(addedRecipe), {
            status: 201,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        return new Response(
            JSON.stringify({
                message: "Internal Server Error",
                error: error.message,
            }),
            {
                status: 500,
                headers: { "Content-Type": "application/json" },
            }
        );
    }
}
