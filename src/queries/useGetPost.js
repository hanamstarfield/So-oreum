import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const getPost = async () => {
    const { data } = await axios.get("https://hushed-violet-polo.glitch.me/speedMeets");
    return data;
};

const getPostData = useQuery({
    queryKey: ["post"],
    queryFn: getPost
});

export default getPostData;
