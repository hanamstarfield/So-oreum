import KakaoMap from "@/components/KakaoMap";
import MtList from "@/components/MtList";

const Home = () => {
    return (
        <div>
            <div className="flex mx-[50px]">
                <MtList />
                <KakaoMap />
            </div>
            <span>speed-meet 바로가기 (임시)</span>
        </div>
    );
};

export default Home;
