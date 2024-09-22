import React from "react";
import SpCardDefaultImg from "@/assets/SpCardDefault.png";
import { useNavigate } from "react-router-dom";

const MtSpeedMeetCard = ({ filteredSPList }) => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-wrap justify-start gap-[23px] mb-[100px]">
            {filteredSPList.length > 0 ? (
                filteredSPList.map((sp) => (
                    <div
                        className="flex flex-col justify-between w-[280px] h-[200px] rounded-[20px] p-4 bg-white shadow-lg transition-all duration-200 hover:scale-105 brightness-100  hover:brightness-90 mt-[30px] cursor-pointer"
                        key={sp.id}
                        onClick={() => navigate(`/speed-meet-detail/${sp.id}`)}
                    >
                        <div className="flex justify-between items-center mb-2">
                            <p className="text-[16px]">{sp.title}</p>
                            <p className="text-[14px] text-gray-500">
                                {sp.attendance}/{sp.capacity}
                            </p>
                        </div>

                        <img
                            src={SpCardDefaultImg}
                            className="flex m-auto w-[100px] h-[130px] object-cover rounded-[15px]"
                            alt={sp.title}
                        />
                        <div className="flex justify-end mt-2">
                            <p className="text-[14px] text-gray-500">{sp.date}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-[22px]">해당 산의 벙개 게시글이 없습니다.</p>
            )}
        </div>
    );
};

export default MtSpeedMeetCard;
