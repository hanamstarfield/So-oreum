import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const getPost = async () => {
    const { data } = await axios.get("http://localhost:4000/speedMeets");
    return data;
};

const getPostData = useQuery({
    queryKey: ["post"],
    queryFn: getPost
});

export default getPostData;
