import Pagination from "@/components/Pagination";
import useGetSpeedMeetsQuery from "@/queries/useGetSpeedMeetsQuery";
import { Link, useParams } from "react-router-dom";

const SpeedMeetList = () => {
    const { page } = useParams();
    const { data, isPending } = useGetSpeedMeetsQuery(page);

    if (isPending) {
        return <>... 로딩</>;
    }

    const last = data.last;

    const speedMeetList = data.data;

    console.log("speedMeetList", speedMeetList);

    return (
        <div className="h-lvh bg-[#214A00] flex justify-center items-center relative">
            <Link to="/speed-meet-write">
                <button className="fixed top-48 right-10 bg-lime-300">작성</button>
            </Link>
            <ul className="bg-white h-[500px] w-[1200px]">
                {speedMeetList.map((item) => {
                    return (
                        <li key={item.id}>
                            <Link to={`/speed-meet-detail/${item.id}`}>
                                <p>{item.title}</p>
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <Pagination last={last} url="/speed-meet" current={page}></Pagination>
        </div>
    );
};

export default SpeedMeetList;
