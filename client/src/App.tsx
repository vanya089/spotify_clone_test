import React, {FC} from 'react';
import Home from './pages/Home';
import YourLibrary from "./components/YourLibrary";
import Menu from "./components/Menu";

const App: FC = () => {
    return (
        <div className="h-screen flex flex-col p-1 ">
            <div className="flex-grow flex">
                <div className="w-[470px] flex flex-col">
                    <Menu/>
                    <YourLibrary/>
                </div>
                <div className="w-screen flex flex-col">
                    <Home/>
                </div>
            </div>
        </div>
    );
}

export default App;
