import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import Hobbies from "./pages/hobbies";
import Experience from "./pages/experience";
import Projects from "./pages/projects";
 
function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/hobbies" element={<Hobbies />} />
                <Route
                    path="/experience"
                    element={<Experience />}
                />
                <Route
                    path="/projects"
                    element={<Projects />}
                />
            </Routes>
        </Router>
    );
}
 
export default App;