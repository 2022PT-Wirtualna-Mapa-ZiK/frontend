import React from 'react';
import { useNavigate } from 'react-router-dom';


type ButtonProps = {
  link: string;
  text: string;
  className?: string;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
};

const Button: React.FC<ButtonProps> = ({ link, text, className, onSubmit }) => {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (onSubmit) {
      onSubmit(event);
    } else {
      navigate(link);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit" className={className}>
        {text}
      </button>
    </form>
  );
};

export default Button;