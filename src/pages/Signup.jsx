import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../api/auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import MtSign from "../assets/MtSign.png";

const Signup = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        id: "",
        password: "",
        nickname: ""
    });

    const { mutate } = useMutation({
        mutationFn: register,
        onSuccess: (data) => {
            if (data.success) {
                alert(data.message);
                navigate("/");
                queryClient.invalidateQueries(["user"]);
            } else {
                alert(data.message);
                setUserData({
                    id: "",
                    password: "",
                    nickname: ""
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
            className="flex h-screen bg-green-200 items-center justify-center p-8"
            style={{ backgroundImage: `url(${MtSign})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md border border-gray-300">
                <h2 className="text-3xl font-bold text-center mb-6 text-green-800">회원가입</h2>
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
                        <input
                            type="text"
                            value={userData.nickname}
                            onChange={(e) => setUserData({ ...userData, nickname: e.target.value })}
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="NickName"
                            required
                        />
                    </div>
                    <button className="w-full bg-green-500 text-white p-3 rounded hover:bg-green-700 transition">
                        회원가입
                    </button>
                </form>
                <div className="text-center mt-4">
                    <p>이미 계정이 있으신가요?</p>
                    <Link to="/login" className="text-green-600 hover:underline">
                        로그인
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Signup;
