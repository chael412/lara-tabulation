import useFetchData from "@/hooks/useFetchData";
import React from "react";

const ProductionNumber = () => {
    const { data, error, isLoading } = useFetchData(
        ["candidates"],
        "attire_ranking1"
    );

    console.log(data);

    // Extract unique judge names
    const judgeEntries = data?.candidates?.[0]?.scores_per_judge
        ? Object.entries(data.candidates[0].scores_per_judge)
        : [];

    const sortedJudges = judgeEntries
        .map(([id, judgeData]) => ({ id, name: judgeData.judge_name }))
        .sort((a, b) => a.id - b.id);

    return (
        <div className="p-8 bg-white rounded-xl shadow-sm">
            <div className="overflow-x-auto rounded-sm border border-gray-200">
                <table className="min-w-[800px] w-full bg-[#ffff99]">
                    <thead>
                        <tr>
                            <th
                                colSpan={12}
                                className=" px-4 pt-4 text-center text-yellow-200 font-light bg-gray-800 border-b border-black font-lobster"
                            >
                                <span className="text-6xl ">
                                    Queen San Vicente 2025{" "}
                                </span>
                                <br />
                                <br />
                                <span className="text-5xl ">
                                    Grand Coronation Night
                                </span>
                            </th>
                        </tr>
                    </thead>

                    <thead>
                        <tr>
                            <th
                                colSpan={12}
                                className="px-4 pt-4 text-center text-black text-3xl font-light bg-white border-b border-black"
                            >
                                Production Number 10%
                            </th>
                        </tr>
                    </thead>

                    <thead>
                        <tr>
                            <th className="w-[12%] bg-[#ffff99] px-4 pt-8 text-left  text-black font-semibold border-b border-black">
                                Candidate No.
                            </th>
                            {sortedJudges.map((judge) => (
                                <th
                                    key={judge.id}
                                    className=" bg-[#ffff99] px-4 pt-8 text-left  text-black font-semibold border-b border-black"
                                >
                                    {judge.name}
                                </th>
                            ))}
                            <th className="bg-[#ffff99] px-4 pt-8 text-left  text-black font-semibold border-b border-black">
                                Total
                            </th>
                            <th className="bg-[#ffff99] px-4 pt-8 text-left  text-black font-semibold border-b border-black">
                                Average
                            </th>
                            <th className="bg-[#ffff99] px-4 pt-8 text-left  text-black font-semibold border-b border-black">
                                Rank
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.candidates?.map((candidate) => (
                            <tr
                                key={candidate.candidate_id}
                                className=" border-b border-black"
                            >
                                <td className="px-4 py-3 text-gray-800 font-medium">
                                    {candidate.candidate_number}
                                </td>
                                {sortedJudges.map((judge) => {
                                    const score =
                                        candidate.scores_per_judge[judge.id]
                                            ?.scores?.[0];
                                    return (
                                        <td
                                            key={judge.id}
                                            className="px-4 py-2 text-black"
                                        >
                                            {score ?? "-"}
                                        </td>
                                    );
                                })}
                                <td className="px-4 py-2 text-black font-medium">
                                    {candidate.total_score}
                                </td>
                                <td className="px-4 py-2 text-black font-medium">
                                    {Number(candidate.average_score).toFixed(2)}
                                </td>
                                <td className="px-4 py-2 text-black text-md font-semibold">
                                    {candidate.rank}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductionNumber;
