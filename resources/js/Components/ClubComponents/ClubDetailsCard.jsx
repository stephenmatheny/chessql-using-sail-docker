import { IconCalendarWeek, IconLink, IconMail, IconMapPin, IconPhone, IconUsers } from "@tabler/icons-react";
import { PrimaryLink, SimpleCard } from "../DefaultComponents";

export default function ClubDetailsCard()
{
    const rgb = "rgb(114, 238, 255)";
    return (
        <>
            <SimpleCard>
                <div className="p-4">
                    <h1 className="font-bold text-xl">Club Details</h1>
                    <div className="py-2">
                        <div className="flex items-center text-sm">
                            <IconMapPin color={rgb} className="pr-1" />Lufkin, TX
                        </div>
                        <div className="flex items-center text-sm">
                            <IconCalendarWeek color={rgb} className="pr-1" />Meets every Wednesday at 6 PM
                        </div>
                        <div className="flex items-center text-sm">
                            <IconUsers color={rgb} className="pr-1" />45 members
                        </div>
                        <div className="flex items-center text-sm">
                            <IconLink color={rgb} className="pr-1" />www.example.com
                        </div>
                        <div className="flex items-center text-sm">
                            <IconMail color={rgb} className="pr-1" />example@email.com
                        </div>
                        <div className="flex items-center text-sm">
                            <IconPhone color={rgb} className="pr-1" />123-456-789
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <hr />
                        <h3 className="text-xs font-semibold">Membership</h3>
                        <p className="text-xs ">Free</p>
                        <div  className="flex justify-center w-full">
                            <PrimaryLink href="www.google.com" className="flex justify-center w-full">
                                Join This Club
                            </PrimaryLink>
                        </div>
                    </div>
                </div>
            </SimpleCard>
        </>
    );
}