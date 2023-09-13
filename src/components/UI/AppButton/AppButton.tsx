import React from 'react';
import { ThemeButton } from './AppButton.styled';

    interface AppButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
        buttonText: string,
        isDisabled: boolean
    }

export const AppButton = ({ buttonText,isDisabled,type, ...props }: AppButtonProps) => {
    return (
        <ThemeButton type={type} disabled={isDisabled} {...props}>{ buttonText }</ThemeButton>
    );
};

