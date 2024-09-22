import React from "react";

const MtInfoBottom = ({ selectedMntn }) => {
    return (
        <div>
            <div className="flex flex-col justify-center items-start m-[auto] w-[1200px] text-justify my-[50px] gap-[50px] leading-loose">
                <p className="text-[22px]">
                    <strong>개관</strong>
                    <br />
                    {selectedMntn.mntninfodscrt}
                </p>
                <p className="text-[22px]">
                    <strong>상세정보</strong>
                    <br />
                    {selectedMntn.mntninfodtlinfocont}
                </p>
            </div>
        </div>
    );
};

export default MtInfoBottom;
