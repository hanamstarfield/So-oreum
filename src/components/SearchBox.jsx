import React from "react";

const SearchBox = ({ list, handleSetMountain }) => {
    return (
        <ul className="absolute top-0 left-52 bg-slate-300 w-[150px]">
            {list.map((item) => {
                return (
                    <li
                        key={item.id}
                        onClick={(e) => {
                            console.log("click");
                            e.stopPropagation();
                            handleSetMountain(item);
                        }}
                        onMouseEnter={() => {
                            console.log("onHover");
                        }}
                    >
                        {item.mntnnm}
                    </li>
                );
            })}
        </ul>
    );
};

export default SearchBox;
