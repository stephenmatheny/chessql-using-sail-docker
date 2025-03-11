export default function DefaultContainer({ children }) {
    return (
        <div className="mx-auto space-y-6 sm:px-6 lg:px-8">
            {children}
        </div>
    );
}