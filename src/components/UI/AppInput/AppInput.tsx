import React from "react";
import { ThemeInput, ThemeInputError } from "./AppInput.style";

type AppInputProps = {
  type: "tel" | "password" | "text" | "email";
  placeholderText: string;
  isError?: boolean;
  errorText?: any;
};

export const AppInput = ({
  type,
  placeholderText,
  isError,
  errorText,
  ...props
}: AppInputProps) => {
  return (
    <>
      <ThemeInput
        type={type}
        placeholder={placeholderText}
        isError={isError}
        {...props}
      />
      {isError && (
        <ThemeInputError isError={isError}>{errorText}</ThemeInputError>
      )}
    </>
  );
};
console.log("🚀 ~ file: AppInput.tsx:32 ~ AppInput:", AppInput);
