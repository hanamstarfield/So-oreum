import { Link, Navigate, useNavigate } from "react-router-dom";
import useUserStore from "../zustand/useUserStore";
// import getPostData from "@/queries/useGetPost";
import "../css/Mypage.css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Mypage_Post = () => {
    // const { data: PostData, isPending: postPending } = getPostData();
    const { user, logOutUser } = useUserStore((state) => state);

    const getPost = async () => {
        const { data } = await axios.get("http://localhost:4000/speedMeets");
        return data;
    };

    const { data: PostData, isLoading: postLoading } = useQuery({
        queryKey: ["post"],
        queryFn: getPost
    });

    console.log(user);
    console.log("PostData", PostData);

    if (postLoading) {
        return <div>로딩중...</div>;
    }

    return (
        <div className="postBody">
            {PostData.map((post) => {
                return user.userId === post.userId ? <div>{post.title}</div> : "데이터 미출력";
            })}
        </div>
    );
};

export default Mypage_Post;
