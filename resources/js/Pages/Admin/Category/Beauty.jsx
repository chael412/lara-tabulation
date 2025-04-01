import { AiOutlinePrinter } from "react-icons/ai";
import useFetchData from "@/hooks/useFetchData";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayoutAdmin";
import { Head } from "@inertiajs/react";
import { Button } from "@/Components/ui/button";
import JudgeSignature from "@/Components/JudgeSignature";
import { ClipLoader } from "react-spinners";

const CasualWear = () => {
    const { data, error, isLoading } = useFetchData(
        ["candidatec9"],
        "beauty_ranking"
    );

    console.log(data);

    // Extract unique judge names
    const judgeEntries = data?.candidates?.[0]?.scores_per_judge
        ? Object.entries(data.candidates[0].scores_per_judge)
        : [];

    const sortedJudges = judgeEntries
        .map(([id, judgeData]) => ({ id, name: judgeData.judge_name }))
        .sort((a, b) => a.id - b.id);

    const contentRef = useRef();
    const reactToPrintFn = useReactToPrint({ contentRef });

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Beauty
                </h2>
            }
        >
            <Head title="Beauty" />
            <div>
                <div className="flex justify-end m-2">
                    <Button onClick={() => reactToPrintFn()}>
                        <AiOutlinePrinter />
                        Print
                    </Button>
                </div>
                <div ref={contentRef} className="py-2 px-4 bg-white ">
                    <div className="overflow-x-auto rounded-sm border border-black">
                        <table className="min-w-[800px] w-full bg-[#ffff99]">
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
                                        Beauty 5%
                                    </th>
                                </tr>
                            </thead>

                            <thead>
                                <tr>
                                    <th className="text-nowrap w-[10%] bg-[#ffff99] px-4 pt-6  text-left  text-black text-custom-sm font-bold border-b border-black">
                                        Candidate No.
                                    </th>
                                    {sortedJudges.map((judge) => (
                                        <th
                                            key={judge.id}
                                            className=" text-nowrap bg-[#ffff99] px-4 pt-6 text-left  text-black text-custom-sm font-bold  border-b border-black"
                                        >
                                            {judge.name}
                                        </th>
                                    ))}
                                    <th className="text-nowrap bg-[#ffff99] px-4 pt-6 text-left  text-black text-custom-sm font-bold  border-b border-black">
                                        Total
                                    </th>
                                    <th className="text-nowrap bg-[#ffff99] px-4 pt-6 text-left  text-black text-custom-sm font-bold  border-b border-black">
                                        Average
                                    </th>
                                    <th className="text-nowrap bg-[#ffff99] px-4 pt-6 text-left  text-black text-custom-sm font-bold  border-b border-black">
                                        Rank
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {isLoading && (
                                    <tr>
                                        <td
                                            colSpan={11}
                                            className="text-center py-4"
                                        >
                                            <ClipLoader />
                                            <p>Fetching data...</p>
                                        </td>
                                    </tr>
                                )}

                                {data?.candidates?.map((candidate) => (
                                    <tr
                                        key={candidate.candidate_id}
                                        className="border-b border-black last:border-b-0"
                                    >
                                        <td className="px-4 py-2 text-black text-custom-sm font-medium">
                                            {candidate.candidate_number}
                                        </td>
                                        {sortedJudges.map((judge) => {
                                            const score =
                                                candidate.scores_per_judge[
                                                    judge.id
                                                ]?.scores?.[0];
                                            return (
                                                <td
                                                    key={judge.id}
                                                    className="px-4 py-2 text-black text-custom-sm font-medium"
                                                >
                                                    {score !== null &&
                                                    score !== undefined
                                                        ? score.toFixed(2)
                                                        : "-"}
                                                </td>
                                            );
                                        })}
                                        <td className="px-4 py-2 text-black text-custom-sm font-medium">
                                            {candidate.total_score.toFixed(2)}
                                        </td>
                                        <td className="px-4 py-2 text-black text-custom-sm font-medium">
                                            {Number(
                                                candidate.average_score
                                            ).toFixed(2)}
                                        </td>
                                        <td className="px-4 py-2 text-black text-md font-semibold">
                                            {candidate.rank}
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

export default CasualWear;
