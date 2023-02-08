import cls from './Navbar.module.scss'
import React, {FC} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {AppLink} from "shared/ui/AppLink";

interface NavbarProps {
    classname?: string;
}

export const Navbar: FC<NavbarProps> = ({classname}) => {

    return <div className={classNames(cls.Navbar, {}, [classname])}>
        <div className={cls.links}>
            <AppLink to={'/'} classname={cls.mainLink}>Главная</AppLink>
            <AppLink to={'/about'}>О сайте</AppLink>
        </div>
    </div>
}