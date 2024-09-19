import meetApi from "@/api/meet";
import KakaoMap from "@/components/KakaoMap";
import KakaoMapSpeedMeet from "@/components/KakaoMapSpeedMeet";
import useCreateAttendeeMutation from "@/mutations/useCreateAttendeeMutation";
import useDeleteSpeedMeetMutation from "@/mutations/useDeleteSpeedMeetMutation";
import useGetAttendees from "@/queries/useGetAttendees";
import useGetMountainById from "@/queries/useGetMountainById";
import useGetSpeedMeetAndMountainQuery from "@/queries/useGetSpeedMeetAndMountainQuery";
import useGetSpeedMeetByIdQuery from "@/queries/useGetSpeedMeetByIdQuery";
import { showToast } from "@/toast/showToast";
import handleCopyClipBoard from "@/utils/clipBoard";
import useSpeedMeetStore from "@/zustand/useSpeedMeetStore";
import useUserStore from "@/zustand/useUserStore";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SpeedMeetDetail = () => {
    const { id } = useParams();
    const { user } = useUserStore((state) => state);
    const { setFormState } = useSpeedMeetStore();

    const mutation = useCreateAttendeeMutation();

    const { data: result, isPending: speedMeetPending } = useGetSpeedMeetAndMountainQuery(id);
    // const { data: mntn, isPending: mntnPending } = useGetMountainById(speedMeet?.mntnid);
    const { data: attendees, isPending: attendeePending } = useGetAttendees(id);
    const deleteMutation = useDeleteSpeedMeetMutation();
    const navigate = useNavigate();

    if (speedMeetPending || attendeePending) {
        return <>...로딩중</>;
    }

    const { speedMeet, mntn } = result;

    const hasBeenAttendee = attendees?.some((attendee) => attendee.userId === user.userId);
    const isDeadline = speedMeet.attendance >= speedMeet.capacity;
    const hasWrittenPost = user.userId === speedMeet.userId;
    const showChatLink = hasWrittenPost || hasBeenAttendee;

    const handleEnrollAttendee = () => {
        mutation.mutate({ speedMeetId: id, userId: user.userId });
    };

    const getMasking = (url) => {
        const urlPattern = /^(https?:\/\/)?([^\/]+)(\/.*)?$/;
        const match = url.match(urlPattern);

        if (match) {
            const protocol = match[1] || "";
            const domain = match[2];
            const path = match[3] || "";

            // 도메인 마스킹: "example.com" -> "e*****.com"
            // const maskedDomain = domain.charAt(0) + "*****" + domain.slice(domain.lastIndexOf("."));
            const maskedDomain = domain;

            // 경로 마스킹: "/path/to/resource" -> "/path/***"
            const maskedPath = path.length > 0 ? path.replace(/[^\/]+$/, "***") : "";

            return `${protocol}${maskedDomain}${maskedPath}`;
        }

        return url;
    };

    const handleUpdate = () => {
        const { title, date, capacity, content, chatLink, attendance } = speedMeet;

        const { mntnid, mntnnm } = mntn;

        setFormState({
            title,
            date,
            mntnid,
            mntnnm,
            capacity,
            content,
            chatLink,
            attendance
        });
        navigate(`/speed-meet-write`);
    };

    const handleDelete = () => {
        deleteMutation.mutate(id);
        meetApi.deleteSpeedMeetById(id);
        navigate("/speed-meet/1");
    };

    return (
        <div className="flex bg-[#214A00] w-[100%] h-svh items-center">
            <div className="w-[150px] h-[300px] mx-auto flex flex-col items-center bg-white rounded-lg ">
                <h2 className="text-xl">{user.nickname}</h2>
                <span>{`참가인원 ${speedMeet?.attendance}명`}</span>
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
            <div className="w-[1000px] h-[800px] mx-auto flex flex-col justify-center items-center gap-12 bg-white rounded-lg relative">
                <div className="absolute top-2 right-2 flex gap-4">
                    <button
                        className="bg-yellow-400"
                        onClick={() => {
                            showToast({
                                message: "수정?",
                                position: "top-center",
                                confirm: (condition) => {
                                    if (condition) {
                                        handleUpdate();
                                    }
                                }
                            });
                        }}
                    >
                        수정
                    </button>
                    <button
                        className="bg-red-400"
                        onClick={() => {
                            showToast({
                                message: "삭제?",
                                position: "top-center",
                                confirm: (condition) => {
                                    if (condition) {
                                        handleDelete();
                                    }
                                }
                            });
                        }}
                    >
                        삭제
                    </button>
                </div>
                <div className="flex items-center justify-center">
                    <h1 className="text-4xl">{speedMeet.title}</h1>
                </div>
                <div className="w-[100%] flex justify-start p-4 gap-8">
                    <div className="flex flex-col gap-3 w-[200px]">
                        <div className="h-[600px] flex flex-col gap-6 border-[#214A00] border-2 rounded-lg p-2">
                            <div className="flex flex-col gap-2">
                                <div className="w-[70px] bg-gray-600 flex justify-center rounded-2xl p-1">
                                    <h2 className="text-lg text-white">등반일</h2>
                                </div>
                                <p>{speedMeet.date}</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="w-[70px] bg-gray-600 flex justify-center rounded-2xl p-1">
                                    <h2 className="text-lg text-white">장소</h2>
                                </div>
                                <p>{speedMeet.mntnnm}</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="w-[80px] bg-gray-600 flex justify-center rounded-2xl p-1">
                                    <h2 className="text-lg text-white">모집인원</h2>
                                </div>
                                <p>{`${speedMeet.capacity}명`}</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="w-[80px] bg-gray-600 flex justify-center rounded-2xl p-1">
                                    <h2 className="text-lg text-white">오픈채팅</h2>
                                </div>
                                <div className="bg-slate-300">
                                    {showChatLink ? (
                                        <p onClick={() => handleCopyClipBoard(speedMeet.chatLink)}>
                                            {speedMeet.chatLink}
                                        </p>
                                    ) : (
                                        <p>{getMasking(speedMeet.chatLink)}</p>
                                    )}
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="w-[70px] bg-gray-600 flex justify-center rounded-2xl p-1">
                                    <h1 className="text-lg text-white">내용</h1>
                                </div>
                                <p>{speedMeet.content}</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[500px] flex flex-col">
                        <KakaoMapSpeedMeet
                            lat={mntn?.latitude}
                            lng={mntn?.longitude}
                            width="720px"
                            height="600px"
                            borderRadius="8px"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpeedMeetDetail;
