import React, {FC} from 'react';
import {AiOutlinePlus} from "react-icons/ai";
import {LuList} from "react-icons/lu";

const YourLibrary: FC = () => {
    return (
        <div className="flex-grow bg-neutral-900  border-0 rounded-lg m-1 p-2">
            <div className="flex flex-col p-2">
                <div className="flex flex-row justify-between items-center">
                    <div className="inline-flex  px-2">
                        <LuList size={30}/>
                        <p className="ml-2 font-bold text-lg">Your Library</p>
                    </div>
                    <AiOutlinePlus size={20}/>
                </div>
                <div className="my-6 min-h-full">
                    <section className="w-[270px] h-[100px] px-5 py-4 my-2 bg-neutral-600 rounded-md ">первый блок
                    </section>
                    <section className="w-[270px] h-[100px] px-5 py-4 my-2 bg-neutral-600 rounded-md ">второй блок
                    </section>
                </div>
                <div className="h-[300px]">
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
                        <div className="border-2 border-white w-14 rounded-full">English</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default YourLibrary;