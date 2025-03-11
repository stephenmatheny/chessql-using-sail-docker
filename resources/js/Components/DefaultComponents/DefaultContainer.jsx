export default function DefaultContainer({ children }) {
    return (
        <div className="mx-auto sm:px-6 lg:px-8">
            {children}
        </div>
    );
}