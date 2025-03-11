import { SimpleCard } from "../DefaultComponents";
import PlayerList from "./PlayerList";

export default function ClubMembersCard()
{
    return (
        <>
            <SimpleCard>
                <div className="p-4">
                    <div className="grid gap-2">
                        <h1 className="font-bold text-xl">Members</h1>
                        <PlayerList title="Coordinators" />
                        <hr />
                        <PlayerList title="Others" />
                    </div>
                </div>
            </SimpleCard>
        </>
    );
}