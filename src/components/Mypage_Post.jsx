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

    const getPost = async () => {
        const { data } = await axios.get("https://hushed-violet-polo.glitch.me/speedMeets");
        return data.filter((data) => user.userId === data.userId);
    };

    const { data: PostData, isLoading: postLoading } = useQuery({
        queryKey: ["post"],
        queryFn: getPost
    });

    const handlePageChange = (page) => {
        setPage(page);
    };

    console.log(user);
    console.log("PostData", PostData);

    if (postLoading) {
        return <div>로딩중...</div>;
    }

    return (
        <div>
            <div className="postMainBody">
                {PostData.slice(items * (page - 1), items * (page - 1) + items) //slice를 이용해 보여주고싶은 게시물 제어
                    .map((post) => {
                        return (
                            <div className="post">
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
                    })}
            </div>
            <div>
                <Pagination
                    className="pagination"
                    activePage={page}
                    itemsCountPerPage={10}
                    prevPageText={"‹"}
                    nextPageText={"›"}
                    totalItemsCount={PostData.length - 1}
                    pageRangeDisplayed={5}
                    onChange={handlePageChange}
                ></Pagination>
            </div>
        </div>
    );
};

export default Mypage_Post;
