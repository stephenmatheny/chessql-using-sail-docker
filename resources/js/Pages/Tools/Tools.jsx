import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';

export default function Tools({ auth, permissions }) {
    return (
        <>
            <MainLayout
                user={auth.user}
            >
                <Head title="Tools" />

            </MainLayout>
        </>
    );
}
