import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const MtList = () => {
    const navigate = useNavigate();
    const API_URL = "http://localhost:4000/items";

    const fetchData = async () => {
        const response = await axios.get(API_URL);
        return response.data;
    };

    const { data, isLoading, isError } = useQuery({
        queryKey: ["items"],
        queryFn: fetchData
    });

    if (isLoading) {
        return <div>로딩 중입니다...</div>;
    }

    if (isError) {
        return <div>데이터 조회 중 오류가 발생했습니다...</div>;
    }

    return (
        <div className="flex flex-wrap w-[800px] h-[800px] leading-loose overflow-y-scroll cursor-pointer">
            {data.map((item) => {
                return (
                    <div
                        className="w-[250px]  bg-white rounded-[15px] p-[15px] my-[10px] mx-[5px] box-contents brightness-100  hover:brightness-90 duration-100"
                        key={item.mntnid}
                        onClick={() => navigate(`/mntn-detail?mntnId=${item.mntnid}`)}
                    >
                        <img className="w-[220px] h-[150px] object-cover rounded-[15px]" src={item.mntnattchimageseq} />
                        <div className="flex justify-between items-center mt-[5px] px-[10px]">
                            <p>
                                <strong>{item.mntnnm}</strong>
                            </p>
                            <p className="text-[12px]"> 정상 {item.mntninfohght}m</p>
                        </div>
                        <p className="text-[12px]  px-[10px]">{item.mntninfopoflc}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default MtList;
