import cls from './Button.module.scss'
import React, {ButtonHTMLAttributes, FC} from "react";
import {classNames} from "shared/lib/classNames/classNames";

export enum ThemeButton {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    classname?: string;
    theme?: string;
}

export const Button: FC<ButtonProps> = (props) => {
    const {classname, children, theme, ...otherProps} = props

    return <button {...otherProps} className={classNames(cls.Button, {}, [classname, cls[theme]])}>
        {children}
    </button>
}