import React, {FC} from 'react';
import Home from './pages/Home';
import YourLibrary from "./components/YourLibrary";
import Menu from "./components/Menu";

const App: FC = () => {
    return (
        <div className="h-screen flex flex-col mb-1 mt-1">
            <div className="flex-grow flex">
                <div className="w-1/4 md:w-1/5 flex flex-col">
                    <Menu />
                    <YourLibrary />
                </div>
                <div className="w-3/4 md:w-4/5 flex flex-col">
                    <Home />
                </div>
            </div>
        </div>
    );
}

export default App;
