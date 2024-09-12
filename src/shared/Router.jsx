import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import MtDetail from "../pages/MtDetail";
import Mypage from "../pages/Mypage";
import HikeEventDetail from "../pages/HikeEventDetail";
import HikeEventForm from "../pages/HikeEventForm";
import Home from "../pages/Home";
import Layout from "../components/Layout";
import ProtectedRoute from "../components/ProtectedRoute";

const Router = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />

                    <Route
                        path="/mtDetail"
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
                        path="/hikeEventDetail"
                        element={
                            <ProtectedRoute>
                                <HikeEventDetail />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/hikeEventForm"
                        element={
                            <ProtectedRoute>
                                <HikeEventForm />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default Router;
