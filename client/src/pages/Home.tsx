import React, {FC} from 'react';
import Header from "../components/Header";
import Playlists from "../components/Playlists";

const Home: FC = () => {
    return (
        <div className="flex flex-col bg-neutral-900 h-full border-0 rounded-lg m-1  ">
           <Header/>
            <Playlists/>
        </div>
    );
};

export default Home;