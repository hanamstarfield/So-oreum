import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import MtCardDefaultImg from "@/assets/MtCardDefault.jpg";
import LightningImg from "@/assets/Lightning.png";
import { useState } from "react";

const MtCard = ({ mount, latlng, setSelectedLocation }) => {
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
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [searchMt, setSearchMt] = useState("");
    const [showSuggestions, setShowSuggestions] = useState(false);

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

    const searchSuggestions = filteredByCategory.filter((item) => item.mntnnm.includes(searchMt));

    const handleSearchChange = (e) => {
        setSearchMt(e.target.value);
        setShowSuggestions(true);
    };

    const handleMountainClick = (latitude, longitude) => {
        setSelectedLocation({ latitude, longitude });
    };

    if (isLoading) {
        return <div>로딩 중입니다...</div>;
    }

    if (isError) {
        return <div>데이터 조회 중 오류가 발생했습니다...</div>;
    }
    return (
        <div>
            <div className="flex justify-center mb-[10px] mt-[10px] mr-10 relative rounded-[10px]">
                <input
                    type="text"
                    placeholder="산 검색"
                    value={searchMt}
                    onChange={handleSearchChange}
                    className="border p-2 rounded"
                />
                {showSuggestions && searchMt && (
                    <ul className="absolute bg-white border rounded mt-1 w-[200px] max-h-[150px] overflow-y-auto top-full left-16 z-10">
                        {searchSuggestions.map((item) => (
                            <li
                                key={item.mntnid}
                                className="px-3 py-2 cursor-pointer hover:bg-gray-200"
                                onClick={() => {
                                    handleMountainClick(item.latitude, item.longitude);
                                    setSearchMt(item.mntnnm);
                                    setShowSuggestions(false);
                                }}
                            >
                                {item.mntnnm}
                            </li>
                        ))}
                    </ul>
                )}
                <button
                    className={`mx-2 px-5 py-1 rounded-full ${
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
            <div className="flex flex-wrap w-[800px] h-[750px] leading-loose overflow-y-scroll cursor-pointer">
                {filteredByCategory.map((item) => (
                    <div key={item.mntnid} className="flex w-[250px] h-[320px]">
                        <div
                            className="bg-white rounded-[15px] p-[15px] my-[10px] mx-[5px] box-contents brightness-100 hover:brightness-90 duration-100"
                            onClick={() => {
                                handleMountainClick(item.latitude, item.longitude);
                                navigate(`/mntn-detail?mntnId=${item.mntnid}`);
                            }}
                        >
                            <div className="flex justify-end items-center px-[10px] text-[13px]">
                                <img src={LightningImg} className="w-[20px] h-[20px] object-cover" />
                                <span> {data.filter((sp) => item.mntnid === sp.mntnid).length}</span>
                            </div>
                            <img
                                className="w-[220px] h-[150px] object-cover rounded-[15px]"
                                src={item.mntnattchimageseq}
                                alt={`${item.mntnnm} 이미지`}
                            />
                            <div className="flex justify-between items-center mt-[5px] px-[10px]">
                                <p>
                                    <strong>{item.mntnnm}</strong>
                                </p>
                                <p className="text-[12px]">정상 {item.mntninfohght}m</p>
                            </div>
                            <p className="text-[12px] px-[10px] ">{item.mntninfopoflc}</p>
                        </div>
                    </div>
                ))}
                {filteredByCategory.length === 0 && (
                    <img src={MtCardDefaultImg} className="flex mt-[150px] w-[600px] h-[400px] object-cover" />
                )}
            </div>
        </div>
    );
};

export default MtCard;
