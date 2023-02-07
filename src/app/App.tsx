import React from 'react'
import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import {MainPage} from "pages/Main";
import {AboutPage} from "pages/About";
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";

const App = () => {
    const {theme, toggleTheme} = useTheme()

    return <div className={classNames('app', {}, [theme])}>
        <button onClick={toggleTheme}>toggleTheme</button>
        <Link to={'/'}>Main</Link>
        <Link to={'/about'}>About</Link>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path={'/'} element={<MainPage/>}/>
                <Route path={'/about'} element={<AboutPage/>}/>
            </Routes>
        </Suspense>
    </div>
}

export default App