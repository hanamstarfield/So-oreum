import useUserStore from "../zustand/useUserStore";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const { user } = useUserStore((state) => state);
    if (!user.success) {
        alert("먼저 로그인 해주세요!");
        return <Navigate to="/" />;
    }
    return children;
};

export default ProtectedRoute;
