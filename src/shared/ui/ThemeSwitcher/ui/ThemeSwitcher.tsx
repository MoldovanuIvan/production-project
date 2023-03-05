import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import DarkTheme from 'shared/assets/icons/theme-dark.svg';
import LightTheme from 'shared/assets/icons/theme-light.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    classname?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ classname }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button type="button" theme={ThemeButton.CLEAR} onClick={toggleTheme} className={classNames(cls.ThemeSwitcher, {}, [classname])}>
            {
                theme === Theme.LIGHT ? <LightTheme /> : <DarkTheme />
            }
        </Button>
    );
};
