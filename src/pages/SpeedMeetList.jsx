import useGetSpeedMeetsQuery from "@/queries/useGetSpeedMeetsQuery";
import React from "react";
import { Link } from "react-router-dom";

const SpeedMeetList = () => {
    const { data: speedMeets, isPending } = useGetSpeedMeetsQuery();

    if (isPending) {
        return <>... 로딩</>;
    }

    return (
        <ul>
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
    );
};

export default SpeedMeetList;
