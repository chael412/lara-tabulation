import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import CategoryTable from "@/Components/CategoryTable";
import { useForm } from "react-hook-form";

export default function Page() {
    const contestants = [1, 2, 3, 4, 5, 6, 7];
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        data["category_id"] = 2;
        console.log("Submitted Data:", data);
    };
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Queen San Vicente 2025 Grand Coronation Night
                </h2>
            }
        >
            <Head title="Dashboard" />
            <div className="flex justify-center items-center mt-20 px-6">
                <div className="p-10 bg-gray-100 rounded-xl border border-gray-600 shadow-lg w-full max-w-4xl text-center">
                    <p className="text-3xl font-semibold mb-6">Talent 15%</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <CategoryTable
                            contestants={contestants}
                            register={register}
                        />
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
