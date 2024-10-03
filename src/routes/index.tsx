import { useContext } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import { Login } from "../pages/auth/login";
import SignUp from "../pages/signup/Register";
import CompleteProfile from "../pages/signup";
import SurveysPage from "../pages/Surveys";
// Routes
import {
  SURVEY_ROUTE,
  FORGET_PASSWORD_ROUTE,
  ROOT_ROUTE,
  LOGIN_ROUTE,
  SIGNUP_ROUTE,
  PROFILE_ROUTE,
  SET_PASSWORD_ROUTE,
  RESET_PASSWORD_ROUTE,
  WALLET_ROUTE,
  REWARDS_ROUTE,
  COMPLETE_PROFILE_ROUTE,
  ADDITIONAL_INFORMATION_ROUTE,
  UNITED_STATES,
  UNITED_KINGDOM,
} from "../constants";
import ForgetPassword from "../pages/auth/forget-password";
import SubmissionPage from "../pages/Submission";
import "../components/Layout/Layout.css";
import Profile from "../pages/profile";
import Layout from "../components/Layout";
import SetPassword from "../pages/auth/Set-password";
// Pages Block
import WalletPage from "../pages/wallet";
import RewardsPage from "../pages/rewards";
import { WelcomePage } from "../pages/new-welcome";
import ResetPassword from "../pages/auth/ResetPassword";
import Loading from "../components/Common/Loading";
import AdditionalInformation from "../pages/signup/AdditionalInformation";
import PageNotFound from "../pages/404";

export const AuthRoutes = [
  {
    path: ROOT_ROUTE,
    component: <WelcomePage />,
  },
  {
    path: LOGIN_ROUTE,
    component: <Login />,
  },
  {
    path: SIGNUP_ROUTE,
    component: <SignUp />,
  },
  {
    path: FORGET_PASSWORD_ROUTE,
    component: <ForgetPassword />,
  },
  {
    path: SET_PASSWORD_ROUTE,
    component: <SetPassword />,
  },
  {
    path: RESET_PASSWORD_ROUTE,
    component: <ResetPassword />,
  },
];

export const AppRoutes = [
  {
    path: SURVEY_ROUTE,
    component: <SurveysPage />,
  },
  {
    path: PROFILE_ROUTE,
    component: <Profile />,
  },
  {
    path: WALLET_ROUTE,
    component: <WalletPage />,
  },
];

const RouteComponent = () => {
  const { isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Routes>
      <Route element={<UnAuthRoute />}>
        {AuthRoutes.map(({ path, component }, index) => (
          <Route path={path} element={component} key={`${path}${index}`} />
        ))}
      </Route>
      <Route element={<ValidateCompleteProfileRoute />}>
        <Route path={COMPLETE_PROFILE_ROUTE} element={<CompleteProfile />} />
      </Route>

      <Route element={<ValidateAdditionInformationRoute />}>
        <Route path={ADDITIONAL_INFORMATION_ROUTE} element={<AdditionalInformation />}
        />
      </Route>
      <Route element={<AuthRoute />}>
        {AppRoutes.map(({ path, component }, index) => (
          <Route path={path} element={component} key={`${path}${index}`} />
        ))}
      </Route>
      <Route path={REWARDS_ROUTE} element={<RewardsPage />} />
      <Route path="/submission" element={<SubmissionPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

const AuthRoute = () => {
  const { isLoggedIn, isLoading, currentPanelist } = useContext(AuthContext);
  const { country, blockFromLucid, lucidProfileCompleted, signupSurveyResponse } = currentPanelist || {};

  if (!isLoading && !isLoggedIn) {
    return <Navigate to={LOGIN_ROUTE} />;
  } else if ((country === UNITED_STATES || country === UNITED_KINGDOM) && !blockFromLucid && !lucidProfileCompleted && signupSurveyResponse?.length) {
    return <Navigate to={ADDITIONAL_INFORMATION_ROUTE} />;
  } else if (currentPanelist !== null && currentPanelist?.signupSurveyResponse?.length && lucidProfileCompleted) {
    return <Layout />;
  } else {
    return <Navigate to={COMPLETE_PROFILE_ROUTE} />;
  }
};

const UnAuthRoute = () => {
  const { isLoggedIn, isLoading, currentPanelist } = useContext(AuthContext);
  const { lucidProfileCompleted, signupSurveyResponse } = currentPanelist || {};

  if (!isLoading && !isLoggedIn) {
    return <Outlet />;
  } else if (currentPanelist && currentPanelist.signupSurveyResponse?.length && lucidProfileCompleted) {
    return <Navigate to={SURVEY_ROUTE} />;
  } else if (currentPanelist && signupSurveyResponse?.length && !lucidProfileCompleted) {
    return <Navigate to={COMPLETE_PROFILE_ROUTE} />;
  } else {
    return <Navigate to={ADDITIONAL_INFORMATION_ROUTE} />;
  }
};

const ValidateCompleteProfileRoute = () => {
  const { isLoggedIn, isLoading, currentPanelist } = useContext(AuthContext);
  const { country, blockFromLucid, lucidProfileCompleted, signupSurveyResponse } = currentPanelist || {};

  if (!isLoading && !isLoggedIn) {
    return <Navigate to={LOGIN_ROUTE} />;
  } else if (currentPanelist !== null && !currentPanelist?.signupSurveyResponse?.length && !lucidProfileCompleted) {
    return <Outlet />;
  } else if ((country === UNITED_STATES || country === UNITED_KINGDOM) && !blockFromLucid && !lucidProfileCompleted && signupSurveyResponse?.length) {
    return <Navigate to={ADDITIONAL_INFORMATION_ROUTE} />;
  } else {
    return <Navigate to={SURVEY_ROUTE} />;
  }
};

const ValidateAdditionInformationRoute = () => {
  const { isLoggedIn, isLoading, currentPanelist } = useContext(AuthContext);
  const { country, blockFromLucid, lucidProfileCompleted, signupSurveyResponse } = currentPanelist || {};

  if (!isLoading && !isLoggedIn) {
    return <Navigate to={LOGIN_ROUTE} />;
  } else if (currentPanelist !== null && !currentPanelist?.signupSurveyResponse?.length && !lucidProfileCompleted) {
    return <Navigate to={COMPLETE_PROFILE_ROUTE} />;
  } else if ((country === UNITED_STATES || country === UNITED_KINGDOM) && !blockFromLucid && !lucidProfileCompleted && signupSurveyResponse?.length) {
    return <Outlet />;
  } else {
    return <Navigate to={SURVEY_ROUTE} />;
  }
};



export default RouteComponent;
