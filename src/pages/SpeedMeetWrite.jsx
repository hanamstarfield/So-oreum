import useSpeedMeetWrite from "@/hooks/useSpeedMeetWrite";
import useCreateSpeedMeetMutation from "@/mutations/useCreateSpeedMeetMutation";
import useUserStore from "@/zustand/useUserStore";
import { getToday } from "@/utils/common";
import { useNavigate } from "react-router-dom";
import { showToast } from "@/toast/showToast";

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
    const navigate = useNavigate();

    const today = getToday();

    const handleWrite = () => {
        const { title, date, mntnid, mntnnm, capacity, content, chatLink } = formState;
        const toast = {
            time: 3000,
            theme: "warning"
        };

        // 유효성 검사
        if (!title) {
            showToast({ ...toast, message: "제목을 입력해주세요." });
            return;
        }
        if (!date) {
            showToast({ ...toast, message: "날짜를 입력해주세요." });
            return;
        }
        if (!mntnid || !mntnnm) {
            showToast({ ...toast, message: "산 정보를 입력해주세요." });
            return;
        }
        if (!capacity) {
            showToast({ ...toast, message: "인원 수를 정확하게 입력해주세요." });
            return;
        }
        if (!content) {
            showToast({ ...toast, message: "내용을 입력해주세요." });
            return;
        }
        if (!chatLink) {
            showToast({ ...toast, message: "채팅 링크를 입력해주세요." });
            return;
        }

        mutation.mutate({ ...formState, userId: user.userId });
        navigate("/speed-meet/1");
    };

    let test = true;

    console.log("formState", formState);

    return (
        <div className="flex bg-[#214A00] w-[100%] h-svh items-center m-0">
            <div className="w-[1200px] h-[500px] mx-auto flex flex-col justify-center items-start gap-4 bg-white ">
                <input type="text" name="title" value={formState.title} onChange={handleChange} placeholder="제목" />
                <div className="relative">
                    <input type="date" name="date" min={today} value={formState.date} onChange={handleChange} />
                </div>
                <div className="flex relative">
                    <input
                        type="text"
                        name="mountainName"
                        value={formState.mntnnm}
                        placeholder="산"
                        onChange={handleMountainChange}
                        onBlur={() => {
                            if (test) {
                                handleMountainNameBlur();
                            }
                        }}
                        onFocus={() => {
                            test = true;
                        }}
                    />
                    {searchBoxVisible && !selectedMountain && (
                        <ul className="absolute top-0 left-52 bg-slate-300 w-[150px]">
                            {mountainSearchResult.map((item) => {
                                return (
                                    <li
                                        key={item.id}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleSetMountain(item);
                                        }}
                                        onMouseEnter={() => {
                                            test = false;
                                        }}
                                        onMouseLeave={() => {
                                            test = true;
                                        }}
                                    >
                                        {item.mntnnm}
                                    </li>
                                );
                            })}
                        </ul>
                        // <SearchBox
                        //     list={mountainSearchResult}
                        //     handleSetMountain={handleSetMountain}
                        //     handleHover={handleTest}
                        // />
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
