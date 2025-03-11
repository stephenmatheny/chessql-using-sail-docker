export default function TabButton({ label, isActive, onClick }) {
    const inactiveClass = "bg-cyan-700 hover:bg-cyan-800";
    const activeClass = "bg-cyan-500 hover:bg-cyan-700";

    return (
        <button
            className={`py-2 px-4 text-white font-bold ${isActive ? activeClass : inactiveClass}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
}