import BackToClub from '@/Components/ClubComponents/BackToClub';
import ClubHeader from '@/Components/ClubComponents/ClubHeader';
import DefaultContainer from '@/Components/DefaultContainer';
import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';

export default function Club({ auth, permissions }) {
    return (
        <>
            <MainLayout
                user={auth.user}
            >
                <Head title="Club" />
                
                <DefaultContainer>
                    <BackToClub />

                    <div className="relative mb-8 overflow-hidden rounded-xl">
                        <ClubHeader />
                    </div>
                </DefaultContainer>

            </MainLayout>
        </>
    );
}
