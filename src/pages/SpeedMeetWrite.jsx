import meetApi from "@/api/meet";
import SearchBox from "@/components/SearchBox";
import { useQuery } from "@tanstack/react-query";
import React, { useCallback, useEffect, useState } from "react";

const SpeedMeetWrite = () => {
    const [mountainInput, setMountainInput] = useState("");
    const [searchBoxVisible, setSearchBoxVisible] = useState(false);
    const [mountainSearchResult, setMountainSearchResult] = useState([]);

    const { data: mountains = [], isPending } = useQuery({
        queryKey: "dummy-mountain",
        queryFn: () => meetApi.getDummyMountain()
    });

    useEffect(() => {
        if (mountains.length > 0) {
            const result = mountains.filter((mountain) => mountain.mntnnm.includes(mountainInput));
            setMountainSearchResult(result);

            const condition = !!mountainInput;

            setSearchBoxVisible(condition);

            console.log("result", result);
        }
    }, [mountainInput]);

    const handleMountainInput = (e) => {
        setMountainInput(e.target.value);
    };

    return (
        <div className="flex bg-[#214A00] w-[100%] h-svh items-center">
            <div className="w-[1200px] h-[500px] mx-auto flex flex-col justify-center items-start gap-4 bg-white">
                <input type="text" value={""} placeholder="제목" />
                <input type="text" value={""} placeholder="일정" />
                <div className="flex">
                    <input type="text" value={mountainInput} placeholder="산" onChange={handleMountainInput} />
                    {searchBoxVisible && <SearchBox />}
                </div>
                <input type="number" value={""} placeholder="인원수" />
                <input type="text" value={""} placeholder="소개" />
                <input type="text" value={""} placeholder="오픈카톡 링크" />
            </div>
        </div>
    );
};

export default SpeedMeetWrite;
