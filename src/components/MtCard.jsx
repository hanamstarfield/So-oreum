import { useNavigate } from "react-router-dom";
import MtCardDefaultImg from "@/assets/MtCardDefault.png";
import { useState } from "react";

const MtCard = ({ mount, latlng }) => {
    const navigate = useNavigate();
    const { swLatlng, nwLatlng } = latlng;
    const [selectedCategory, setSelectedCategory] = useState("all");

    const filteredMntns = mount.filter(
        (item) =>
            swLatlng.La <= item.longitude &&
            nwLatlng.La >= item.longitude &&
            swLatlng.Ma <= item.latitude &&
            nwLatlng.Ma >= item.latitude
    );
    const filteredByCategory = filteredMntns.filter((item) => {
        if (selectedCategory === "low") return item.mntninfohght <= 200;
        if (selectedCategory === "mid") return item.mntninfohght > 200 && item.mntninfohght <= 400;
        if (selectedCategory === "high") return item.mntninfohght > 400;
        return item;
    });

    return (
        <div>
            <div className="flex justify-center">
                <button
                    className={`mx-2 px-3 py-1 rounded-full ${
                        selectedCategory === "all" ? "bg-lime-600 text-white" : "bg-gray-300"
                    }`}
                    onClick={() => setSelectedCategory("all")}
                >
                    전체
                </button>
                <button
                    className={`mx-2 px-4 rounded-full ${
                        selectedCategory === "low" ? "bg-lime-600 text-white" : "bg-gray-300"
                    }`}
                    onClick={() => setSelectedCategory("low")}
                >
                    200m 이하
                </button>
                <button
                    className={`mx-2 px-4 rounded-full ${
                        selectedCategory === "mid" ? "bg-lime-600 text-white" : "bg-gray-300"
                    }`}
                    onClick={() => setSelectedCategory("mid")}
                >
                    200m ~ 400m
                </button>
                <button
                    className={`mx-2 px-4 rounded-full ${
                        selectedCategory === "high" ? "bg-lime-600 text-white" : "bg-gray-300"
                    }`}
                    onClick={() => setSelectedCategory("high")}
                >
                    400m 이상
                </button>
            </div>
            <div className="flex flex-wrap w-[800px] h-[800px] leading-loose overflow-y-scroll cursor-pointer">
                {filteredByCategory.length > 0 ? (
                    filteredByCategory.map((item) => (
                        <div key={item.mntnid} className="w-[250px]">
                            <div
                                className="bg-white rounded-[15px] p-[15px] my-[10px] mx-[5px] box-contents brightness-100 hover:brightness-90 duration-100"
                                onClick={() => navigate(`/mntn-detail?mntnId=${item.mntnid}`)}
                            >
                                <img
                                    className="w-[220px] h-[150px] object-cover rounded-[15px]"
                                    src={item.mntnattchimageseq || MtCardDefaultImg}
                                    alt={`${item.mntnnm} 이미지`}
                                />
                                <div className="flex justify-between items-center mt-[5px] px-[10px]">
                                    <p>
                                        <strong>{item.mntnnm}</strong>
                                    </p>
                                    <p className="text-[12px]">정상 {item.mntninfohght}m</p>
                                </div>
                                <p className="text-[12px] px-[10px]">{item.mntninfopoflc}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <img src={MtCardDefaultImg} className="flex mt-[150px] w-[600px] h-[400px] object-cover" />
                )}
            </div>
        </div>
    );
};

export default MtCard;
