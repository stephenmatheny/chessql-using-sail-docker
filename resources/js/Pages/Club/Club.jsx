import { BackToClub, ClubHeader, ClubCoordinators, ClubDetails } from '@/Components/ClubComponents';
import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';
import DefaultContainer from '@/Components/DefaultComponents/DefaultContainer';

export default function Club({ auth, permissions }) {
    return (
        <>
            <MainLayout
                user={auth.user}
            >
                <Head title="Club" />
                
                <DefaultContainer>
                    <BackToClub />
                    <div className="relative bg-green-100 overflow-hidden rounded-xl">
                        <ClubHeader />
                    </div>
                    <ClubCoordinators />
                    <ClubDetails />
                </DefaultContainer>

            </MainLayout>
        </>
    );
}
