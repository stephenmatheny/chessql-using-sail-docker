import { Button } from "@headlessui/react";
import { Link } from "@inertiajs/react";
import { IconChevronLeft } from "@tabler/icons-react";

export default function BackToClub() {
    return (
        <div className="my-2">
            <Button>
                <Link href="/clubs" className="flex text-cyan-800 dark:text-cyan-200 dark:hover:text-cyan-600">
                    <IconChevronLeft /> Back to Clubs
                </Link>
            </Button>
        </div>
    );
}