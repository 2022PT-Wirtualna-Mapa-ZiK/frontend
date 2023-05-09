import React from 'react';
import { useNavigate } from 'react-router-dom';
import './button.css';

type ButtonProps = {
    link?: string;
    text: string;
    className?: string;
    form?: string;
    onClick?: any;
};

const Button: React.FC<ButtonProps> = ({
    link,
    text,
    className,
    form,
    onClick,
}) => {
    const navigate = useNavigate();
    if (!onClick) {
        onClick = () => {
            if (link) navigate(link);
        };
    }
    return (
        <button
            type="submit"
            className={className}
            form={form}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;
