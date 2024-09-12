import { useState } from "react";
import { login } from "../api/auth";
import useUserStore from "../zustand/useUserStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const Login = () => {
    const queryClient = useQueryClient();
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
        <div>
            <h2>로그인</h2>
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

                <button type="submit">로그인</button>
            </form>
            <div>
                <p>계정이 없으신가요?</p>
                <Link to="/signup">회원가입</Link>
            </div>
        </div>
    );
};

export default Login;
