import "./App.css";
import ButtonPair from "./ButtonPair";
import GoOrNo from "./GoOrNo";

import { useState } from "react";

function App() {
    const [switch1, setSwitch1] = useState(false);
    const [switch2, setSwitch2] = useState(false);
    const [switch3, setSwitch3] = useState(false);

    return (
        <div>
            <div className="container">
                <div className="left-block">
                    <ButtonPair switch={switch1} setSwitch={setSwitch1} />
                    <ButtonPair switch={switch2} setSwitch={setSwitch2} />
                    <ButtonPair switch={switch3} setSwitch={setSwitch3} />
                </div>
                <GoOrNo />
            </div>
        </div>
    );
}

export default App;
