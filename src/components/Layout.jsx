import { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import useUserStore from "../zustand/useUserStore";
import homeImg from "../assets/SpCardDefault.png";
import github from "../assets/GithubIcon.png";
import velog from "../assets/VelogIcon.png";
import tlog from "../assets/TstoryIcon.png";

const Layout = ({ children }) => {
    const navigate = useNavigate();
    const { user, logOutUser } = useUserStore((state) => state);

    useEffect(() => {
        if (!user.success) {
            navigate("/");
        }
    }, [user.success]);

    const handleLogout = () => {
        logOutUser();
        alert("로그아웃 되었습니다.");
        return <Navigate to="/" />;
    };

    return (
        <div>
            <header className="h-[60px] box-border py-[5px] pl-[50px] pr-[100px] bg-[#FEFAE0]">
                <nav className="flex flex-row justify-between text-[16px] min-w-[800px] items-center">
                    <Link to="/">
                        <img src={homeImg} alt="홈" className="w-[40px]" />
                    </Link>

                    {user.success ? (
                        <div className="flex gap-[15px]">
                            <Link to="/speed-meet/1">벙개!</Link>
                            <span>|</span>
                            <Link to="/mypage">마이페이지</Link>
                            <span>|</span>
                            <button onClick={handleLogout}>로그아웃</button>
                        </div>
                    ) : (
                        <div className="flex gap-[15px]">
                            <Link to="/signup">회원가입</Link>
                            <Link to="/login">로그인</Link>
                        </div>
                    )}
                </nav>
            </header>
            <main>{children}</main>
            <footer className="relative text-black py-3">
                <div className="container mx-auto px-4">
                    <ul className="flex flex-wrap justify-center gap-8">
                        <li className="flex items-end gap-4">
                            <span className="text-lg font-semibold">유현지</span>
                            <Link to="https://gecko0012.tistory.com/">
                                <img src={tlog} alt="tlog" />
                            </Link>
                            <Link to="https://github.com/za0012">
                                <img src={github} alt="github" />
                            </Link>
                        </li>
                        <li className="flex items-end gap-4">
                            <span className="text-lg font-semibold">이준열</span>
                            <Link to="https://reactjy2.tistory.com/">
                                <img src={tlog} alt="tlog" />
                            </Link>
                            <Link to="https://github.com/LeeJY97">
                                <img src={github} alt="github" />
                            </Link>
                        </li>
                        <li className="flex items-end gap-4">
                            <span className="text-lg font-semibold">한수빈</span>
                            <Link to="https://onetwothreechachacha.tistory.com/">
                                <img src={tlog} alt="tlog" />
                            </Link>
                            <Link to="https://github.com/hansub1n">
                                <img src={github} alt="github" />
                            </Link>
                        </li>
                        <li className="flex items-end gap-4">
                            <span className="text-lg font-semibold">송진우</span>
                            <Link to="https://velog.io/@qnfdmlto/">
                                <img src={velog} alt="velog" />
                            </Link>
                            <Link to="https://github.com/hanamstarfield">
                                <img src={github} alt="github" />
                            </Link>
                        </li>
                        <li className="flex items-end gap-4">
                            <span className="text-lg font-semibold">이예람</span>
                            <Link to="https://svt012.tistory.com/">
                                <img src={tlog} alt="tlog" />
                            </Link>
                            <Link to="https://github.com/leeyeram84">
                                <img src={github} alt="github" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
