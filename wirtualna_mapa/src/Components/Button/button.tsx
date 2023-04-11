import React from 'react';
import { useNavigate } from 'react-router-dom';
import './button.css'

type ButtonProps = {
  link?: string;
  text: string;
  className?: string;
  form?: string;
};

const Button: React.FC<ButtonProps> = ({ link, text, className, form }) => {
  const navigate = useNavigate();

  return (
    <button type="submit" className={className} form={form} onClick={() => {
      if(link) 
        navigate(link);
    }}>
      {text}
    </button>
  );
};

export default Button;