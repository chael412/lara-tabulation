import React from "react";

const JudgeSignature = () => {
    return (
        <>
            {/* First Row - 4 Signature Lines */}
            <div className="grid grid-cols-4 gap-6 mb-10">
                {[...Array(4)].map((_, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className="w-48 border-t border-black"></div>
                        <p className="text-sm mt-1">Judge{index + 1}</p>
                    </div>
                ))}
            </div>

            {/* Second Row - 3 Signature Lines */}
            <div className="grid grid-cols-3 gap-6">
                {[...Array(3)].map((_, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className="w-48 border-t border-black"></div>
                        <p className="text-sm mt-1">Judge{index + 5}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default JudgeSignature;
