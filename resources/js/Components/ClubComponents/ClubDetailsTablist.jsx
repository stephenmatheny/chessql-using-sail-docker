import { SimpleCard, TabButton } from "../DefaultComponents";
import { useRemember } from '@inertiajs/react';
import ClubDetailsTabContainer from "./ClubDetailsTabContainer";

export default function ClubDetailsTablist()
{
    const [activeTab, setActiveTab] = useRemember('about', 'inventory-active-tab');

    const renderContent = () => {
        switch (activeTab) {
            case 'about':
                return (
                    <ClubDetailsTabContainer>
                        ABOUT
                    </ClubDetailsTabContainer>
                );
            case 'events':
                return (
                    <ClubDetailsTabContainer>
                        EVENTS
                    </ClubDetailsTabContainer>
                );
            case 'coordinators':
                return (
                    <ClubDetailsTabContainer>
                        COORDINATORS
                    </ClubDetailsTabContainer>
                );
            default:
                return (
                    <ClubDetailsTabContainer>
                        ABOUT
                    </ClubDetailsTabContainer>
                );
        }
    };

    return (
        <>
            <div className="grid grid-cols-3 rounded-t-lg overflow-hidden">
                <TabButton
                    label="About"
                    isActive={activeTab === 'about'}
                    onClick={() => setActiveTab('about')}
                />
                <TabButton
                    label="Events"
                    isActive={activeTab === 'events'}
                    onClick={() => setActiveTab('events')}
                />
                <TabButton
                    label="Coordinators"
                    isActive={activeTab === 'coordinators'}
                    onClick={() => setActiveTab('coordinators')}
                />
            </div>
            
            <div className="overflow-hidden">{renderContent()}</div>
        </>
    );
}