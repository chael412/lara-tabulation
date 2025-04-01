import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const CategoryTable = ({
    contestants,
    register = () => {},
    candidate_scores = {},
}) => {
    const candidateScores = {};
    candidate_scores.forEach((item, index) => {
        candidateScores[`score-${index}`] = item.raw_score;
    });

    return (
        <div className="rounded-xl bg-white shadow-lg p-6">
            <table className="w-full">
                <thead>
                    <tr className="bg-gray-800 text-white">
                        <th className="p-4 text-left rounded-tl-xl">
                            Candidate Number
                        </th>
                        <th className="p-4 text-left rounded-tr-xl">
                            Score / 100
                        </th>
                        <th className="p-4 text-left rounded-tr-xl"></th>
                    </tr>
                </thead>
                <tbody>
                    {contestants.map((contestant, index) => (
                        <tr
                            key={index}
                            className="hover:bg-gray-50 transition-colors border-b-2 border-gray-100"
                        >
                            <td className="p-4 font-medium text-gray-700 text-left">
                                Candidate No.{" "}
                                <span className="text-xl"> {contestant}</span>
                            </td>
                            <td className="p-4" colSpan={2}>
                                <Input
                                    {...register(`score-${index}`)}
                                    type="number"
                                    name={`score-${index}`}
                                    placeholder="0"
                                    className="max-w-[200px] text-lg py-5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    min="0"
                                    max="100"
                                    defaultValue={
                                        candidateScores[`score-${index}`] || 0
                                    }
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {Object.keys(candidateScores).length === 0 && (
                <div className="mt-6 flex items-center justify-center">
                    <Button
                        type="submit"
                        className="py-6 w-96 text-lg bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm"
                    >
                        Submit Scores
                    </Button>
                </div>
            )}
        </div>
    );
};

export default CategoryTable;
