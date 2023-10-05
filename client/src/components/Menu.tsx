import React, {FC} from 'react';
import {BiLogoSpotify, BiSearch} from "react-icons/bi";
import {HiHome} from "react-icons/hi";



const Menu:FC = () => {
    return (
        <div className="bg-neutral-900 h-[180px] border-0 rounded-lg m-1 p-2">
            <div className="ml-5 mt-2 flex gap-3 flex-col">
                <div className="flex flex-row gap-2">
                    <BiLogoSpotify size={40}/>
                    <p>Spotify</p>
                </div>
                <div className="flex flex-row gap-2">
                    <HiHome/>
                    <p>Home</p>

                </div>
                <div className="flex flex-row gap-2">
                    <BiSearch/>
                    <p>Search</p>
                </div>
            </div>


        </div>
    );
};

export default Menu;