export default function layout({ children, featured, recent, tags }) {
    return (
        <div className="container mx-auto flex flex-col gap-10">
            {/* {children} */}
            {featured}
            {tags}
            {recent}
        </div>
    );
}
