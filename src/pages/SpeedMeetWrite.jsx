import SearchBox from "@/components/SearchBox";
import { useQuery } from "@tanstack/react-query";
import ReactCalendar from "@/components/ReactCalendar";
import useSpeedMeetWrite from "@/hooks/useSpeedMeetWrite";
import { useEffect, useRef } from "react";

const SpeedMeetWrite = () => {
    const mountainInputRef = useRef();
    const { formState, selectedMountain, searchBoxVisible, mountainSearchResult, handleChange, handleSetMountain } =
        useSpeedMeetWrite(mountainInputRef);

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
                        ref={mountainInputRef}
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
