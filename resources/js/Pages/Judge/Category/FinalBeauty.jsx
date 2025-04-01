import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";
import CategoryTable from "@/Components/CategoryTable";
import { useForm } from "react-hook-form";
import { useState } from "react";
import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogCancel,
    AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

export default function Page({ scores = {}, candidates }) {
    const contestants = candidates;
    const { register, handleSubmit } = useForm();
    const user = usePage().props.auth.user;

    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [formData, setFormData] = useState(null);

    const handleFormSubmit = (data) => {
        const formattedData = {
            ...data,
            category_id: 10,
            user_id: user.id,
            percentage: 40,
        };

        setFormData(formattedData); // Store form data
        setIsDialogOpen(true); // Open confirmation dialog
    };

    const confirmSubmit = async () => {
        if (!formData) return;

        try {
            const response = await axios.post(
                "http://localhost:8000/api/storefinalscores",
                formData
            );

            console.log("Server Response:", response.data);
            toast("Score has been submitted successfully!");
            window.location.reload();
        } catch (error) {
            console.error(
                "Error submitting data:",
                error.response?.data || error.message
            );
            alert("Failed to submit data.");
        } finally {
            setIsDialogOpen(false);
        }
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
            <div className="flex justify-center items-center my-16 px-6">
                <div className="p-10 bg-gray-100 rounded-xl border border-gray-600 shadow-lg w-full max-w-4xl text-center">
                    <p className="text-3xl font-semibold mb-6">
                        Final Beauty 40%
                    </p>
                    <form onSubmit={handleSubmit(handleFormSubmit)}>
                        <CategoryTable
                            contestants={contestants}
                            register={register}
                            candidate_scores={scores}
                        />
                    </form>
                </div>
            </div>
            <Toaster />
            <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <AlertDialogContent className="max-w-2xl p-6">
                    {" "}
                    {/* Increased width & padding */}
                    <AlertDialogHeader>
                        <AlertDialogTitle className="text-2xl font-bold">
                            Confirm Submission
                        </AlertDialogTitle>{" "}
                        {/* Larger title */}
                        <AlertDialogDescription className="text-lg">
                            <p className="mb-4">
                                Are you sure you want to submit these scores?
                            </p>
                            <ul className="mt-2 text-left text-lg text-gray-800 space-y-2">
                                {" "}
                                {/* Increased text size & spacing */}
                                {formData &&
                                    Object.entries(formData)
                                        .slice(0, -3) // Remove the last two values
                                        .map(([key, value]) => (
                                            <li
                                                key={key}
                                                className="border-b pb-2"
                                            >
                                                <strong className="capitalize text-xl">
                                                    Candidate No.{" "}
                                                    {parseInt(
                                                        key.split("-").pop()
                                                    ) + 1}
                                                    :
                                                </strong>
                                                <span className="ml-5 font-semibold text-2xl">
                                                    {value}
                                                </span>
                                            </li>
                                        ))}
                            </ul>
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter className="mt-6">
                        <AlertDialogCancel
                            onClick={() => setIsDialogOpen(false)}
                            className="px-6 py-2 text-lg"
                        >
                            Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction
                            onClick={confirmSubmit}
                            className="px-6 py-2 text-lg bg-blue-600 hover:bg-blue-700 text-white"
                        >
                            Confirm
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </AuthenticatedLayout>
    );
}
