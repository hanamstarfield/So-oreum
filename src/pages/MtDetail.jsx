import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import LightningImg from "@/assets/Lightning.png";
import SpCardDefaultImg from "@/assets/SpCardDefault.png";

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
                                <div className="flex mt-[30px]">
                                    <img
                                        className="min-w-[500px] w-[500px] max-h-[300px] h-[300px] object-cover"
                                        src={selectedMntn.mntnattchimageseq}
                                    />
                                    <div className="flex flex-col justify-end w-[50px] h-[300px] ml-[10px] bg-gray-300 rounded">
                                        <div
                                            className="bg-green-500 w-full rounded-b"
                                            style={{
                                                height: `${(selectedMntn.mntninfohght / 1000) * 100}%`
                                            }}
                                        ></div>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-end gap-[50px] leading-loose">
                                    <p className="text-[19px]">
                                        <strong>높이</strong> <br />
                                        고도 {selectedMntn.mntninfohght}m
                                    </p>
                                    <p className="text-[19px]">
                                        <strong>소재지</strong>
                                        <br />
                                        {selectedMntn.mntninfopoflc}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex absolute bottom-[15%] right-[19%] gap-4 text-[#ffffff]">
                            <button
                                onClick={() => setShowDetails(true)}
                                className={`px-4 py-2 rounded-lg transition-all duration-200  ${
                                    showDetails
                                        ? "bg-[#132a13] hover:bg-[#070f07] shadow-lg"
                                        : "bg-[#5c6b73] hover:bg-[#4b575e] shadow-md"
                                }`}
                            >
                                상세 정보
                            </button>
                            <button
                                onClick={() => setShowDetails(false)}
                                className={`px-4 py-2 rounded-lg transition-all duration-200  ${
                                    !showDetails
                                        ? "bg-[#132a13] hover:bg-[#070f07] shadow-lg"
                                        : "bg-[#5c6b73] hover:bg-[#4b575e] shadow-md"
                                }`}
                            >
                                벙개 목록
                            </button>
                        </div>
                    </div>
                </div>

                {showDetails ? (
                    <div>
                        <div className="flex flex-col justify-center items-start m-[auto] w-[1200px] text-justify my-[50px] gap-[50px] leading-loose">
                            <p className="text-[22px]">
                                <strong>개관</strong>
                                <br />
                                {selectedMntn.mntninfodscrt}
                            </p>
                            <p className="text-[22px]">
                                <strong>상세정보</strong>
                                <br />
                                {selectedMntn.mntninfodtlinfocont}
                            </p>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className="flex flex-col justify-center items-start m-[auto] w-[1200px] text-justify my-[50px]">
                            <div className="flex items-center mb-[20px]">
                                <img src={LightningImg} className="w-[30px] h-[30px] object-cover" />
                                <h3 className="text-[22px]">
                                    <strong>벙개 목록</strong>
                                </h3>
                            </div>

                            <div className="flex flex-wrap justify-start gap-[23px] mb-[100px]">
                                {filteredSPList.length > 0 ? (
                                    filteredSPList.map((sp) => (
                                        <div
                                            className="flex flex-col justify-between w-[280px] h-[200px] rounded-[20px] p-4 bg-white shadow-lg transition-all duration-200 hover:scale-105 brightness-100  hover:brightness-90 mt-[30px] cursor-pointer"
                                            key={sp.id}
                                            onClick={() => navigate(`/speed-meet-detail/${sp.id}`)}
                                        >
                                            <div className="flex justify-between items-center mb-2">
                                                <p className="text-[16px]">{sp.title}</p>
                                                <p className="text-[14px] text-gray-500">
                                                    {sp.attendance}/{sp.capacity}
                                                </p>
                                            </div>

                                            <img
                                                src={SpCardDefaultImg}
                                                className="flex m-auto w-[100px] h-[130px] object-cover rounded-[15px]"
                                                alt={sp.title}
                                            />
                                            <div className="flex justify-end mt-2">
                                                <p className="text-[14px] text-gray-500">{sp.date}</p>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-[22px]">해당 산의 벙개 게시글이 없습니다.</p>
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
