import { ClubList } from '@/Components/ClubComponents';
import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';

export default function Clubs({ auth, permissions }) {
    return (
        <>
            <MainLayout
                user={auth.user}
            >
                <Head title="Clubs" />
                
                    <ClubList />

            </MainLayout>
        </>
    );
}
