import ClubList from '@/Components/ClubComponents/ClubList';
import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';

export default function Club({ auth, permissions }) {
    return (
        <>
            <MainLayout
                user={auth.user}
            >
                <Head title="Club" />
                
                    <ClubList />

            </MainLayout>
        </>
    );
}
