import { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import useUserStore from "../zustand/useUserStore";

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
        return <Navigate to="/" />;
    };

    return (
        <div>
            <header>
                <nav>
                    <Link to="/">홈</Link>

                    {user.success ? (
                        <div>
                            <Link to="/mypage">마이페이지</Link>
                            <button onClick={handleLogout}>로그아웃</button>
                        </div>
                    ) : (
                        <div>
                            <Link to="/signup">회원가입</Link>
                            <Link to="/login">로그인</Link>
                        </div>
                    )}
                </nav>
            </header>
            <main>{children}</main>
        </div>
    );
};

export default Layout;
