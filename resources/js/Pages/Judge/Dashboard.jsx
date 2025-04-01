import AuthenticatedLayout from "@/Layouts/AuthenticatedLayoutAdmin";
import { Head } from "@inertiajs/react";
import React from "react";

const Dashboard = () => {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />
        </AuthenticatedLayout>
    );
};

export default Dashboard;
