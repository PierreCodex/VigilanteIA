import ComingSimple from "../Components/Pages/ComingSoon/ComingSimple";
import CreatePwd from "../Components/Pages/Auth/CreatePwd";
import ForgetPwd from "../Components/Pages/Auth/ForgetPwd";
import LoginOne from "../Components/Pages/Auth/LoginOne";
import LoginSweetalert from "../Components/Pages/Auth/LoginSweetalert";
import LoginTooltip from "../Components/Pages/Auth/LoginTooltip";
import LoginTwo from "../Components/Pages/Auth/LoginTwo";
import LoginValidation from "../Components/Pages/Auth/LoginValidation";
import Maintenance from "../Components/Pages/Auth/Maintenance";
import RegisterBgImg from "../Components/Pages/Auth/RegisterBgImg";
import RegisterSimple from "../Components/Pages/Auth/RegisterSimple";
import RegisterVideo from "../Components/Pages/Auth/RegisterVideo";
import UnlockUser from "../Components/Pages/Auth/UnlockUser";
import ErrorPage1 from "../Components/Pages/ErrorPages/ErrorPage1";
import ErrorPage2 from "../Components/Pages/ErrorPages/ErrorPage2";
import ErrorPage3 from "../Components/Pages/ErrorPages/ErrorPage3";
import ErrorPage4 from "../Components/Pages/ErrorPages/ErrorPage4";
import Logins from "../Auth/Signin";
import LoginForm from "../Components/Pages/Auth/LoginForm";
import ComingBgImg from "../Components/Pages/ComingSoon/ComingBgImg";
import ComingBgVideo from "../Components/Pages/ComingSoon/ComingBgVideo";

export const authRoutes = [
  { path: `/login`, Component: <Logins /> },
  { path: `/pages/authentication/login-simple`, Component: <LoginForm /> },
  { path: `/pages/authentication/login-img`, Component: <LoginOne /> },
  { path: `/pages/authentication/login-bg-img`, Component: <LoginTwo /> },
  { path: `/pages/authentication/login-validation`, Component: <LoginValidation /> },
  { path: `/pages/authentication/login-tooltip`, Component: <LoginTooltip /> },
  { path: `/pages/authentication/login-sweetalert`, Component: <LoginSweetalert /> },
  { path: `/pages/authentication/register-simple`, Component: <RegisterSimple /> },
  { path: `/pages/authentication/register-bg-img`, Component: <RegisterBgImg /> },
  { path: `/pages/authentication/register-video`, Component: <RegisterVideo /> },
  { path: `/pages/authentication/unlock-user`, Component: <UnlockUser /> },
  { path: `/pages/authentication/forget-pwd`, Component: <ForgetPwd /> },
  { path: `/pages/authentication/create-pwd`, Component: <CreatePwd /> },
  { path: `/pages/authentication/maintenance`, Component: <Maintenance /> },

  //Coming-soon
  { path: `/pages/coming/coming-simple`, Component: <ComingSimple /> },
  { path: `/pages/coming/coming-bg-img`, Component: <ComingBgImg /> },
  { path: `/pages/coming/coming-bg-video`, Component: <ComingBgVideo /> },

  //Error
  { path: `/pages/error/error-page1`, Component: <ErrorPage1 /> },
  { path: `/pages/error/error-page2`, Component: <ErrorPage2 /> },
  { path: `/pages/error/error-page3`, Component: <ErrorPage3 /> },
  { path: `/pages/error/error-page4`, Component: <ErrorPage4 /> },
];
