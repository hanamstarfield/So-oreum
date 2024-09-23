import { Link } from "react-router-dom";

const SpeedMeetListSkelton = () => {
    const speedMeetList = Array.from({ length: 10 }).map((a) => a);

    return (
        <div className="h-lvh bg-[#214A00] flex flex-col justify-center items-center">
            <div className="bg-white w-[1200px] rounded-xl flex flex-col mb-6">
                <div className="w-[100%] h-[50px] flex p-4 border-b-4 border-slate-500 items-center">
                    <span className="w-[15%]">산</span>
                    <span className="w-[50%]">제목</span>
                    <span className="w-[10%]">모집인원</span>
                    <span className="w-[]">작성자</span>
                    <div className="ml-auto">
                        <button className="bg-[#ff9f1c] py-[3px] px-[10px] rounded-[7px] mr-[10px] text-white">
                            글쓰기
                        </button>
                    </div>
                </div>

                <ul className="w-[100%] flex flex-col">
                    {speedMeetList.map((_, index) => {
                        return (
                            <li key={index} className="w-[100%] flex p-4 border-b-2 border-zinc-600">
                                <span className="w-[15%] h-[25px]"></span>
                                <div className="w-[50%]">
                                    <p></p>
                                </div>
                                <span className="w-[10%]"></span>
                                <span></span>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="w-[100%] h-[30px] flex justify-center items-center gap-4 text-2xl">
                <div className="w-[30px]">
                    <span className="text-2xl">1</span>
                </div>
                <div className="w-[30px]">
                    <span className="text-2xl">1</span>
                </div>
                <div className="w-[30px]">
                    <span className="text-2xl">1</span>
                </div>
                <div className="w-[30px]">
                    <span className="text-2xl">1</span>
                </div>
                <div className="w-[30px]">
                    <span className="text-2xl">1</span>
                </div>
            </div>
        </div>
    );
};

export default SpeedMeetListSkelton;
