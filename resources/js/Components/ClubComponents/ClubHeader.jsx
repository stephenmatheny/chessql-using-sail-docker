import { IconMapPin } from "@tabler/icons-react";
import SimpleCardImage from "../SimpleCardImage";

export default function ClubHeader() {
    return (
        <div className="relative mb-8 overflow-hidden rounded-xl">
            <div className="relative h-64 w-full sm:h-80 md:h-96">
                <img src="https://picsum.photos/3840/2160?random=2" alt="Club-name" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-end gap-4">
                    <div className="relative h-20 w-20 overflow-hidden rounded-lg border-4 border-white bg-white sm:h-24 sm:w-24">
                        <img src="https://picsum.photos/2160/2160?random=3" alt="club-logo" className="object-cover" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl">Grand Masters Chess Club</h1>
                        <p className="text-sm text-gray-200 sm:text-base">
                            <IconMapPin className="mr-1 inline-block h-4 w-4" />
                            Lufkin, TX • Est. 2005
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}