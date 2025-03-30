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
            <h2 className="text-2xl text-gray-800 mb-6 font-semibold">
                Production Number Scores
            </h2>
            <div className="overflow-x-auto rounded-md border border-gray-200">
                <table className="min-w-[800px] w-full bg-[#ffff99]">
                    <thead>
                        <tr>
                            <th className="bg-[#ffff99] px-4 py-10 text-left text-black font-semibold border-b-2 border-gray-200">
                                Candidate
                            </th>
                            {sortedJudges.map((judge) => (
                                <th
                                    key={judge.id}
                                    className="bg-[#ffff99] px-4 py-10 text-left text-black font-semibold border-b-2 border-gray-200"
                                >
                                    {judge.name}
                                </th>
                            ))}
                            <th className="bg-[#ffff99] px-4 py-10 text-left text-black font-semibold border-b-2 border-gray-200">
                                Total
                            </th>
                            <th className="bg-[#ffff99] px-4 py-10 text-left text-black font-semibold border-b-2 border-gray-200">
                                Average
                            </th>
                            <th className="bg-[#ffff99] px-4 py-10 text-left text-black font-semibold border-b-2 border-gray-200">
                                Rank
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {data?.candidates?.map((candidate) => (
                            <tr
                                key={candidate.candidate_id}
                                className="hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100"
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
                                <td className="px-4 py-2 text-gray-800 font-semibold">
                                    {candidate.total_score}
                                </td>
                                <td className="px-4 py-2 text-green-500 font-medium">
                                    {Number(candidate.average_score).toFixed(2)}
                                </td>
                                <td className="px-4 py-2 text-blue-700 text-md font-medium">
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
