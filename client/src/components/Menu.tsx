import React, {FC} from 'react';
import {BiLogoSpotify, BiSearch} from "react-icons/bi";
import {HiHome} from "react-icons/hi";


const Menu: FC = () => {
    return (
        <div className="bg-neutral-900 h-[170px] border-0 rounded-lg m-1 p-2">
            <div className="ml-5 mt-3 flex gap-5 flex-col text-lg">
                <div className="flex flex-row items-center font-medium">
                    <BiLogoSpotify size={30}/>
                    <p className="text-base">Spotify</p>
                </div>
                <div className="flex flex-row gap-2 font-bold items-center">
                    <HiHome size={30}/>
                    <p className="ml-2">Home</p>
                </div>
                <div className="flex flex-row gap-2 font-bold text-neutral-400 items-center">
                    <BiSearch size={30}/>
                    <p className="ml-2">Search</p>
                </div>
            </div>
        </div>
    );
};

export default Menu;