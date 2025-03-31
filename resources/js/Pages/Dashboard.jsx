import { AiFillAndroid } from "react-icons/ai";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

export default function Page() {
    const user = usePage().props.auth.user;

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
}
