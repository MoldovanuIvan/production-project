import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';

const enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    classname?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = ({
    classname, children, to, theme = AppLinkTheme.PRIMARY, ...otherProps
}) => (
    <Link {...otherProps} to={to} className={classNames(cls.AppLink, { theme }, [classname, cls[theme]])}>
        {children}
    </Link>
);
