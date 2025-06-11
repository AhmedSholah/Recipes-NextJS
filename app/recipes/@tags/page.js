import TagsList from "./TagsList";

export default async function page() {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Popular Tags</h2>
            <TagsList />
        </div>
    );
}
