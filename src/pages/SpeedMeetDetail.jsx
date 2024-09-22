import meetApi from "@/api/meet";
import homeImg from "../assets/SpCardDefault.png";
import KakaoMapSpeedMeet from "@/components/KakaoMapSpeedMeet";
import useCreateAttendeeMutation from "@/mutations/useCreateAttendeeMutation";
import useDeleteSpeedMeetMutation from "@/mutations/useDeleteSpeedMeetMutation";
import useGetAttendees from "@/queries/useGetAttendees";
import useGetSpeedMeetAndMountainQuery from "@/queries/useGetSpeedMeetAndMountainQuery";
import { showToast } from "@/toast/showToast";
import handleCopyClipBoard from "@/utils/clipBoard";
import { getUrlMasking } from "@/utils/common";
import useUserStore from "@/zustand/useUserStore";
import { useNavigate, useParams } from "react-router-dom";
import SpeedMeetDetailSkelton from "@/components/SpeedMeetDetailSkelton";

const SpeedMeetDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const { user } = useUserStore((state) => state);
    const mutation = useCreateAttendeeMutation();

    // const { data: result, isPending: speedMeetPending } = useGetSpeedMeetAndMountainQuery(id);
    // TODO enabled: !isPending
    const { data: result, isPending: speedMeetPending } = useGetSpeedMeetAndMountainQuery(id);
    const { data: attendees, isPending: attendeePending } = useGetAttendees(id);
    const deleteMutation = useDeleteSpeedMeetMutation();

    if (speedMeetPending || attendeePending) {
        return <SpeedMeetDetailSkelton />;
    }

    const { speedMeet, mntn } = result;

    const hasBeenAttendee = attendees.some((attendee) => attendee.userId === user.userId);
    const isDeadline = speedMeet.attendance >= speedMeet.capacity;
    const hasWrittenPost = user.userId === speedMeet.userId;
    const showChatLink = hasWrittenPost || hasBeenAttendee;

    const handleEnrollAttendee = () => {
        mutation.mutate({ speedMeetId: id, userId: user.userId });
    };

    const handleUpdate = () => {
        navigate(`/speed-meet-edit/${id}`);
    };

    const handleDelete = () => {
        deleteMutation.mutate(id);
        meetApi.deleteSpeedMeetById(id);
        navigate("/speed-meet/1");
    };

    return (
        <div className="flex flex-col bg-[#214A00] w-[100%] h-[91vh] justify-center items-center m-0">
            <div className="flex flex-col justify-center gap-12 w-[70%] max-w-[1200px] min-w-[950px] bg-white rounded-[20px] mx-auto p-12">
                <section className="flex justify-between border-b-2">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-4xl text-[#214A00]">{speedMeet?.mntnnm}</h1>
                        <h3 className="text-2xl pb-6">{speedMeet?.title}</h3>
                    </div>
                    <div>
                        <div className="text-2xl">
                            {!hasWrittenPost &&
                                (hasBeenAttendee ? (
                                    <button className="bg-slate-600 cursor-default py-[3px] px-[10px] rounded-[7px] mr-[10px] text-white">
                                        신청완료
                                    </button>
                                ) : isDeadline ? (
                                    <button className="bg-[#e56b6f] cursor-default py-[3px] px-[10px] rounded-[7px] mr-[10px] text-white">
                                        신청마감
                                    </button>
                                ) : (
                                    <button
                                        className="bg-[#588157] py-[3px] px-[10px] rounded-[7px] mr-[10px] text-white"
                                        onClick={handleEnrollAttendee}
                                    >
                                        신청하기
                                    </button>
                                ))}
                            {hasWrittenPost && (
                                <>
                                    <button
                                        className="bg-[#ffbe0b] py-[3px] px-[10px] rounded-[7px] mr-[10px] text-white"
                                        onClick={() => {
                                            showToast({
                                                message: "수정?",
                                                position: "top-center",
                                                confirm: (condition) => {
                                                    if (condition) {
                                                        handleUpdate();
                                                    }
                                                },
                                                custom: {
                                                    icon: {
                                                        iconUrl: homeImg,
                                                        width: "48px",
                                                        height: "48px"
                                                    }
                                                }
                                            });
                                        }}
                                    >
                                        수정
                                    </button>
                                    <button
                                        className="bg-[#ee6c4d] py-[3px] px-[10px] rounded-[7px] mr-[10px] text-white"
                                        onClick={() => {
                                            showToast({
                                                message: "삭제?",
                                                position: "top-center",
                                                theme: "error",
                                                bg: true,
                                                confirm: (condition) => {
                                                    if (condition) {
                                                        handleDelete();
                                                    }
                                                },
                                                custom: {
                                                    icon: {
                                                        iconUrl: homeImg,
                                                        width: "48px",
                                                        height: "48px"
                                                    }
                                                }
                                            });
                                        }}
                                    >
                                        삭제
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </section>
                <div className="flex gap-4 w-[100%]">
                    <div className="flex flex-col gap-12 w-[50%] ">
                        <div className="flex justify-start gap-10">
                            <section className="flex flex-col gap-2">
                                <h1 className="text-2xl text-[#214A00]">등반일</h1>
                                <p>{speedMeet?.date}</p>
                            </section>
                            <section className="flex flex-col gap-2">
                                <h1 className="text-2xl text-[#214A00]">장소</h1>
                                <p>{speedMeet?.mntnnm}</p>
                            </section>
                            <section className="flex flex-col gap-2">
                                <h1 className="text-2xl text-[#214A00]">모집인원</h1>
                                <p>
                                    {speedMeet?.attendance}/{speedMeet?.capacity}명
                                </p>
                            </section>
                        </div>
                        <section className="flex flex-col gap-2">
                            <h1 className="text-2xl text-[#214A00]">오픈채팅</h1>
                            <div
                                className={`bg-gray-200 h-[60px] p-4 flex justify-center items-center rounded-lg relative ${
                                    showChatLink ? "cursor-pointer" : ""
                                }`}
                                onClick={showChatLink ? () => handleCopyClipBoard(speedMeet?.chatLink) : () => {}}
                            >
                                {showChatLink ? (
                                    <span>{speedMeet?.chatLink}</span>
                                ) : (
                                    <span>{getUrlMasking(speedMeet?.chatLink)}</span>
                                )}
                            </div>
                            <a className="text-[18px]" href="https://open.kakao.com/o/gd73n2Pg" target="_blank">
                                오픈 카톡 (Click!)
                            </a>
                        </section>
                        <section className="flex flex-col gap-2">
                            <h1 className="text-2xl text-[#214A00]">내용</h1>
                            <p className="text-[18px]">{speedMeet?.content}</p>
                        </section>
                    </div>
                    <div className="flex flex-col gap-12 w-[50%]">
                        <section className="w-[100%] flex flex-col justify-start gap-4">
                            <h1 className="text-2xl text-[#214A00]">위치</h1>
                            <p className="text-[18px]">{mntn.mntninfopoflc}</p>
                            {mntn && (
                                <KakaoMapSpeedMeet
                                    lat={mntn.latitude}
                                    lng={mntn.longitude}
                                    width="100%"
                                    height="300px"
                                    borderRadius="8px"
                                />
                            )}
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpeedMeetDetail;
