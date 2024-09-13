import { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import useUserStore from "../zustand/useUserStore";
import '../css/Mypage.css'
import cow1 from "../img/myPage1.png";
import cow2 from "../img/myPage2.png";

const Mypage = () => {
    const { user, logOutUser } = useUserStore((state) => state);
    console.log(user)

    return (
        <>
            <div className="main_Container">
                <div className="Profile">
                    <img src={cow1} alt="소오름 프로필" className="cowProfile"/>
                    <div>{user.nickname}</div>
                </div>
                <div>게시글</div>
            </div>
        </>
    );
};

export default Mypage;
