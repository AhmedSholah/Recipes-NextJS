// export const revalidate = 3600;

// export default function page() {
//     return <div>{Date.now()}</div>;
// }

export const revalidate = 3600; // ISR - revalidate every 5 seconds

async function getServerTime() {
    // Simulate API call delay (e.g., 2 seconds)
    await new Promise((resolve) => setTimeout(resolve, 1));
    return Date.now();
}

export default async function Page() {
    const serverTime = await getServerTime();

    return (
        <div>
            <h1>Server Time (Simulated API)</h1>
            <p>{serverTime}</p>
        </div>
    );
}
