import { ClubDetailsCard, ClubDetailsTablist, ClubMembersCard  } from '@/Components/ClubComponents';

export default function ClubDetails()
{
    return (
        <>
            <div className="pt-6 grid w-full grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-6">
                <div className="grid col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 gap-4">
                    <ClubDetailsCard />
                    <ClubMembersCard />
                </div>
                <div className="col-span-1 md:col-span-3 lg:col-span-3 xl:col-span-3">
                    <ClubDetailsTablist />
                </div>
            </div>
        </>
    );
}