import React from "react";
import { BsFillCalendarHeartFill } from "react-icons/bs";

const DateSelection = () => {
    return (
        <div>
            <input type="text" value="" placeholder="placeholder" />
            <button type="button">
                <BsFillCalendarHeartFill />
            </button>
        </div>
    );
};

export default DateSelection;
