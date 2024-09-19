import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const MtDetail = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const mntnId = searchParams.get("mntnId");

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
        <div>
            {data.map((item) => {
                if (item.mntnid === Number(mntnId)) {
                    return (
                        <div classNamekey={item.mntnid}>
                            <div className=" bg-[#214A00] min-w-[900px] w-[100%] ">
                                <div className="flex flex-col justify-start items-center h-[561px] w-[900px] text-[#ffffff] m-[auto] pt-[30px] gap-[20px]">
                                    <h2 className="text-[64px] font-bold">{item.mntnnm}</h2>
                                    <div className="flex w-[900px] justify-start gap-[20px]">
                                        <div className="mt-[40px]">
                                            <img
                                                className="min-w-[500px] w-[500px] max-h-[300px] h-[300px] object-cover"
                                                src={item.mntnattchimageseq}
                                            />
                                        </div>

                                        <div className="flex flex-col justify-end gap-[50px] leading-loose">
                                            <p>
                                                <strong>높이</strong> <br />
                                                고도 {item.mntninfohght}m
                                            </p>
                                            <p>
                                                <strong>소재지</strong>
                                                <br />
                                                {item.mntninfopoflc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-start m-[auto] w-[900px] text-justify mt-[50px] gap-[50px] leading-loose">
                                <p>
                                    <strong>개관</strong>
                                    <br />
                                    {item.mntninfodscrt}
                                </p>
                                <p>
                                    <strong>상세정보</strong>
                                    <br />
                                    {item.mntninfodtlinfocont}
                                </p>
                            </div>
                        </div>
                    );
                }
            })}
        </div>
    );
};

export default MtDetail;
