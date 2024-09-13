import useGetSpeedMeetByIdQuery from "@/queries/useGetSpeedMeetByIdQuery";
import handleCopyClipBoard from "@/utils/clipBoard";
import useUserStore from "@/zustand/useUserStore";
import { useParams } from "react-router-dom";

const SpeedMeetDetail = () => {
    const { id } = useParams();

    const { data: speedMeet, isPending } = useGetSpeedMeetByIdQuery(id);
    const { user } = useUserStore((state) => state);

    if (isPending) {
        return <>...로딩중</>;
    }

    console.log("user", user);
    console.log("speedMeet", speedMeet.userId);

    return (
        <div className="flex bg-[#214A00] w-[100%] h-svh items-center">
            <div className="w-[150px] h-[300px] mx-auto flex flex-col items-center bg-white">
                <h2 className="text-xl">{user.nickname}</h2>
                <span>{`참가인원 ${speedMeet.attendance}명`}</span>
                {user.userId !== speedMeet.userId && <button className="bg-cyan-600">신청하기</button>}
            </div>
            <div className="max-w-[1200px] h-[600px] mx-auto flex flex-col justify-center items-center gap-12 bg-white">
                <div className="flex items-center justify-center">
                    <h1 className="text-4xl">{speedMeet.title}</h1>
                </div>
                <div className="max-w-[1200px] flex justify-center">
                    <div className="flex flex-col gap-3 w-[200px]">
                        <div className="h-[300px] flex flex-col gap-2 bg-slate-400">
                            <h1 className="text-2xl">일정</h1>
                            <h2 className="text-xl">등반일</h2>
                            <span>{speedMeet.date}</span>
                        </div>
                        <div className="h-[200px] flex flex-col bg-slate-400">
                            <h1 className="text-2xl">장소</h1>
                            <p>{speedMeet.mountainName}</p>
                        </div>
                    </div>
                    <div className="w-[500px] flex flex-col items-center">
                        <div>
                            <h1 className="text-2xl">모집인원</h1>
                            <p>{`${speedMeet.capacity}명`}</p>
                        </div>
                        <div>
                            <h1 className="text-2xl">오픈채팅</h1>
                            <div className="bg-slate-300">
                                <p onClick={() => handleCopyClipBoard(speedMeet.chatLink)}>{`${speedMeet.chatLink}`}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpeedMeetDetail;
