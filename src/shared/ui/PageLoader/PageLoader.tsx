import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    classname?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({ classname }) => (
    <div className={classNames(cls.PageLoader, {}, [classname])}>
        <Loader />
    </div>
);
