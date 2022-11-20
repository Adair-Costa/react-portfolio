import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // importacao do react router dom

// importacao do css
import "./styles/App.css";

// importacao das pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Header from "./Header";

const App = () => {
    return (
        <Router>
            <Header />
            
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/projects" element={ <Projects/> } />
                <Route path="/experiences" element={ <Education/> } />
            </Routes>
        </Router>
    );
}

export default App;