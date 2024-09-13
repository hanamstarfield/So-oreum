import KakaoMap from "@/components/KakaoMap";
<<<<<<< HEAD
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
=======

const Home = () => {
    return (
        <div>
            <KakaoMap />
            <span>speed-meet 바로가기 (임시)</span>
        </div>
    );
};

>>>>>>> 67ec4577f1371d596fc691b2bf8cc74792f03e12
export default Home;
