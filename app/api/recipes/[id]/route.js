const DUMMYJSON_BASE_URL = "https://dummyjson.com/recipes";

export async function GET(request, { params }) {
    const { id } = params;

    try {
        const response = await fetch(`${DUMMYJSON_BASE_URL}/${id}`);

        if (response.status === 404) {
            return new Response(
                JSON.stringify({ message: `Recipe with ID ${id} not found.` }),
                {
                    status: 404,
                    headers: { "Content-Type": "application/json" },
                }
            );
        }

        const data = await response.json();
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
