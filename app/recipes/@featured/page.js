export const revalidate = 3600;

export default function page() {
    return <div>{Date.now()}</div>;
}
