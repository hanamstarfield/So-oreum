import { useState } from "react";
import { login } from "../api/auth";
import useUserStore from "../zustand/useUserStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import MtSign from "../assets/MtSign.png";

const Login = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { logInUser } = useUserStore((state) => state);

    const [userData, setUserData] = useState({
        id: "",
        password: ""
    });

    const { mutate } = useMutation({
        mutationFn: login,
        onSuccess: (data) => {
            if (data.success) {
                alert("로그인 되었습니다.");
                logInUser(data);
                queryClient.invalidateQueries(["user"]);
                navigate("/");
            } else {
                alert(data.message);
                setUserData({
                    id: "",
                    password: ""
                });
            }
        }
    });

    const onSubmitHandler = (e) => {
        e.preventDefault();
        mutate(userData);
    };

    return (
        <div
            className="flex h-screen bg-fefae0 items-center justify-center p-8"
            style={{ backgroundImage: `url(${MtSign})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md border border-gray-300">
                <h2 className="text-3xl font-bold text-center mb-6 text-green-800">로그인</h2>
                <form onSubmit={onSubmitHandler} className="space-y-4">
                    <div>
                        <input
                            type="text"
                            value={userData.id}
                            onChange={(e) => setUserData({ ...userData, id: e.target.value })}
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="ID"
                            required
                        />
                        <input
                            type="password"
                            value={userData.password}
                            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="PW"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white p-3 rounded hover:bg-green-600 transition"
                    >
                        로그인
                    </button>
                </form>
                <div className="text-center mt-4">
                    <p>계정이 없으신가요?</p>
                    <Link to="/signup" className="text-green-500 hover:underline">
                        회원가입
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
