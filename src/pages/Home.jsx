import MtCard from "@/components/MtCard";
import KakaoMap from "@/components/KakaoMap";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const Home = () => {
    const [latlng, setLatlng] = useState({
        swLatlng: { La: 126.74830859822728, Ma: 37.33778210260892 },
        nwLatlng: { La: 127.24016828673027, Ma: 37.7991147734346 }
    });
    // console.log(latlng);

    const fetchMount = async () => {
        const response = await axios.get("http://localhost:4000/items");
        return response.data;
    };

    const {
        data: mount,
        isLoading,
        isError
    } = useQuery({
        queryKey: ["items"],
        queryFn: fetchMount
    });
    if (isLoading) {
        return <div>로딩중...</div>;
    }

    if (isError) {
        return <div>다시 시도해주세요...</div>;
    }

    return (
        <div>
            <div className="flex mx-[50px]">
                <MtCard mount={mount} latlng={latlng} />
                <KakaoMap mount={mount} setLatlng={setLatlng} />
            </div>
            <div>
                <span>speed-meet 바로가기 (임시)</span>
            </div>
        </div>
    );
};

export default Home;
