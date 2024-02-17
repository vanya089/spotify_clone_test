import React, {FC} from 'react';


let login = false
const Player: FC = () => {
    return (
        <div className="w-full min-h-[65px]">
            {login ? (
                <div className="flex w-full h-14">
                    player
                </div>
            ) : (
                <div
                    className="flex justify-between  px-4 py-1 bg-gradient-to-r from-fuchsia-500 via-blue-900 to-blue-400">
                    <div>
                        <p>Preview of Spotify</p>
                        <p>Sing up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
                    </div>
                    <button className=" bg-amber-50 text-black font-medium border rounded-3xl px-6">Sing up free</button>
                </div>
            )}
        </div>
    )

}

export default Player;