import useGetSpeedMeetsQuery from "@/queries/useGetSpeedMeetsQuery";
import { Link } from "react-router-dom";

const SpeedMeetList = () => {
    const { data: speedMeets, isPending } = useGetSpeedMeetsQuery();

    if (isPending) {
        return <>... 로딩</>;
    }

    return (
        <div className="h-lvh bg-[#214A00] flex justify-center items-center">
            <Link to="/speed-meet-write">
                <button className="fixed top-48 right-10 bg-lime-300">작성</button>
            </Link>
            <ul className="bg-white h-[500px] w-[1200px]">
                {speedMeets.map((item) => {
                    return (
                        <li key={item.id}>
                            <Link to={`/speed-meet-detail/${item.id}`}>
                                <p>{item.title}</p>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default SpeedMeetList;
