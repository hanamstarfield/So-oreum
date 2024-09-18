import KakaoMap from "@/components/KakaoMap";
import axios from "axios";

const Home = () => {
    const fetchMount = async () => {
        const response = await axios.get("http://localhost:4000/items");
        return response.data;
    };

    return (
        <div>
            <KakaoMap fetchMount={fetchMount} />
            <span>speed-meet 바로가기 (임시)</span>
        </div>
    );
};

export default Home;
