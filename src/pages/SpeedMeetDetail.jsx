import meetApi from "@/api/meet";
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

const SpeedMeetDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const { user } = useUserStore((state) => state);
    const mutation = useCreateAttendeeMutation();

    const { data: result, isPending: speedMeetPending } = useGetSpeedMeetAndMountainQuery(id);
    const { data: attendees, isPending: attendeePending } = useGetAttendees(id);
    const deleteMutation = useDeleteSpeedMeetMutation();

    if (speedMeetPending || attendeePending) {
        return <>...로딩중</>;
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

    //     <div className="w-[150px] h-[300px] mx-auto flex flex-col items-center bg-white rounded-lg ">
    //     <h2 className="text-xl">{user.nickname}</h2>
    //     <span>{`참가인원 ${speedMeet?.attendance}명`}</span>
    //     {!hasWrittenPost &&
    //         (hasBeenAttendee ? (
    //             <button className="bg-slate-600 cursor-default">신청완료</button>
    //         ) : isDeadline ? (
    //             <button className="bg-slate-600 cursor-default">신청마감</button>
    //         ) : (
    //             <button className="bg-cyan-600" onClick={handleEnrollAttendee}>
    //                 신청하기
    //             </button>
    //         ))}
    // </div>

    //     <button
    //     className="bg-yellow-400"
    //     onClick={() => {
    //         showToast({
    //             message: "수정?",
    //             position: "top-center",
    //             confirm: (condition) => {
    //                 if (condition) {
    //                     handleUpdate();
    //                 }
    //             }
    //         });
    //     }}
    // >
    //     수정
    // </button>
    // <button
    //     className="bg-red-400"
    //     onClick={() => {
    //         showToast({
    //             message: "삭제?",
    //             position: "top-center",
    //             confirm: (condition) => {
    //                 if (condition) {
    //                     handleDelete();
    //                 }
    //             }
    //         });
    //     }}
    // >
    //     삭제
    // </button>

    // <div className="flex flex-col gap-3 w-[200px]">
    //                 <div className="h-[600px] flex flex-col gap-6 border-[#214A00] border-2 rounded-lg p-2">
    //                     <div className="flex flex-col gap-2">
    //                         <div className="w-[70px] bg-gray-600 flex justify-center rounded-2xl p-1">
    //                             <h2 className="text-lg text-white">등반일</h2>
    //                         </div>
    //                         <p>{speedMeet?.date}</p>
    //                     </div>
    //                     <div className="flex flex-col gap-2">
    //                         <div className="w-[70px] bg-gray-600 flex justify-center rounded-2xl p-1">
    //                             <h2 className="text-lg text-white">장소</h2>
    //                         </div>
    //                         <p>{speedMeet?.mntnnm}</p>
    //                     </div>
    //                     <div className="flex flex-col gap-2">
    //                         <div className="w-[80px] bg-gray-600 flex justify-center rounded-2xl p-1">
    //                             <h2 className="text-lg text-white">모집인원</h2>
    //                         </div>
    //                         <p>{`${speedMeet?.capacity}명`}</p>
    //                     </div>
    //                     <div className="flex flex-col gap-2">
    //                         <div className="w-[80px] bg-gray-600 flex justify-center rounded-2xl p-1">
    //                             <h2 className="text-lg text-white">오픈채팅</h2>
    //                         </div>
    //                         <div className="bg-slate-300">
    //                             {showChatLink ? (
    //                                 <p onClick={() => handleCopyClipBoard(speedMeet?.chatLink)}>
    //                                     {speedMeet?.chatLink}
    //                                 </p>
    //                             ) : (
    //                                 <p>{getUrlMasking(speedMeet?.chatLink)}</p>
    //                             )}
    //                         </div>
    //                     </div>
    //                     <div className="flex flex-col gap-2">
    //                         <div className="w-[70px] bg-gray-600 flex justify-center rounded-2xl p-1">
    //                             <h1 className="text-lg text-white">내용</h1>
    //                         </div>
    //                         <p>{speedMeet?.content}</p>
    //                     </div>
    //                 </div>
    //             </div>

    return (
        <div className="flex flex-col justify-center gap-12 w-[70%] max-w-[1200px] min-w-[700px] bg-white rounded-[20px] mx-auto p-12">
            <section className="flex justify-between border-b-2">
                <div className="flex flex-col gap-4">
                    <h1 className="text-4xl text-[#214A00]">{speedMeet?.mntnnm}</h1>
                    <h3 className="text-2xl pb-6">{speedMeet?.title}</h3>
                </div>
                <div>
                    <div className="text-2xl">
                        {!hasWrittenPost &&
                            (hasBeenAttendee ? (
                                <button className="bg-slate-600 cursor-default">신청완료</button>
                            ) : isDeadline ? (
                                <button className="bg-slate-600 cursor-default">신청마감</button>
                            ) : (
                                <button className="bg-cyan-600" onClick={handleEnrollAttendee}>
                                    신청하기
                                </button>
                            ))}
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
                        <div>
                            {showChatLink ? (
                                <span
                                    className="bg-slate-600 cursor-pointer"
                                    onClick={() => handleCopyClipBoard(speedMeet?.chatLink)}
                                >
                                    {speedMeet?.chatLink}
                                </span>
                            ) : (
                                <p>{getUrlMasking(speedMeet?.chatLink)}</p>
                            )}
                        </div>
                    </section>
                    <section className="flex flex-col gap-2">
                        <h1 className="text-2xl text-[#214A00]">내용</h1>
                        <pre>{speedMeet?.content}</pre>
                    </section>
                </div>
                <div className="flex flex-col gap-12 w-[50%]">
                    <section className="w-[100%] flex flex-col justify-start gap-4">
                        <h1 className="text-2xl text-[#214A00]">위치</h1>
                        <p>{mntn.mntninfopoflc}</p>
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
    );
};

export default SpeedMeetDetail;
