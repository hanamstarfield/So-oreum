import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import LightningImg from "@/assets/Lightning.png";
import SpCardDefaultImg from "@/assets/SpCardDefault.jpg";

const MtDetail = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const mntnId = searchParams.get("mntnId");
    const [showDetails, setShowDetails] = useState(true);

    const MT_API_URL = "http://localhost:4000/items";
    const mtFetchData = async () => {
        const response = await axios.get(MT_API_URL);
        return response.data;
    };

    const List_API_URL = "http://localhost:4000/speedMeets";
    const listFetchData = async () => {
        const response = await axios.get(List_API_URL);
        return response.data;
    };

    const {
        data: list,
        isLoading: listIsLoading,
        isError: listIsError
    } = useQuery({
        queryKey: ["speedMeets"],
        queryFn: listFetchData
    });

    const {
        data: mntn,
        isLoading: mntnIsLoading,
        isError: mntnIsError
    } = useQuery({
        queryKey: ["items"],
        queryFn: mtFetchData
    });

    const selectedMntn = mntn.find((item) => item.mntnid === Number(mntnId));

    const filteredSPList = list.filter((sp) => selectedMntn.mntnid === sp.mntnid);

    if (mntnIsLoading || listIsLoading) {
        return <div>로딩 중입니다...</div>;
    }

    if (mntnIsError || listIsError) {
        return <div>데이터 조회 중 오류가 발생했습니다...</div>;
    }

    return (
        <div>
            <div key={selectedMntn.mntnid}>
                <div key={selectedMntn.mntnid}>
                    <div className="flex relative flex-col bg-[#214A00] min-w-[1200px] w-[100%]">
                        <div className="flex flex-col justify-start items-center h-[561px] w-[1200px] text-[#ffffff] m-[auto] pt-[30px] gap-[20px]">
                            <h2 className="text-[64px] font-bold">{selectedMntn.mntnnm}</h2>
                            <div className="flex w-[1200px] justify-start gap-[20px]">
                                <div className="mt-[40px]">
                                    <img
                                        className="min-w-[500px] w-[500px] max-h-[300px] h-[300px] object-cover"
                                        src={selectedMntn.mntnattchimageseq}
                                    />
                                </div>
                                <div className="flex flex-col justify-end gap-[50px] leading-loose">
                                    <p>
                                        <strong>높이</strong> <br />
                                        고도 {selectedMntn.mntninfohght}m
                                    </p>
                                    <p>
                                        <strong>소재지</strong>
                                        <br />
                                        {selectedMntn.mntninfopoflc}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex absolute bottom-[10%] right-[20%] gap-4">
                            <button
                                onClick={() => setShowDetails(true)}
                                className={`px-4 py-2 ${showDetails ? "bg-green-700" : "bg-gray-300"}`}
                            >
                                상세 정보
                            </button>
                            <button
                                onClick={() => setShowDetails(false)}
                                className={`px-4 py-2 ${!showDetails ? "bg-green-700" : "bg-gray-300"}`}
                            >
                                벙개 목록
                            </button>
                        </div>
                    </div>
                </div>

                {showDetails ? (
                    <div>
                        <div className="flex flex-col justify-center items-start m-[auto] w-[1200px] text-justify my-[50px] gap-[50px] leading-loose">
                            <p>
                                <strong>개관</strong>
                                <br />
                                {selectedMntn.mntninfodscrt}
                            </p>
                            <p>
                                <strong>상세정보</strong>
                                <br />
                                {selectedMntn.mntninfodtlinfocont}
                            </p>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className="flex flex-col justify-center items-start m-[auto] w-[1200px] text-justify my-[50px] gap-[30px]">
                            <div className="flex items-center mb-[20px]">
                                <img src={LightningImg} className="w-[30px] h-[30px] object-cover" />
                                <h3>
                                    <strong>벙개 목록</strong>
                                </h3>
                            </div>

                            <div className="flex flex-wrap justify-start gap-[15px]">
                                {filteredSPList.length > 0 ? (
                                    filteredSPList.map((sp) => {
                                        return (
                                            <div
                                                className="flex flex-col justify-between w-[280px] h-[200px] border-[3px] rounded-[30px] p-[10px] box-contents bg-white brightness-100  hover:brightness-90 duration-100 cursor-pointer"
                                                key={sp.id}
                                                onClick={() => navigate(`/speed-meet-detail/${sp.id}`)}
                                            >
                                                <div className="flex justify-between px-[10px]">
                                                    {/* <p className="text-[12px] text-start w-[100%]">
                                                        방장: {sp.userId}
                                                    </p> */}
                                                    <p className="text-[12px] ">{sp.title}</p>
                                                    <p className="text-[12px]">
                                                        {sp.attendance}/{sp.capacity}
                                                    </p>
                                                </div>

                                                <img
                                                    src={SpCardDefaultImg}
                                                    className="flex m-[auto] w-[100%] h-[130px] object-cover rounded-[30px]"
                                                />
                                                <div className="flex justify-end px-[10px]">
                                                    <p className="text-[12px]">{sp.date}</p>
                                                </div>
                                            </div>
                                        );
                                    })
                                ) : (
                                    <p>해당 산의 벙개 게시글이 없습니다.</p>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MtDetail;
