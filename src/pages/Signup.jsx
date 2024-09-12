import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../api/auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";

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
        <div>
            <h2>회원가입</h2>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <input
                        type="text"
                        value={userData.id}
                        onChange={(e) => setUserData({ ...userData, id: e.target.value })}
                        placeholder="ID"
                        required
                    />
                    <input
                        type="password"
                        value={userData.password}
                        onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                        placeholder="PW"
                        required
                    />
                </div>
                <input
                    type="text"
                    value={userData.nickname}
                    onChange={(e) => setUserData({ ...userData, nickname: e.target.value })}
                    placeholder="NickName"
                    required
                />

                <button>회원가입</button>
            </form>
            <div className="flex items-center gap-2 text-sm">
                <p>이미 계정이 있으신가요?</p>
                <Link to="/login">로그인</Link>
            </div>
        </div>
    );
};

export default Signup;
