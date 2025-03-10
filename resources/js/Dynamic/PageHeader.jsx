
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import Dropdown from '@/Components/Dropdown';

const PageHeader = ({ user }) => {
    const rgb = "rgb(207 250 254)";

    return (
        <div className="flex justify-between mt-3 mx-6 items-center">
            <Link href="/">
                <ApplicationLogo className="h-20 w-auto fill-current text-cyan-800 dark:text-logoColor" />
            </Link>

            <Dropdown>
                <Dropdown.Trigger>
                    <span className="inline-flex rounded-md">
                        <button
                            type="button"
                            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-logo-rgb dark:text-logo-rgb hover:text-logo-rgb-hover dark:hover:text-logo-rgb-hover focus:outline-none transition ease-in-out duration-150"
                        >
                            {user.first_name} {user.last_name}

                            <svg
                                className="ms-2 -me-0.5 h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </span>
                </Dropdown.Trigger>

                <Dropdown.Content>
                    <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                    <Dropdown.Link href={route('logout')} method="post" as="button">
                        Log Out
                    </Dropdown.Link>
                </Dropdown.Content>
            </Dropdown>
        </div>
    );
}

export default PageHeader;
