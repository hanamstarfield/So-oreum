import { useNavigate } from "react-router-dom";

const MtCard = ({ mount }) => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-wrap w-[800px] h-[800px] leading-loose overflow-y-scroll cursor-pointer">
            {mount.map((item) => {
                return (
                    <div key={item.mntnid}>
                        <div
                            className="w-[250px]  bg-white rounded-[15px] p-[15px] my-[10px] mx-[5px] box-contents brightness-100  hover:brightness-90 duration-100"
                            onClick={() => navigate(`/mntn-detail?mntnNm=${item.mntnnm}`)}
                        >
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
                );
            })}
        </div>
    );
};

export default MtCard;
