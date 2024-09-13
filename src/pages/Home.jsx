import KakaoMap from "@/components/KakaoMap";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div><div>Home</div>
            <KakaoMap /><Link to="/speed-meet">
                <span>speed-meet 바로가기 (임시)</span>
            </Link>
        </div>
    )
}
export default Home;
