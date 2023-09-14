import React from "react";
import { Controller } from "react-hook-form";
import { AppHeader } from "../../components/UI/AppHeader/AppHeader";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { Container } from "../../components/UI/Container/Container";
import { AppButton } from "./../../components/UI/AppButton/AppButton";
import * as yup from "yup"



interface ForgotPassword {
  userphone: string;
}

const forgotPasswordShcema = yup.object ({
  userphone: yup.string().required("Объязательное поле")
})


const ForgotPasswordPage = () => {
  return (
    <Container>
      <div className="LoginPage">
        <AppHeader type="h1" headerText="Забыли пароль?" />
        <form action="#">
          <AppInput type="tel" placeholderText="Номер телефона" />
          <AppButton buttonText="Отправить" isDisabled={true} type="button" />
        </form>
      </div>
    </Container>
  );
};

export default ForgotPasswordPage;
