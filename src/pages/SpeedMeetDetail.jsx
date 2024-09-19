import KakaoMap from "@/components/KakaoMap";
import KakaoMapSpeedMeet from "@/components/KakaoMapSpeedMeet";
import useCreateAttendeeMutation from "@/mutations/useCreateAttendeeMutation";
import useGetAttendees from "@/queries/useGetAttendees";
import useGetMountainById from "@/queries/useGetMountainById";
import useGetSpeedMeetAndMountainQuery from "@/queries/useGetSpeedMeetAndMountainQuery";
import useGetSpeedMeetByIdQuery from "@/queries/useGetSpeedMeetByIdQuery";
import handleCopyClipBoard from "@/utils/clipBoard";
import useUserStore from "@/zustand/useUserStore";
import { useState } from "react";
import { useParams } from "react-router-dom";

const SpeedMeetDetail = () => {
    const { id } = useParams();
    const { user } = useUserStore((state) => state);

    const mutation = useCreateAttendeeMutation();

    const { data: result, isPending: speedMeetPending } = useGetSpeedMeetAndMountainQuery(id);
    // const { data: mntn, isPending: mntnPending } = useGetMountainById(speedMeet?.mntnid);
    const { data: attendees, isPending: attendeePending } = useGetAttendees(id);

    if (speedMeetPending || attendeePending) {
        return <>...로딩중</>;
    }

    const { speedMeet, mntn } = result;

    console.log("speedMeet", speedMeet);
    console.log("mntn", mntn);

    const hasBeenAttendee = attendees?.some((attendee) => attendee.userId === user.userId);
    const isDeadline = speedMeet.attendance >= speedMeet.capacity;

    const showChatLink = user.userId === speedMeet.userId || hasBeenAttendee;

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

    return (
        <div className="flex bg-[#214A00] w-[100%] h-svh items-center">
            <div className="w-[150px] h-[300px] mx-auto flex flex-col items-center bg-white rounded-lg">
                <h2 className="text-xl">{user.nickname}</h2>
                <span>{`참가인원 ${speedMeet?.attendance}명`}</span>
                {user.userId !== speedMeet.userId &&
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
            <div className="max-w-[1200px] h-[700px] mx-auto flex flex-col justify-center items-center gap-12 bg-white rounded-lg">
                <div className="flex items-center justify-center">
                    <h1 className="text-4xl">{speedMeet.title}</h1>
                </div>
                <div className="w-[100%] flex justify-center p-4 gap-8">
                    <div className="flex flex-col gap-3 w-[200px]">
                        <div className="h-[200px] flex flex-col gap-2 border-[#214A00] border-2 rounded-lg p-2">
                            <div className="w-[70px] bg-gray-600 flex justify-center rounded-2xl p-1">
                                <h2 className="text-lg text-white">등반일</h2>
                            </div>
                            <p>{speedMeet.date}</p>
                        </div>
                        <div className="h-[200px] flex flex-col gap-2 border-[#214A00] border-2 rounded-lg p-2">
                            <div className="w-[70px] bg-gray-600 flex justify-center rounded-2xl p-1">
                                <h1 className="text-lg text-white">장소</h1>
                            </div>
                            <p>{speedMeet.mntnnm}</p>
                        </div>
                    </div>
                    <div className="w-[500px] flex flex-col">
                        <KakaoMapSpeedMeet lat={mntn?.latitude} lng={mntn?.longitude} />
                        {/* <div>
                            <h1 className="text-2xl">모집인원</h1>
                            <p>{`${speedMeet.capacity}명`}</p>
                        </div>
                        <div>
                            <h1 className="text-2xl">오픈채팅</h1>
                            <div className="bg-slate-300">
                                <p onClick={() => handleCopyClipBoard(speedMeet.chatLink)}>{`${
                                    showChatLink ? speedMeet.chatLink : getMasking(speedMeet.chatLink)
                                }`}</p>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-2xl">내용</h1>
                            <div className="">
                                <p>{speedMeet.content}</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpeedMeetDetail;
