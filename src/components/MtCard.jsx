import { Link } from "react-router-dom";

const MtCard = ({ mount }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {mount.map((item) => (
                <Link
                    key={item.mntnid}
                    to={`/mntn-detail?mntnNm=${item.mntnnm}`}
                    className="border-gray-300 rounded-lg bg-white shadow-md block"
                >
                    <div className="overflow-hidden">
                        <img
                            src={item.mntnattchimageseq}
                            className="w-full h-72 object-cover rounded-t-lg"
                            alt={item.mntnnm}
                        />
                    </div>
                    <div className="p-4">
                        <h3 className="text-lg font-semibold">{item.mntnnm}</h3>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default MtCard;
