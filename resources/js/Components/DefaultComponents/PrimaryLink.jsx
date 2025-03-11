import { Link } from "@inertiajs/react";

export default function PrimaryLink({ children, href, className='' }) {
    return (
        <Link
            href={href}
            className={
                `inline-flex items-center rounded-md border border-transparent bg-cyan-700 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white dark:text-logo-rgb transition duration-150 ease-in-out dark:hover:bg-cyan-800 hover focus:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 active:bg-cyan-900` + className
            }
        >
            {children}
        </Link>
    );
}
