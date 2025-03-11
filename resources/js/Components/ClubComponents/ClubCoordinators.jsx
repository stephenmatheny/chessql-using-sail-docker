import { ProfileLink } from '@/Components/DefaultComponents';

export default function ClubCoordinators()
{
    return (
        <>
            <h3 className="text-xs font-semibold dark:text-cyan-200 py-1">Coordinators</h3>
            <div className="grid grid-cols-auto gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
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
            </div>
        </>
    );
}