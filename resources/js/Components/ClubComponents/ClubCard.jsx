import React from "react";
import { SimpleCard, SimpleCardImage }  from '@/Components/DefaultComponents';
import { IconCalendarWeek, IconChevronRight, IconMapPin, IconUsers } from "@tabler/icons-react";
import PrimaryLink from "../DefaultComponents/PrimaryLink";

export default function ClubCard({ imageUrl, clubId }) {
    const rgb = "rgb(114, 238, 255)";

    return (
        <>
            <SimpleCard>
                <div className="relative w-full">
                    <SimpleCardImage imageUrl={imageUrl} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="p-4">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-bold">Grand Masters Chess Club</h1>
                    </div>
                    <div><p>A welcoming chess club for players of all skill levels. Join us for weekly tournaments,</p></div>

                    <div className="pt-2 grid">
                        <div className="flex items-center text-sm">
                            <IconMapPin color={rgb} className="pr-1" />Lufkin, TX
                        </div>
                        <div className="flex items-center text-sm">
                            <IconCalendarWeek color={rgb} className="pr-1" />Meets every Wednesday at 6 PM
                        </div>
                        <div className="flex items-center text-sm">
                            <IconUsers color={rgb} className="pr-1" />45 members
                        </div>
                    </div>

                    {/* <h3 className="pt-4 mb-2 text-sm font-semibold">Coordinators</h3>
                    <div className="grid gap-1">
                        <ProfileLink
                            imageUrl="https://picsum.photos/200?random=1"
                            fullName="Stephen Matheny"
                        />
                        <ProfileLink
                            imageUrl="https://picsum.photos/200?random=2"
                            fullName="John Doe"
                        />
                        <ProfileLink
                            imageUrl="https://picsum.photos/200?random=3"
                            fullName="Jane Doe"
                        />
                        <ProfileLink
                            imageUrl="https://picsum.photos/200?random=4"
                            fullName="Bill Row"
                        />
                    </div> */}

                    <div className="pt-4 flex justify-end">
                        <PrimaryLink href={"clubs/" + 1}>
                            View Club<IconChevronRight />
                        </PrimaryLink>
                    </div>

                </div>
            </SimpleCard>
        </>
    );
}
