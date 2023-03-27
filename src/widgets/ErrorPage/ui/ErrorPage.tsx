import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ErrorPage.module.scss';

interface ErrorPageProps {
    classname?: string;
}

export const ErrorPage: FC<ErrorPageProps> = ({ classname }) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line
        location.reload();
    };

    return (
        <div className={classNames(cls.ErrorPage, {}, [classname])}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <button type="button">{t('Обновить страницу')}</button>
        </div>
    );
};
