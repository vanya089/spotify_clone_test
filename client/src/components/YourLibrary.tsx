import React, {FC} from 'react';
import {AiOutlinePlus} from "react-icons/ai";
import {LuList} from "react-icons/lu";
import {ImEarth} from "react-icons/im";

const YourLibrary: FC = () => {
    return (
        <div className="flex-grow bg-neutral-900 border-0 rounded-lg m-1 p-2">
            <div className="flex flex-col p-2 ">
                <div className="flex flex-row justify-between items-center">
                    <div className="inline-flex  px-2">
                        <LuList className="text-neutral-400" size={30}/>
                        <p className="ml-2 font-bold text-lg text-neutral-400">Your Library</p>
                    </div>
                    <AiOutlinePlus className="text-neutral-400" size={20}/>
                </div>
                <div className="flex flex-col gap-36">
                    <div className="my-6 min-h-full">
                        <section className="w-full h-full px-5 py-4 my-1 bg-neutral-800 rounded-md ">
                            <h2 className="mb-2 font-bold">Create your first playlist</h2>
                            <p className="mb-4 font-semibold text-sm text-gray-200">It's easy, we'll help you</p>
                            <button className="p-1 px-4 border rounded-2xl bg-white text-black text-sm font-bold ">
                                Create playlist
                            </button>
                        </section>
                        <section className="w-full h-full px-5 py-4 my-4 bg-neutral-800 rounded-md ">
                            <h2 className="mb-1 font-bold">Let's find some podcasts to follow</h2>
                            <p className="mb-4 font-semibold text-sm text-gray-200">We'll keep you updated on new
                                episodes</p>
                            <button className="p-1 px-4 border rounded-2xl bg-white text-black text-sm font-bold ">
                                Browse podcast
                            </button>
                        </section>
                    </div>
                    <div className="h-full">
                        <div className=" my-8 px-6 text-start text-xs text-neutral-400">
                            <div className="flex flex-wrap">
                                <div className="mr-4 mb-4">
                                    <a href="#"><span>Legal</span></a>
                                </div>
                                <div className="mr-4 mb-4">
                                    <a href="#"><span>Privacy center</span></a>
                                </div>
                                <div className="mr-4 mb-4">
                                    <a href="#"><span>Privacy policy</span></a>
                                </div>
                                <div className="mr-4 mb-4">
                                    <a href="#"><span>Cookies</span></a>
                                </div>
                                <div className="mr-4 mb-4">
                                    <a href="#"><span>About Ads</span></a>
                                </div>
                                <div className="mr-4 mb-4">
                                    <a href="#"><span>Accessibility</span></a>
                                </div>
                            </div>
                            <div className="mr-4"><a href=""><span>Cookies</span></a></div>
                        </div>
                        <div>
                            <button className="border-neutral-400 border text-sm rounded-full text-white font-bold py-1 px-3">
                               <ImEarth className="h-4 w-4 inline-block ml-1 mr-2"/>
                                English
                            </button>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default YourLibrary;