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
            <div className="flex justify-center items-center">
                <h2 className="h-screen flex flex-col text-center text-[82px] font-light font-lobster mt-10">
                    <span>Philippine Information</span>
                    <span>Technology of the North</span>
                    <span>PiTON </span>
                </h2>
            </div>
        </AuthenticatedLayout>
    );
};

export default Dashboard;
