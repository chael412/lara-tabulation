import { AiOutlinePrinter } from "react-icons/ai";
import useFetchData from "@/hooks/useFetchData";
import { useReactToPrint } from "react-to-print";
import { useRef, useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayoutAdmin";
import { Head, Link } from "@inertiajs/react";
import { Button } from "@/Components/ui/button";
import JudgeSignature from "@/Components/JudgeSignature";
import { ClipLoader } from "react-spinners";

const Index = ({ success }) => {
    const [reload, serReload] = useState(!!success);

    useEffect(() => {
        if (success) {
            window.location.reload();
        }
    }, [success]);

    const { data, isLoading, error } = useFetchData(
        ["prelim_tally"], // Unique query key
        "tally_prelim" // Your API endpoint
    );

    console.log(data);

    const contentRef = useRef();
    const reactToPrintFn = useReactToPrint({ contentRef });

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Tally Preliminary
                </h2>
            }
        >
            <Head title="Preliminary" />
            <div>
                <div className="flex justify-end m-2">
                    <Button onClick={() => reactToPrintFn()}>
                        <AiOutlinePrinter />
                        Print
                    </Button>
                </div>
                {/* <pre>{JSON.stringify(data, undefined, 4)}</pre> */}
                <div ref={contentRef} className="py-2 px-4 bg-white ">
                    <div>
                        <table className="border-collapse border border-black bg-[#ffff99] w-full text-center mb-4">
                            <thead>
                                <tr>
                                    <th
                                        colSpan={12}
                                        className="pt-3 pb-2 text-center text-yellow-200 font-light bg-gray-800 border-b border-black font-lobster"
                                    >
                                        <span className="text-4xl">
                                            Queen San Vicente 2025
                                        </span>
                                        <br />
                                        <br />
                                        <span className="text-2xl ">
                                            Grand Coronation Night
                                        </span>
                                    </th>
                                </tr>
                            </thead>

                            <thead>
                                <tr>
                                    <th
                                        colSpan={12}
                                        className="px-4 pt-4 text-center text-black text-xl font-light bg-white border-b border-black"
                                    >
                                        Preliminary
                                    </th>
                                </tr>
                            </thead>
                            <thead>
                                <tr className="bg-[#ffff99]">
                                    <th className="px-4 py-2 text-sm text-black  font-bold border-b border-black">
                                        Candidate No.
                                    </th>
                                    <th className="px-4 py-2 text-sm text-black  font-bold border-b border-black">
                                        Candidate Name
                                    </th>
                                    <th className="px-4 py-2 text-sm text-black  font-bold border-b border-black">
                                        Total
                                    </th>

                                    <th className="px-4 py-2 text-sm text-black  font-bold border-b border-black">
                                        Rank
                                    </th>
                                    <th className="px-4 py-2 text-sm text-black  font-bold border-b border-black">
                                        Top 5
                                    </th>
                                    <th className="px-4 py-2 text-sm text-black  font-bold border-b border-black">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data?.candidates.map((candidate, index) => (
                                    <tr key={candidate.candidate_id}>
                                        {/* Rank */}
                                        <td className="px-4 py-2 text-sm text-black font-semibold border-b border-black">
                                            {candidate.candidate_number}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-black font-semibold border-b border-black">
                                            {candidate.candidate_name}
                                        </td>

                                        <td className="px-4 py-2 text-sm text-black  font-semibold border-b border-black">
                                            {candidate.overall_avg_score}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-black  font-semibold border-b border-black">
                                            {index + 1}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-black  font-semibold border-b border-black">
                                            {candidate.top_five == "no" ? (
                                                <span className="px-4 py-1 bg-red-500 rounded-xl text-white">
                                                    No
                                                </span>
                                            ) : (
                                                <span className="px-4 py-1 bg-green-500 rounded-xl text-white">
                                                    Yes
                                                </span>
                                            )}
                                        </td>
                                        <th className="px-4 py-2 text-sm text-black font-bold border-b border-black">
                                            {index < 5 && (
                                                <>
                                                    <Link
                                                        href={route(
                                                            "admin.settopfive",
                                                            candidate.candidate_id
                                                        )}
                                                    >
                                                        <Button className="bg-green-600 hover:bg-green-800">
                                                            Set as Top 5
                                                        </Button>
                                                    </Link>
                                                    <Link
                                                        href={route(
                                                            "admin.settono",
                                                            candidate.candidate_id
                                                        )}
                                                        className="m-3"
                                                    >
                                                        <Button className="bg-red-600 hover:bg-red-800">
                                                            Set to No
                                                        </Button>
                                                    </Link>
                                                </>
                                            )}
                                        </th>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
