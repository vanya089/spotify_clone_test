import React from 'react';
import playlists from '../playlists.json'
import Playlist from "./playlist/Playlist";
import PlaylistSkeleton from "./playlist/PlaylistSkeleton";

let status = 'success'
const items = Array.isArray(playlists) ? playlists.map((obj) => <Playlist key={obj._id} {...obj}/>) : [];
const skeletons = [...new Array(12)].map((_, index) => <PlaylistSkeleton key={index}/>);
const Playlists = () => {
    return (
        <div className="p-2 bg-neutral-900 h-full rounded-b-md overflow-y-scroll">
            <section>
                <div className="grid grid-cols-6 grid-rows-2 ">
                    {status === 'loading' ? skeletons : items}
                </div>
            </section>
            <div>
                <nav></nav>
            </div>
        </div>
    );
};

export default Playlists;