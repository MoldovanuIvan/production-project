import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import cls from './Navbar.module.scss';

interface NavbarProps {
    classname?: string;
}

export const Navbar: FC<NavbarProps> = ({ classname }) => (
    <div className={classNames(cls.Navbar, {}, [classname])}>
        <div className={cls.links}>
            <AppLink to="/" classname={cls.mainLink}>Главная</AppLink>
            <AppLink to="/about">О сайте</AppLink>
        </div>
    </div>
);
