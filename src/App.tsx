import React from 'react'
import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import MainAsync from "./pages/Main/Main.async";
import AboutAsync from "./pages/About/About.async";
import useTheme from "./theme/useTheme";

const App = () => {
    const {theme, toggleTheme} = useTheme()

    return <div className={`app ${theme}`}>
        <button onClick={toggleTheme}>toggleTheme</button>
        <Link to={'/'}>Main</Link>
        <Link to={'/about'}>About</Link>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path={'/'} element={<MainAsync/>}/>
                <Route path={'/about'} element={<AboutAsync/>}/>
            </Routes>
        </Suspense>
    </div>
}

export default App