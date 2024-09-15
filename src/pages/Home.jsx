import KakaoMap from "@/components/KakaoMap";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <KakaoMap />
            <div className="fixed top-0 right-4">
                <Link to="/speed-meet">
                    <span>speed-meet 바로가기 (임시)</span>
                </Link>
            </div>
        </div>
    );
};

export default Home;
