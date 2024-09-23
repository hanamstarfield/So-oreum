import { useState } from "react";
import useUserStore from "../zustand/useUserStore";
import Mypage_Post from "../components/Mypage_Post";
import Mypage_Attendee from "../components/Mypage_Attendee";
import cow1 from "../assets/myPage1.png";
import "../css/Mypage.css";

const Mypage = () => {
    const { user, logOutUser } = useUserStore((state) => state);
    const [showAttendee, setshowAttendee] = useState(true);

    const TabData = [
        { id: 1, button: "내가 쓴 글" },
        { id: 2, button: "내가 신청한 벙개" }
    ];
    const [activeTab, setActiveTab] = useState(TabData[0].id);
    return (
        <div className="h-[91vh] up_container bg-[#214A00]">
            <div className="main_Container">
                <div className="Profile">
                    <img src={cow1} alt="소오름 프로필" className="cowProfile" />
                    <p>{user.nickname}</p>
                </div>
                <div className="postBody">
                    <div>
                        {TabData.map((tab) => (
                            <button
                                className="tabButton"
                                key={tab.id}
                                data-active={activeTab === tab.id ? "true" : "false"}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.button}
                            </button>
                        ))}
                    </div>
                    {activeTab === 2 ? <Mypage_Attendee /> : <Mypage_Post />}
                </div>
            </div>
        </div>
    );
};

export default Mypage;
