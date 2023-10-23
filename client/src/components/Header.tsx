import React, {FC} from 'react';
import {BiLeftArrow, BiRightArrow} from "react-icons/bi";

const Header: FC = () => {
    return (
        <div className="bg-neutral-950 rounded-t p-2 flex justify-between">
            <div className="mx-4 flex gap-3 items-center">
                <div className="border-black"><BiLeftArrow size={25} className="text-neutral-400 rounded-full bg-black"/></div>
                <div className="border-black"><BiRightArrow size={25} className="text-neutral-400  rounded-full bg-black"/></div>
            </div>
            <div className="mx-4 flex gap-6 items-center">
                <span className="text-neutral-400 font-bold">Sign up</span>
                <span className="px-8 py-3 border font-bold bg-white text-black rounded-full">Log in</span>
            </div>

        </div>
    );
};

export default Header;