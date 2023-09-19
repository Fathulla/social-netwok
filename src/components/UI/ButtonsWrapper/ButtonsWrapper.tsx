import React from 'react';

interface ButtonsWrapperProps {
    buttonText: string;
    buttonTex2: string;
}

export const ButtonsWrapper = ({ buttonText, buttonTex2 }: ButtonsWrapperProps) => {
  return (
    <div className="buttons-wrapper">
      <button className="secondary">{buttonText}</button>
      <button className="primary">{buttonTex2}</button>
    </div>
  );
};
