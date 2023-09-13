import React from "react"
import { ThemeContainer } from './Container.style';

type ContainerProps = {
    children: React.ReactNode
}

export const Container = ({ children }: ContainerProps) => {
    return (
        <ThemeContainer className="container">{children}</ThemeContainer>
    )
}