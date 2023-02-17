import cls from './Sidebar.module.scss'
import React, {FC, useState} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import {LanguageSwitcher} from "shared/ui/LanguageSwitcher";

interface SidebarProps {
    classname?: string;
}

export const Sidebar: FC<SidebarProps> = ({classname}) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [classname])}>
        <button onClick={onToggle}>on toggle</button>
        <div className={cls.switchers}>
            <ThemeSwitcher />
            <LanguageSwitcher classname={cls.lang} />
        </div>
    </div>
}