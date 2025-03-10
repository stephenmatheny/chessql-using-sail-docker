import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';

export default function Tournament({ auth, permissions }) {
    return (
        <>
            <MainLayout
                user={auth.user}
            >
                <Head title="Tournament" />

            </MainLayout>
        </>
    );
}
