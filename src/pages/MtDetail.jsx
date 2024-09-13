import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import { useSearchParams } from "react-router-dom";

const MtDetail = () => {
    // const [searchParams, setSearchParams] = useSearchParams();
    // const mntnNm = searchParams.get("mntnNm");

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
                // if (item.mntnnm === mntnNm) {
                return (
                    <div key={item.mntnid}>
                        <h2>{item.mntnnm}</h2>
                        <img src={item.mntnattchimageseq} />
                        <p>높이: {item.mntninfohght}</p>
                        <p>소재지: {item.mntninfopoflc}</p>
                        <p>개관: {item.mntninfodscrt}</p>
                        <p>상세정보: {item.mntninfodtlinfocont}</p>
                    </div>
                );
                // }
            })}
        </div>
    );
};

export default MtDetail;
