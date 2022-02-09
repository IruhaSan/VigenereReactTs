/* eslint-disable react/require-default-props */
import clsx from 'clsx';
import React, { FC } from 'react';

interface IProps {
    className?: string;
    onChange: {(value: string): void};
    placeholder?: string;
    value: string;
}

const Input: FC<IProps> = (props) => {
    return (
        <input 
            value={props.value} 
            type="input" 
            className={clsx(props.className)} 
            onChange={(e) => props.onChange(e.target.value)} 
            placeholder={props.placeholder}  
        />
    );
};

export default Input;
