import useGetSpeedMeetsQuery from "@/queries/useGetSpeedMeetsQuery";
import { Link, useParams } from "react-router-dom";

const SpeedMeetList = () => {
    const { page } = useParams();
    const { data, isPending, fetchNextPage, hasNextPage, isFetchingNextPage } = useGetSpeedMeetsQuery(page);

    if (isPending) {
        return <>... 로딩</>;
    }

    // console.log("data", data);
    // console.log("fetchNextPage", fetchNextPage);
    // console.log("hasNextPage", hasNextPage);
    // console.log("isFetchingNextPage", isFetchingNextPage);
    const speedMeetList = data.pages[0].data;
    // console.log("speedMeetList", speedMeetList);

    return (
        <div className="h-lvh bg-[#214A00] flex justify-center items-center">
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
        </div>
    );
};

export default SpeedMeetList;
