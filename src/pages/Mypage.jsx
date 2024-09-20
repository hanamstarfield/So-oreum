import { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import useUserStore from "../zustand/useUserStore";
import "../css/Mypage.css";
import Mypage_Post from "../components/Mypage_Post";
import cow1 from "../assets/myPage1.png";
import cow2 from "../assets/myPage2.png";

const Mypage = () => {
    const { user, logOutUser } = useUserStore((state) => state);
    console.log(user);

    return (
        <div className="h-[90vh] up_container bg-[#214A00]">
            <div className="main_Container">
                <div className="Profile">
                    <img src={cow1} alt="소오름 프로필" className="cowProfile" />
                    <p>{user.nickname}</p>
                </div>
                <div>
                    <Mypage_Post />
                </div>
            </div>
        </div>
    );
};

export default Mypage;
