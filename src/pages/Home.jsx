import MtCard from "@/components/MtCard";
import KakaoMap from "@/components/KakaoMap";
<<<<<<< HEAD
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
=======
import MtList from "@/components/MtList";
>>>>>>> 42d5f06df0fd8227a89eddce4774f09b50c27e73

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
<<<<<<< HEAD
        <div className="flex h-screen">
            <div className="flex-1 p-4">
                <MtCard mount={mount} />
            </div>
            <div className="flex-1">
                <KakaoMap mount={mount} />
            </div>

=======
        <div>
<<<<<<< HEAD
            <KakaoMap mount={mount} />
>>>>>>> e386e35785db59c06447662dd721fcd7bde2abb5
=======
            <div className="flex mx-[50px]">
                <MtList />
                <KakaoMap />
            </div>
>>>>>>> 42d5f06df0fd8227a89eddce4774f09b50c27e73
            <span>speed-meet 바로가기 (임시)</span>
        </div>
    );
};

export default Home;
