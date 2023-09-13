import React from "react";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from 'styled-components'
import { theme } from "./theme/theme";
import {RegistrationPage} from "./pages/RegistrationPage/RegistrationPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage/ForgotPasswordPage";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { ProfilePage } from './pages/ProfilePage/ProfilePage';


const App: React.FC = () => {
  const router = createBrowserRouter ([
    {
      path: '/',
      element: <LoginPage/>,
    },
    {
      path: '/main',
      element: <MainPage/>,
    },
    {
      path: '/forget-password',
      element: <ForgotPasswordPage/>,
    },
    {
      path: '/register',
      element: <RegistrationPage/>,
    },
    {
      path: '/profile',
      element: <ProfilePage/>,
    },
  ])
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router}/>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
