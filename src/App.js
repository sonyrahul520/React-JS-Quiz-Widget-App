import React from "react";
import { CookiesProvider } from "react-cookie";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from './Components/MainPage.js';
import Questions from './Components/Questions.js';
function App() {
    return (
        <div>

          
            
            <CookiesProvider>
                <Router>
                    <MainPage />
                    
                  
                </Router>
            </CookiesProvider>
            </div>

  );
}

export default App;
