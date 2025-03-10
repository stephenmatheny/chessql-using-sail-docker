import ClubCard from "./ClubCard";

export default function ClubList({ auth, permissions }) {
    return (
        <>
            <div className="mx-auto space-y-6 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
                    <div>
                        <ClubCard imageUrl="https://picsum.photos/200?random=2" />
                    </div>
                    <div>
                        <ClubCard imageUrl="https://picsum.photos/200?random=3" />
                    </div>
                    <div>
                        <ClubCard imageUrl="https://picsum.photos/200?random=4" />
                    </div>
                    <div>
                        <ClubCard imageUrl="https://picsum.photos/200?random=5" />
                    </div>
                    <div>
                        <ClubCard imageUrl="https://picsum.photos/200?random=6" />
                    </div>
                </div>
            </div>
        </>
    );
}
