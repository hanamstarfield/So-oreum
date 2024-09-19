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
        <div className="h-lvh bg-[#214A00] flex flex-col justify-center items-center">
            <div className="bg-white w-[1200px] rounded-lg flex flex-col">
                <div className="w-[100%] h-[50px] flex p-4 border-b-4 border-slate-500">
                    <span className="w-[10%]">산</span>
                    <span className="w-[60%]">제목</span>
                    <span className="w-[]">모집인원</span>
                    <div className="ml-auto">
                        <Link to="/speed-meet-write">
                            <button className="bg-lime-300">글쓰기</button>
                        </Link>
                    </div>
                </div>

                <ul className="w-[100%] flex flex-col">
                    {speedMeetList.map((item) => {
                        return (
                            <li key={item.id} className="w-[100%] flex p-4 border-b-2 border-zinc-600 ">
                                <span className="w-[10%]">{item.mntnnm}</span>
                                <div className="w-[60%]">
                                    <Link to={`/speed-meet-detail/${item.mntnid}`}>
                                        <p>{item.title}</p>
                                    </Link>
                                </div>
                                <span>{`${item.attendance}/${item.capacity}`}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="">
                <Pagination last={last} url="/speed-meet" current={page}></Pagination>
            </div>
        </div>
    );
};

export default SpeedMeetList;
