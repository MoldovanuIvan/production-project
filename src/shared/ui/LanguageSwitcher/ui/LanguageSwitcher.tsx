import cls from './LanguageSwitcher.module.scss'
import React, {FC} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";

interface LanguageSwitcherProps {
    classname?: string;
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({classname}) => {
    const {t, i18n} = useTranslation()
    const onToggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return <div className={classNames(cls.LanguageSwitcher, {}, [classname])}>
        <Button theme={ThemeButton.CLEAR} onClick={onToggle}>
            {t('Язык')}
        </Button>
    </div>
}