export default function ProfileLink({ imageUrl, fullName }) {
    return (
        <div className="group flex items-center gap-1 rounded-full bg-gray-100 px-1 py-1 text-xs transition-colors hover:bg-cyan-100 dark:hover:bg-cyan-700">
            <img className="h-4 w-4 rounded-full" src={imageUrl} />
            <span className="text-cyan-900 group-hover:text-cyan-800 dark:group-hover:text-cyan-200">
                {fullName}
            </span>
        </div>
    );
}