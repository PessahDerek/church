import "./App.css";
import Entries from "./pages/Entries";
import Totals from "./pages/Totals";
import {Route, Routes} from "react-router-dom";

function App() {
    return (

        <div className="App">
            <Routes>
                <Route index={true} element={<Entries/>}/>
                <Route path={"/totals"} element={<Totals/>}/>
                <Route path={"/*"} element={<div>
                    <h1>Man Wtf</h1>
                </div>} />
            </Routes>
        </div>
    );
}

export default App;
