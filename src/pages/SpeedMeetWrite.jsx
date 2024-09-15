import SearchBox from "@/components/SearchBox";
import useSpeedMeetWrite from "@/hooks/useSpeedMeetWrite";
import { useState } from "react";
import useCreateSpeedMeetMutation from "@/mutations/useCreateSpeedMeetMutation";
import useUserStore from "@/zustand/useUserStore";
import { getToday } from "@/utils/common";

const SpeedMeetWrite = () => {
    const {
        formState,
        selectedMountain,
        handleMountainChange,
        searchBoxVisible,
        mountainSearchResult,
        handleChange,
        handleMountainNameBlur,
        handleSetMountain
    } = useSpeedMeetWrite();

    const { user } = useUserStore((state) => state);
    const mutation = useCreateSpeedMeetMutation();

    const today = getToday();

    const handleWrite = () => {
        mutation.mutate({ ...formState, userId: user.userId });
    };

    return (
        <div className="flex bg-[#214A00] w-[100%] h-svh items-center m-0">
            <div className="w-[1200px] h-[500px] mx-auto flex flex-col justify-center items-start gap-4 bg-white">
                <input type="text" name="title" value={formState.title} onChange={handleChange} placeholder="제목" />

                <div className="relative">
                    {/* <input
                        type="text"
                        name="date"
                        value={""}
                        onChange={handleChange}
                        placeholder="일정"
                        onFocus={() => setShowCalendar(true)}
                        onBlur={() => setShowCalendar(false)}
                    /> */}
                    <input type="date" name="date" min={today} value={formState.date} onChange={handleChange} />
                </div>
                <div className="flex relative">
                    <input
                        type="text"
                        name="mountainName"
                        value={formState.mountainName}
                        placeholder="산"
                        onChange={handleMountainChange}
                        onBlur={handleMountainNameBlur}
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
                    placeholder="내용"
                />
                <input
                    type="text"
                    name="chatLink"
                    value={formState.chatLink}
                    onChange={handleChange}
                    placeholder="오픈카톡 링크"
                />
                {/* TODO 글 작성 진행중 */}
                <button className="bg-slate-500 rounded-sm" onClick={handleWrite}>
                    작성
                </button>
            </div>
        </div>
    );
};

export default SpeedMeetWrite;
