import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import MtDetail from "../pages/MtDetail";
import Mypage from "../pages/Mypage";
import Home from "../pages/Home";
import Layout from "../components/Layout";
import ProtectedRoute from "../components/ProtectedRoute";
import SpeedMeetList from "@/pages/SpeedMeetList";
import SpeedMeetDetail from "@/pages/SpeedMeetDetail";
import SpeedMeetWrite from "@/pages/SpeedMeetWrite";

const Router = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />

                    <Route
                        path="/mntn-detail"
                        element={
                            <ProtectedRoute>
                                <MtDetail />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/mypage"
                        element={
                            <ProtectedRoute>
                                <Mypage />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/speed-meet/:page"
                        element={
                            <ProtectedRoute>
                                <SpeedMeetList />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/speed-meet-detail/:id"
                        element={
                            <ProtectedRoute>
                                <SpeedMeetDetail />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/speed-meet-write"
                        element={
                            <ProtectedRoute>
                                <SpeedMeetWrite />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default Router;
