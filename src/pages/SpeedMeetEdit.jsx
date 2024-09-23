import useSpeedMeetWrite from "@/hooks/useSpeedMeetWrite";
import useCreateSpeedMeetMutation from "@/mutations/useCreateSpeedMeetMutation";
import useUserStore from "@/zustand/useUserStore";
import { getToday } from "@/utils/common";
import { useNavigate, useParams } from "react-router-dom";
import { showToast } from "@/toast/showToast";
import useGetSpeedMeetByIdQuery from "@/queries/useGetSpeedMeetByIdQuery";
import { useEffect, useState } from "react";
import useGetMountainQuery from "@/queries/useGetMountainQuery";
import usePatchSpeedMeetMutation from "@/mutations/usePatchSpeedMeetMutation";
import "../css/dlatl.css";

const SpeedMeetEdit = () => {
    // TODO 여기부터 하면됨 Detail 값 받아와서 뭐 알아서 해보셈
    const { id } = useParams();
    const { user } = useUserStore((state) => state);
    const [selectedMountain, setSelectedMountain] = useState(null);
    const [searchBoxVisible, setSearchBoxVisible] = useState(false);
    const [mountainSearchResult, setMountainSearchResult] = useState(null);
    const { data: speedMeet, isPending: isSpeedMeetPending } = useGetSpeedMeetByIdQuery(id);
    const [formState, setFormState] = useState({
        title: "",
        date: "",
        mntnid: "",
        mntnnm: "",
        capacity: "",
        content: "",
        chatLink: "",
        attendance: 0
    });

    useEffect(() => {
        setFormState((prev) => {
            return {
                title: speedMeet?.title,
                date: speedMeet?.date,
                mntnid: speedMeet?.mntnid,
                mntnnm: speedMeet?.mntnnm,
                capacity: speedMeet?.capacity,
                content: speedMeet?.content,
                chatLink: speedMeet?.chatLink,
                attendance: speedMeet?.attendance
            };
        });
    }, [speedMeet]);
    const { data: mountains = [], isMountainsPending } = useGetMountainQuery();

    console.log("speedMeet", speedMeet);

    const mutation = usePatchSpeedMeetMutation();
    const navigate = useNavigate();

    const today = getToday();
    const handleMountainChange = (e) => {
        const mntnnm = e.target.value;
        setFormState((prev) => {
            return {
                ...prev,
                mntnnm
            };
        });
        if (mountains.length > 0) {
            const result = mountains.filter((mountain) => mountain.mntnnm.includes(mntnnm));
            setMountainSearchResult(result);

            const condition = !!mntnnm;
            setSearchBoxVisible(condition);
            setSelectedMountain(null);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState((prev) => {
            return {
                ...prev,
                [name]: value
            };
        });
    };

    const handleSetMountain = (mountain) => {
        console.log("mountain", mountain);
        setFormState((prev) => {
            return {
                ...prev,
                mntnnm: mountain.mntnnm,
                mntnid: mountain.mntnid
            };
        });

        setSelectedMountain(mountain);
        setSearchBoxVisible(false);
    };

    const handleMountainNameBlur = () => {
        if (!searchBoxVisible) {
            return;
        }

        setFormState((prev) => {
            setSelectedMountain(mountainSearchResult[0]);
            setSearchBoxVisible(false);

            return {
                ...prev,
                mntnnm: mountainSearchResult[0].mntnnm,
                mntnid: mountainSearchResult[0].mntnid
            };
        });
    };

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

        mutation.mutate({ id, ...formState });
        navigate("/speed-meet/1");
    };

    let test = true;

    console.log("formState", formState);

    return (
        <div className="flex flex-col bg-[#214A00] w-[100%] h-[90vh] justify-center items-center m-0">
            <h1 className="text-white text-[30px] pb-10">글 수정</h1>
            <div className="w-[1200px] h-[620px] relative mx-auto flex flex-col justify-center items-start gap-4 bg-white p-20 rounded-[20px]">
                <input
                    className="inputSpeedTitle"
                    type="text"
                    name="title"
                    value={formState.title}
                    onChange={handleChange}
                    placeholder="제목"
                />
                <div className="flex">
                    <div className="relative">
                        <input
                            className="inputSpeedMt"
                            type="date"
                            name="date"
                            min={today}
                            value={formState.date}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex relative">
                        <input
                            className="inputSpeedMt"
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
                            <ul className="absolute bg-white border rounded mt-1 w-[200px] max-h-[150px] overflow-y-auto top-full left-0 z-10">
                                {mountainSearchResult.map((item) => {
                                    return (
                                        <li
                                            key={item.id}
                                            className="px-3 py-2 cursor-pointer hover:bg-gray-200"
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
                        className="inputSpeedMt"
                        type="number"
                        name="capacity"
                        value={formState.capacity}
                        onChange={handleChange}
                        placeholder="정원"
                    />
                    <input
                        className="inputSpeedLink"
                        type="text"
                        name="chatLink"
                        value={formState.chatLink}
                        onChange={handleChange}
                        placeholder="오픈카톡 링크"
                    />
                </div>
                <textarea
                    className="textareaWrite h-[300px]"
                    type="text"
                    name="content"
                    value={formState.content}
                    onChange={handleChange}
                    placeholder="내용"
                />

                {/* TODO 글 작성 진행중 */}
                <button
                    className="bg-[#588157] py-[5px] px-[15px] text-[20px] mt-[10px] rounded-[7px] text-white flex absolute bottom-[10%] right-[7%]"
                    onClick={handleWrite}
                >
                    작성
                </button>
            </div>
        </div>
    );
};

export default SpeedMeetEdit;
