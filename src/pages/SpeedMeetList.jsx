import meetApi from "@/api/meet";
import mntnApi from "@/api/mntn";
import Pagination from "@/components/Pagination";
import SpeedMeetListSkelton from "@/components/SpeedMeetListSkelton";
import queryKey from "@/queries/queryKeys";
import useGetSpeedMeetsQuery from "@/queries/useGetSpeedMeetsQuery";
import { useQueryClient } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";

const SpeedMeetList = () => {
    const queryClient = useQueryClient();

    const { page } = useParams();
    const { data: speedMeetList, isPending } = useGetSpeedMeetsQuery(page);

    const onPageMouseOver = (page) => {
        queryClient.prefetchQuery({
            queryKey: [queryKey.default.speedMeets(page)],
            queryFn: () => meetApi.getSpeedMeets(page)
        });
    };

    if (isPending) {
        return <SpeedMeetListSkelton />;
    }
    const last = speedMeetList.last;

    return (
        <div className="h-lvh bg-[#214A00] flex flex-col justify-center items-center">
            <div className="bg-white w-[1200px] rounded-xl flex flex-col mb-6">
                <div className="w-[100%] h-[50px] flex p-4 border-b-4 border-slate-500 items-center">
                    <span className="w-[15%]">산</span>
                    <span className="w-[50%]">제목</span>
                    <span className="w-[10%]">모집인원</span>
                    <span className="w-[]">작성자</span>
                    <div className="ml-auto">
                        <Link to="/speed-meet-write">
                            <button className="bg-[#ff9f1c] py-[3px] px-[10px] rounded-[7px] mr-[10px] text-white">
                                글쓰기
                            </button>
                        </Link>
                    </div>
                </div>

                <ul className="w-[100%] flex flex-col">
                    {speedMeetList.map((item) => {
                        return (
                            <li
                                key={item.id}
                                className="w-[100%] flex p-4 border-b-2 border-zinc-600"
                                // onMouseOver={() => onPostMouseOver(item.id)}
                            >
                                <span className="w-[15%] h-[25px]">{item.mntnnm}</span>
                                <div className="w-[50%]">
                                    <Link to={`/speed-meet-detail/${item.id}`}>
                                        <p>{item.title}</p>
                                    </Link>
                                </div>
                                <span className="w-[10%]">{`${item.attendance}/${item.capacity}`}</span>
                                <span>{item.userId}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="">
                <Pagination last={last} url="/speed-meet" current={page} onMouseOver={onPageMouseOver}></Pagination>
            </div>
        </div>
    );
};

export default SpeedMeetList;
