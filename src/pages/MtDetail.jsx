import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import MtInfoBottom from "@/components/mtdetail/MtInfoBottom";
import MtSpeedMeetList from "@/components/mtdetail/MtSpeedMeetList";
import MtInfoTop from "@/components/mtdetail/MtInfoTop";

const MtDetail = () => {
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

    const selectedMntn = mntn ? mntn.find((item) => item.mntnid === Number(mntnId)) : null;

    if (mntnIsLoading || listIsLoading) {
        return <div>로딩 중입니다...</div>;
    }

    if (mntnIsError || listIsError) {
        return <div>데이터 조회 중 오류가 발생했습니다...</div>;
    }

    if (!selectedMntn) {
        return <div>선택된 산 정보가 없습니다. 다른 산을 선택해 주세요.</div>;
    }

    return (
        <div key={mntn.id}>
            <MtInfoTop selectedMntn={selectedMntn} showDetails={showDetails} setShowDetails={setShowDetails} />
            {showDetails ? (
                <MtInfoBottom selectedMntn={selectedMntn} />
            ) : (
                <MtSpeedMeetList list={list} selectedMntn={selectedMntn} />
            )}
        </div>
    );
};

export default MtDetail;
