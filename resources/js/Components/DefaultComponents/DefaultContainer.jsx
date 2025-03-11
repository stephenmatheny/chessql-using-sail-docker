export default function DefaultContainer({ children }) {
    return (
        <div className="mx-auto py-2 sm:px-6 lg:px-8">
            {children}
        </div>
    );
}