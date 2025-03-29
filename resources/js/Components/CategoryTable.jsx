import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const CategoryTable = ({ contestants, register = () => {} }) => {
    return (
        <div>
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-gray-300">
                        <th className="p-4 text-xl font">Candidate Number</th>
                        <th className="p-4 text-xl">Score / 100</th>
                    </tr>
                </thead>
                <tbody>
                    {contestants.map((contestant, index) => (
                        <tr key={index} className="border-b border-gray-400">
                            <td className="p-4 text-2xl font-semibold">
                                Contestant No. {contestant}
                            </td>
                            <td className="px-4 py-6">
                                <Input
                                    {...register(`score-${index}`)}
                                    type="number"
                                    name={`score-${index}`}
                                    placeholder="Enter score"
                                    className="text-2xl w-full text-center"
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="mt-3 space-x-4">
                <Button
                    type="submit"
                    className="p-6 text-2xl bg-green-600 hover:bg-green-800"
                >
                    Submit
                </Button>
            </div>
        </div>
    );
};

export default CategoryTable;
