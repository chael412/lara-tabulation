import { AiFillAndroid } from "react-icons/ai";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
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
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Production Number
                </h2>
            }
        >
            <Head title="Dashboard" />
            <div>THis is production number</div>
        </AuthenticatedLayout>
    );
}
