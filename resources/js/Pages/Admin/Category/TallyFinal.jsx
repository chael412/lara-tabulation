import { AiOutlinePrinter } from "react-icons/ai";
import useFetchData from "@/hooks/useFetchData";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayoutAdmin";
import { Head } from "@inertiajs/react";
import { Button } from "@/Components/ui/button";
import JudgeSignature from "@/Components/JudgeSignature";
import { ClipLoader } from "react-spinners";

const TallyFinal = () => {
    const { data, isLoading, error } = useFetchData(
        ["final_tally"], // Unique query key
        "tally_final" // Your API endpoint
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
                <div ref={contentRef} className="py-2 px-4 bg-white ">
                    <div>
                        <table className="border-collapse border border-black bg-[#ffff99] w-full text-center">
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

                                    {/* Empty cells to align correctly */}
                                    {Object.values(
                                        data?.candidates[0]
                                            ?.scores_by_category || {}
                                    ).map((category, index) => (
                                        <th
                                            key={index}
                                            className="px-4 py-2 text-sm text-black  font-bold border-b border-black"
                                        >
                                            {category.category_name}
                                        </th>
                                    ))}
                                    <th className="px-4 py-2 text-sm text-black  font-bold border-b border-black">
                                        Total
                                    </th>

                                    <th className="px-4 py-2 text-sm text-black  font-bold border-b border-black">
                                        Rank
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

                                        {/* Dynamically render scores in Score Per Category */}
                                        {Object.values(
                                            candidate.scores_by_category
                                        ).map((category, i) => (
                                            <td
                                                key={i}
                                                className="px-4 py-2 text-sm text-black  font-semibold border-b border-black"
                                            >
                                                {candidate.avg_score}
                                            </td>
                                        ))}

                                        <td className="px-4 py-2 text-sm text-black  font-semibold border-b border-black">
                                            {candidate.final_score.toFixed(2)}%
                                        </td>
                                        <td className="px-4 py-2 text-sm text-black  font-semibold border-b border-black">
                                            {index + 1}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-16">
                        <JudgeSignature />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default TallyFinal;
