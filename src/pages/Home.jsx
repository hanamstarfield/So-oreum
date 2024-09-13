import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div>Home</div>
            <Link to="/speed-meet">
                <span>speed-meet 바로가기 (임시)</span>
            </Link>
        </>
    );
};

export default Home;
