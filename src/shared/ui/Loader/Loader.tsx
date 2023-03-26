import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';

interface LoaderProps {
    classname?: string;
}

export const Loader: FC<LoaderProps> = ({ classname }) => (
    <div className={classNames('lds-ellipsis', {}, [classname])}>
        <div />
        <div />
        <div />
        <div />
    </div>
);
