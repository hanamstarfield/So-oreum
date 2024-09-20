import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ToastPortal from "./toast/Toast.jsx";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
    <QueryClientProvider client={queryClient}>
        <ToastPortal />
        <App />
    </QueryClientProvider>
);
