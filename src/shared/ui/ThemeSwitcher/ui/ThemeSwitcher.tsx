import cls from './ThemeSwitcher.module.scss'
import React, {FC} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {Theme, useTheme} from "app/providers/ThemeProvider";
import DarkTheme from 'shared/assets/icons/theme-dark.svg'
import LightTheme from 'shared/assets/icons/theme-light.svg'
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    classname?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({classname}) => {
    const {theme, toggleTheme} = useTheme()

    return <Button theme={ThemeButton.CLEAR} onClick={toggleTheme} className={classNames(cls.ThemeSwitcher, {}, [classname])}>
        {
            theme === Theme.LIGHT ? <LightTheme/> : <DarkTheme/>
        }
    </Button>
}