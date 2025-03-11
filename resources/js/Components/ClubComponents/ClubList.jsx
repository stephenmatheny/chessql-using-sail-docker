import DefaultContainer from "../DefaultContainer";
import ClubCard from "./ClubCard";

export default function ClubList({ auth, permissions }) {
    return (
        <>
            <DefaultContainer>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
                    <div>
                        <ClubCard imageUrl="https://picsum.photos/3840/2160?random=2" clubId={2} />
                    </div>
                    <div>
                        <ClubCard imageUrl="https://picsum.photos/3840/2160?random=3" clubId={3} />
                    </div>
                    <div>
                        <ClubCard imageUrl="https://picsum.photos/3840/2160?random=4" clubId={4} />
                    </div>
                    <div>
                        <ClubCard imageUrl="https://picsum.photos/3840/2160?random=5" clubId={5} />
                    </div>
                    <div>
                        <ClubCard imageUrl="https://picsum.photos/3840/2160?random=6" clubId={6} />
                    </div>
                </div>
            </DefaultContainer>
        </>
    );
}
