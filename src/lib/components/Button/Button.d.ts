import React from "react";

export interface ButtonProps {
  text?: string;
  className?: string;
  onClick?: Function;
}

declare const Button: React.FC<ButtonProps>;

export default Button;
