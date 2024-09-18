const MtCard = ({ mount }) => {
    return (
        <div>
            {mount.map((item) => (
                <div key={item.mntnid}>
                    <img src={item.mntnattchimageseq} />
                    <h3>{item.mntnnm}</h3>
                </div>
            ))}
        </div>
    );
};

export default MtCard;
