import ProfileLink from '@stories/components/ProfileLink/ProfileLink';


export default function PlayerList({ title })
{
    return (
        <>
            <h3 className="text-xs font-semibold py-1">{title}</h3>
            <div className="grid gap-2 grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
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