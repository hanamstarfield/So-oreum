import { useNavigate } from "react-router-dom";
import useUserStore from "../zustand/useUserStore";
import "../css/Mypage.css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import Pagination from "react-js-pagination";
import openChat from "../assets/chat.png";

const Mypage_Post = () => {
    // const { data: PostData, isPending: postPending } = getPostData();
    const { user, logOutUser } = useUserStore((state) => state);
    const [page, setPage] = useState(1); // 페이지
    const [items, setItems] = useState(10);

    const navigate = useNavigate();

    // const getAttendee = async () => {
    //     const { data } = await axios.get(
    //         `https://hushed-violet-polo.glitch.me/speedMeetAttendee?userId=${user.userId}`
    //     );
    //     return data;
    // };

    // const { data: AttendeeData, isLoading: attendeeLoading } = useQuery({
    //     queryKey: ["attendance"],
    //     queryFn: getAttendee
    // });
    
    // console.log(user);
    // console.log("AttendeeData", AttendeeData);

    const getPostAttendance = async () => {
        const { data } = await axios.get(`https://hushed-violet-polo.glitch.me/speedMeets?_embed=speedMeetAttendee`);
        return data.filter((data) => {
            const aaa = data.speedMeetAttendee.filter((speedMeetAttendee) => {
                console.log(speedMeetAttendee.userId);
                console.log(user.userId);
                console.log(speedMeetAttendee);
                return speedMeetAttendee.userId === user.userId;
            },
                console.log(aaa)) ===
                user.userId;
            
        });
    };
    const { data: AttendeePostData, isLoading: attendeePostLoading } = useQuery({
        queryKey: ["post"],
        queryFn: getPostAttendance
    });

    const handlePageChange = (page) => {
        setPage(page);
    };

    console.log("AttendeePostData", AttendeePostData);

    if ( attendeePostLoading) {
        return <div>로딩중...</div>;
    }

    return (
        <div>
            <div className="postMainBody">
                {AttendeePostData.slice(items * (page - 1), items * (page - 1) + items) //slice를 이용해 보여주고싶은 게시물 제어
                    .map((post) => {
                        return (
                            <div
                                className="post"
                                onClick={() => {
                                    console.log(post.speedMeetAttendee[0]);
                                }}
                            >
                                <p
                                    onClick={() => {
                                        navigate(`/speed-meet-detail/${post.id}`);
                                    }}
                                >
                                    <span style={{ color: "#383838" }}>[{post.mntnnm}]</span> {post.title}
                                </p>
                                <img
                                    src={openChat}
                                    alt="오픈채팅 링크"
                                    className="openChat"
                                    onClick={() => {
                                        window.open(post.chatLink + console.log(post.chatLink));
                                    }}
                                />
                            </div>
                        );
                        // ) : (
                        //     "퇴각하라"
                        // );
                    })}
            </div>
            <div>
                <Pagination
                    className="pagination"
                    activePage={page}
                    itemsCountPerPage={10}
                    prevPageText={"‹"}
                    nextPageText={"›"}
                    totalItemsCount={AttendeePostData.length - 1}
                    pageRangeDisplayed={5}
                    onChange={handlePageChange}
                ></Pagination>
            </div>
        </div>
    );
};

export default Mypage_Post;
