import React, { useEffect } from "react";
import { Container } from "../../components/UI/Container/Container";
import { AppHeader } from "../../components/UI/AppHeader/AppHeader";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { RegistrationInfo } from "../../components/RegistrationInfo/RegistrationInfo";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { AppButton } from "../../components/UI/AppButton/AppButton";
import * as yup from "yup";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { changeUser } from "../../store/userSlice";
import { User } from "./../../store/userSlice";
import { useGetUserQuery, useLoginUserMutation } from "../../store/api/authApi";
import { ThemeLoginPage } from "./LoginPage.style";

const mockUser: User = {
  user_id: 999,
  name: "pavel",
  mail: "test@test.com",  
  phone_number: "123123",
  reg_data: new Date().toISOString(),
  city: "Tashkent",
};

interface LoginForm {
  userpassword: string;
  useremail: string;
}

const loginFormSchema = yup.object({
  useremail: yup.string().required("Обязательное поле"),
  userpassword: yup.string().required("Обязательное поле"),
});

export const LoginPage = () => {
  const user = useSelector((state: RootState) => state.userSLice.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginUser] = useLoginUserMutation();

  const onLoginSubmit = async (data: LoginForm) => {
    try {
      await loginUser({
        email: data.useremail,
        password: data.userpassword,
      });
    } catch (err) {
      throw err;
    }
  };

  const onLoginClick = () => {
    dispatch(changeUser(mockUser));
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: yupResolver(loginFormSchema),
    defaultValues: {
      userpassword: "",
      useremail: "",
    },
  });

  const onRegistrationSubmit = (data: any) => console.log(data);

  useEffect(() => {
    if (user?.user_id) {
      navigate("/profile");
    }
  }, [user, navigate]);

  return (
    <Container>
      <ThemeLoginPage>
      <AppHeader type="h1" headerText="Авторизация" />
        <form onSubmit={handleSubmit(onLoginSubmit)}>
          <Controller
            name="useremail"
            control={control}
            render={(field) => (
              <AppInput
                type="email"
                placeholderText="Email"
                {...field}
                isError={errors.useremail ? true : false}
                errorText={errors.useremail?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="userpassword"
            control={control}
            render={(field) => (
              <AppInput
                type="password"
                placeholderText="Пароль"
                {...field}
                isError={errors.userpassword ? true : false}
                errorText={errors.userpassword?.message}
                {...field}
              />
            )}
          />
          <AppButton buttonText="Войти" isDisabled={false} type="submit" />
        </form>
        <Link to="/forget-password">Забыли пароль?</Link>
        <RegistrationInfo />
      </ThemeLoginPage>
    </Container>
  );
};
