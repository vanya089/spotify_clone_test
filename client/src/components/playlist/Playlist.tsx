import React, {FC} from 'react';
import {PlaylistType} from "../../redux/Playlists/types";
let maxLength = 45
const Playlist: FC<PlaylistType> = ({title,description, imageUrl}) => {
    return (
        <div>
            <div className="w-52 h-72 text-center my-10">
                <img className="inline mb-5 w-44 h-44 rounded-t" width={276} height={414} src={imageUrl}
                     alt="review"/>
                <h3 className="text-xl font-extrabold mb-5 ">{title}</h3>
                <p className="text-gray-400 ">
                    {description.length > maxLength ? description.substring(0, maxLength) + '...': description}
                </p>
            </div>
        </div>
    );
};

export default Playlist;