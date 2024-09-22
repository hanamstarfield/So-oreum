import React from "react";
import LightningImg from "@/assets/Lightning.png";
import MtSpeedMeetCard from "@/components/mtdetail/MtSpeedMeetCard";

const MtSpeedMeetList = ({ list, selectedMntn }) => {
    const filteredSPList = list.filter((sp) => selectedMntn.mntnid === sp.mntnid);

    return (
        <div>
            <div className="flex flex-col justify-center items-start m-[auto] w-[1200px] text-justify my-[50px]">
                <div className="flex items-center mb-[20px]">
                    <img src={LightningImg} alt="LightningImg" className="w-[30px] h-[30px] object-cover" />
                    <h3 className="text-[22px]">
                        <strong>벙개 목록</strong>
                    </h3>
                </div>

                <MtSpeedMeetCard filteredSPList={filteredSPList} />
            </div>
        </div>
    );
};

export default MtSpeedMeetList;
