import React from "react";

const SpeedMeetDetailSkelton = () => {
    return (
        <div className="flex flex-col bg-[#214A00] w-[100%] h-[91vh] justify-center items-center m-0">
            <div className="flex flex-col justify-center gap-12 w-[70%] max-w-[1200px] min-w-[950px] bg-white rounded-[20px] mx-auto p-12">
                <section className="flex justify-between border-b-2">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-4xl text-[#214A00]">산</h1>
                        <h3 className="text-2xl pb-6">제목</h3>
                    </div>
                    <div></div>
                </section>
                <div className="flex gap-4 w-[100%]">
                    <div className="flex flex-col gap-12 w-[50%] ">
                        <div className="flex justify-start gap-10">
                            <section className="flex flex-col gap-2">
                                <h1 className="text-2xl text-[#214A00]">등반일</h1>
                                <p>2000-01-01</p>
                            </section>
                            <section className="flex flex-col gap-2">
                                <h1 className="text-2xl text-[#214A00]">장소</h1>
                                <p>등산</p>
                            </section>
                            <section className="flex flex-col gap-2">
                                <h1 className="text-2xl text-[#214A00]">모집인원</h1>
                                <p>00/00명</p>
                            </section>
                        </div>
                        <section className="flex flex-col gap-2">
                            <h1 className="text-2xl text-[#214A00]">오픈채팅</h1>
                            <div
                                className={`bg-gray-200 h-[60px] p-4 flex justify-center items-center rounded-lg relative`}
                            ></div>
                            <span className="text-[18px] h-[10px]"></span>
                        </section>
                        <section className="flex flex-col gap-2">
                            <h1 className="text-2xl text-[#214A00]">내용</h1>
                            <p>내용을 입력하세요</p>
                        </section>
                    </div>
                    <div className="flex flex-col gap-12 w-[50%]">
                        <section className="w-[100%] flex flex-col justify-start gap-4">
                            <h1 className="text-2xl text-[#214A00]">위치</h1>
                            <p>서울시 . . .</p>
                            <div className="w-[100%] h-[300px] rounded-lg"></div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpeedMeetDetailSkelton;
