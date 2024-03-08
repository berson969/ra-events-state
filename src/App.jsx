import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import { HomePage } from "./components/HomePage";
import { Portfolio } from "./components/PortfolioPage";
import { Layouts } from "./components/Layouts";
import { Dropdown } from "./components/DropDown/";

export default function AppVite() {
    return (

        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/layouts" element={<Layouts />} />
                <Route path="/dropdown" element={<Dropdown />} />
            </Routes>
        </Router>
    )
}
