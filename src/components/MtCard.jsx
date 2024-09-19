import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import MtCardDefaultImg from "@/assets/MtCardDefault.jpg";
import LightningImg from "@/assets/Lightning.png";

const MtCard = ({ mount, latlng }) => {
    const API_URL = "http://localhost:4000/speedMeets";

    const fetchData = async () => {
        const response = await axios.get(API_URL);
        return response.data;
    };

    const { data, isLoading, isError } = useQuery({
        queryKey: ["speedMeets"],
        queryFn: fetchData
    });

    const navigate = useNavigate();
    const { swLatlng, nwLatlng } = latlng;

    const filteredMntns = mount.filter(
        (item) =>
            swLatlng.La <= item.longitude &&
            nwLatlng.La >= item.longitude &&
            swLatlng.Ma <= item.latitude &&
            nwLatlng.Ma >= item.latitude
    );

    // const filteredSPList = data.filter((sp) => item.mntnid === sp.mntnid);

    if (isLoading) {
        return <div>로딩 중입니다...</div>;
    }

    if (isError) {
        return <div>데이터 조회 중 오류가 발생했습니다...</div>;
    }
    return (
        <div className="flex flex-wrap w-[800px] h-[800px] leading-loose overflow-y-scroll cursor-pointer">
            {filteredMntns.length > 0 ? (
                filteredMntns.map((item) => (
                    <div key={item.mntnid}>
                        <div
                            className="w-[250px]  bg-white rounded-[15px] p-[15px] my-[10px] mx-[5px] box-contents brightness-100  hover:brightness-90 duration-100"
                            onClick={() => navigate(`/mntn-detail?mntnId=${item.mntnid}`)}
                        >
                            <div className="flex justify-end items-center px-[10px] text-[13px]">
                                <img src={LightningImg} className="w-[20px] h-[20px] object-cover" />
                                <span> {data.filter((sp) => item.mntnid === sp.mntnid).length}</span>
                            </div>
                            <img
                                className="w-[220px] h-[150px] object-cover rounded-[15px]"
                                src={item.mntnattchimageseq}
                            />
                            <div className="flex justify-between items-center mt-[5px] px-[10px]">
                                <p>
                                    <strong>{item.mntnnm}</strong>
                                </p>
                                <p className="text-[12px]"> 정상 {item.mntninfohght}m</p>
                            </div>
                            <p className="text-[12px]  px-[10px]">{item.mntninfopoflc}</p>
                        </div>
                    </div>
                ))
            ) : (
                <img src={MtCardDefaultImg} className="flex mt-[150px] w-[600px] h-[400px] object-cover  " />
            )}
        </div>
    );
};

export default MtCard;
