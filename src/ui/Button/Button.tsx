/* eslint-disable react/require-default-props */
import clsx from 'clsx';
import React, { FC } from 'react';

interface IProps {
    className?: string;
    onClick: {(): void};
    placeholder?: string;
}

const Button: FC<IProps> = (props) => {
    return (
        <button onClick={props.onClick} className={clsx(props.className)} placeholder={props.placeholder}> {props.children} </button>
    );
};

export default Button;
