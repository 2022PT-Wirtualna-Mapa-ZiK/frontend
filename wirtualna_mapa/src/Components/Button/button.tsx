import React from 'react';
import { useNavigate } from 'react-router-dom';


type ButtonProps = {
  link: string;
  text: string;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ link, text, className }) => {
  const navigate = useNavigate();
  navigate(link);
  return (
    <button type="submit" className={className}>
      {text}
    </button>
  );
};

export default Button;