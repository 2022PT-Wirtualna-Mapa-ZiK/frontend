import React from 'react';


type ButtonProps = {
    link: string;
    text: string;
  };

class Button extends React.Component<ButtonProps> {
  render() {
    const { link, text } = this.props;
    return (
      <a href={link}>
        <button>{text}</button>
      </a>
    );
  }
}

export default Button;