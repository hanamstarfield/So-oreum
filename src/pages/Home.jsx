import MtCard from "@/components/MtCard";
import KakaoMap from "@/components/KakaoMap";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Home = () => {
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
        <div className="flex h-screen">
            <div className="flex-1 p-4">
                <MtCard mount={mount} />
            </div>
            <div className="flex-1">
                <KakaoMap mount={mount} />
            </div>

            <span>speed-meet 바로가기 (임시)</span>
        </div>
    );
};

export default Home;
