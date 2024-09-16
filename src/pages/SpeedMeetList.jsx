import useGetSpeedMeetsQuery from "@/queries/useGetSpeedMeetsQuery";
import { Link, useParams } from "react-router-dom";

const SpeedMeetList = () => {
    const { page } = useParams();
    const { data, isPending } = useGetSpeedMeetsQuery(page);

    if (isPending) {
        return <>... 로딩</>;
    }

    console.log("data", data);

    // console.log("data", data);
    // console.log("fetchNextPage", fetchNextPage);
    // console.log("hasNextPage", hasNextPage);
    // console.log("isFetchingNextPage", isFetchingNextPage);
    const speedMeetList = data.data;
    // const last = data.pages[0].last;
    // console.log("speedMeetList", speedMeetList);

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
            <div className="absolute w-[60%] h-[30px] bottom-20 bg-slate-600 flex justify-center gap-4">
                <Link to="/speed-meet/1">
                    <span>1</span>
                </Link>
                <Link to="/speed-meet/2">
                    <span>2</span>
                </Link>
                <Link to="/speed-meet/3">
                    <span>3</span>
                </Link>
                <Link to="/speed-meet/4">
                    <span>4</span>
                </Link>
                <Link to="/speed-meet/5">
                    <span>5</span>
                </Link>
            </div>
        </div>
    );
};

export default SpeedMeetList;
