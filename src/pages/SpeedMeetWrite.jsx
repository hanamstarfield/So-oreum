import meetApi from "@/api/meet";
import SearchBox from "@/components/SearchBox";
import { useQuery } from "@tanstack/react-query";
import React, { useCallback, useEffect, useState } from "react";
import ReactCalendar from "@/components/ReactCalendar";

const SpeedMeetWrite = () => {
    const [formState, setFormState] = useState({
        title: "",
        date: "",
        mountainName: "",
        capacity: "",
        content: "",
        chatLink: ""
    });
    const [selectedMountain, setSelectedMountain] = useState(null);

    const [searchBoxVisible, setSearchBoxVisible] = useState(false);
    const [mountainSearchResult, setMountainSearchResult] = useState([]);

    const { data: mountains = [], isPending } = useQuery({
        queryKey: "dummy-mountain",
        queryFn: () => meetApi.getDummyMountain()
    });

    useEffect(() => {
        if (mountains.length > 0) {
            const result = mountains.filter((mountain) => mountain.mntnnm.includes(formState.mountainName));
            setMountainSearchResult(result);

            const condition = !!formState.mountainName;

            setSearchBoxVisible(condition);
        }
    }, [formState.mountainName]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState((prev) => {
            return {
                ...prev,
                [name]: value
            };
        });

        if (name === "mountainName") {
            setSelectedMountain(null);
        }
    };

    const handleSetMountain = (mountain) => {
        setFormState((prev) => {
            return {
                ...prev,
                mountainName: mountain.mntnnm
            };
        });

        setSelectedMountain(mountain);
        setSearchBoxVisible(false);
        console.log("mountain", mountain);
    };

    console.log("setFormState", formState);

    return (
        <div className="flex bg-[#214A00] w-[100%] h-svh items-center m-0">
            <div className="w-[1200px] h-[500px] mx-auto flex flex-col justify-center items-start gap-4 bg-white">
                <input type="text" name="title" value={formState.title} onChange={handleChange} placeholder="제목" />
                <input type="text" name="date" value={""} onChange={handleChange} placeholder="일정" />
                {/* <ReactCalendar></ReactCalendar> */}
                <div className="flex relative">
                    <input
                        type="text"
                        name="mountainName"
                        value={formState.mountainName}
                        placeholder="산"
                        onChange={handleChange}
                    />
                    {searchBoxVisible && !selectedMountain && (
                        <SearchBox list={mountainSearchResult} handleSetMountain={handleSetMountain} />
                    )}
                </div>
                <input
                    type="number"
                    name="capacity"
                    value={formState.capacity}
                    onChange={handleChange}
                    placeholder="정원"
                />
                <input
                    type="text"
                    name="content"
                    value={formState.content}
                    onChange={handleChange}
                    placeholder="소개"
                />
                <input
                    type="text"
                    name="chatLink"
                    value={formState.chatLink}
                    onChange={handleChange}
                    placeholder="오픈카톡 링크"
                />
            </div>
        </div>
    );
};

export default SpeedMeetWrite;
