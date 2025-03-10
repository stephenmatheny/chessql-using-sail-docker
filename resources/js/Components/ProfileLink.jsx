export default function ProfileLink({ imageUrl, fullName }) {
    return (
        <div className="group flex items-center gap-2 rounded-full bg-gray-100 px-2 py-1 text-sm transition-colors hover:bg-cyan-100 dark:hover:bg-cyan-700">
            <img className="h-6 w-6 rounded-full" src={imageUrl} />
            <span className="text-muted-foreground group-hover:text-cyan-800 dark:group-hover:text-cyan-200">
                {fullName}
            </span>
        </div>
    );
}