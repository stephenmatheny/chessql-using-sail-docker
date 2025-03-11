import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import DefaultContainer from '@/Components/DefaultContainer';

export default function Edit({ auth, mustVerifyEmail, status }) {
    return (
        <MainLayout user={auth.user}>
            <Head title="Profile" />

            {/* Container for the forms */}
            <DefaultContainer>
                {/* Profile Information Form */}
                <div className="bg-white p-4 sm:p-6 md:p-8 shadow sm:rounded-lg w-full max-w-full mx-auto rounded-md">
                    <UpdateProfileInformationForm
                        mustVerifyEmail={mustVerifyEmail}
                        status={status}
                        className="w-full"
                    />
                </div>

                {/* Update Password Form */}
                <div className="bg-white p-4 sm:p-6 md:p-8 shadow sm:rounded-lg w-full max-w-full mx-auto rounded-md">
                    <UpdatePasswordForm className="w-full" />
                </div>

                {/* Delete User Form */}
                <div className="bg-white p-4 sm:p-6 md:p-8 shadow sm:rounded-lg w-full max-w-full mx-auto rounded-md">
                    <DeleteUserForm className="w-full" />
                </div>
            </DefaultContainer>
        </MainLayout>
    );
}
