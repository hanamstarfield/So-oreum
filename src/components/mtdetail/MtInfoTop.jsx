import React from "react";
import CowImg from "@/assets/Cow.png";

const MtInfoTop = ({ selectedMntn, showDetails, setShowDetails }) => {
    return (
        <div key={selectedMntn.mntnid}>
            <div className="flex relative flex-col bg-[#214A00] min-w-[1200px] w-[100%]">
                <div className="flex flex-col justify-start items-center h-[561px] w-[1200px] text-[#ffffff] m-[auto] pt-[30px] gap-[20px]">
                    <h2 className="text-[64px] font-bold">{selectedMntn.mntnnm}</h2>

                    <div className="flex w-[1200px] justify-start gap-[20px]">
                        <div className="flex mt-[30px]">
                            <img
                                className="min-w-[500px] w-[500px] max-h-[300px] h-[300px] object-cover"
                                src={selectedMntn.mntnattchimageseq}
                                alt={selectedMntn.mntnnm}
                            />

                            <div className="flex flex-col justify-end items-center w-[40px] h-[300px] ml-[10px] bg-gray-300 rounded">
                                <p className="text-[13px] text-[#525252]">{selectedMntn.mntninfohght}m</p>
                                <img src={CowImg} className="h-[35px] w-[35px] object-cover" />
                                <div
                                    className="bg-[#bc6c25] w-full rounded-t-lg"
                                    style={{
                                        height: `${(selectedMntn.mntninfohght / 1000) * 100}%`
                                    }}
                                ></div>
                            </div>
                        </div>

                        <div className="flex flex-col justify-end gap-[50px] leading-loose">
                            <p className="text-[19px]">
                                <strong>높이</strong> <br />
                                고도 {selectedMntn.mntninfohght}m
                            </p>
                            <p className="text-[19px] whitespace-pre-line">
                                <strong>소재지</strong>
                                <br />
                                {selectedMntn.mntninfopoflc}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex absolute bottom-[15%] right-[19%] gap-4 text-[#ffffff]">
                    <button
                        onClick={() => setShowDetails(true)}
                        className={`px-4 py-2 rounded-lg transition-all duration-200  ${
                            showDetails
                                ? "bg-[#132a13] hover:bg-[#070f07] shadow-lg"
                                : "bg-[#5c6b73] hover:bg-[#4b575e] shadow-md"
                        }`}
                    >
                        상세 정보
                    </button>
                    <button
                        onClick={() => setShowDetails(false)}
                        className={`px-4 py-2 rounded-lg transition-all duration-200  ${
                            !showDetails
                                ? "bg-[#132a13] hover:bg-[#070f07] shadow-lg"
                                : "bg-[#5c6b73] hover:bg-[#4b575e] shadow-md"
                        }`}
                    >
                        벙개 목록
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MtInfoTop;
