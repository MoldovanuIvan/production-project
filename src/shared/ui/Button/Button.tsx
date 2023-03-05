import React, { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    classname?: string;
    theme?: string;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        classname, children, theme, ...otherProps
    } = props;

    return (
        <button type="button" {...otherProps} className={classNames(cls.Button, {}, [classname, cls[theme]])}>
            {children}
        </button>
    );
};
