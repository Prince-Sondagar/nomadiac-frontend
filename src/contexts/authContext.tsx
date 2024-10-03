import { FC, createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Maybe } from "yup";
// component block
import Loading from "../components/Common/Loading";
// others block
import { getLoginAt, getToken, removeToken, setLoginAt } from "../utils";
import { GRAPHQL_QUERY_POLICY, LOGIN_ROUTE, TOKEN_INVALID } from "../constants";
import { User, Panelist, useFetchPanelistByUserIdLazyQuery, ResponsePayload, useLoggedInUserLazyQuery, useDeactivateUserMutation, useUpdatePanelistMutation } from "../generated";
import { AuthContextProps, ChildrenType } from "../interfaceTypes";

export const AuthContext = createContext<AuthContextProps>({
  currentUser: null,
  currentPanelist: null,
  isLoggedIn: !!getToken(),
  isLoading: false,
  setIsLoggedIn: () => { },
  setCurrentUser: () => { },
  setCurrentPanelist: () => { },
  onLeavePanelAndDeactive: () => { },
  handleLogout: () => { },
});

export const AuthContextProvider: FC<ChildrenType> = ({ children }): JSX.Element => {
  const [currentUser, setCurrentUser] = useState<Maybe<User>>(null);
  const [currentPanelist, setCurrentPanelist] = useState<Maybe<Panelist>>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!getToken());
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const [updatePanelist] = useUpdatePanelistMutation({
    onError() { },

    onCompleted() { },
  });

  const [deactivateUser] = useDeactivateUserMutation({ ...GRAPHQL_QUERY_POLICY as any, variables: { userInput: { userId: currentUser?.id } } });

  const [fetchPanelist, { refetch: refreshPanelist }] = useFetchPanelistByUserIdLazyQuery({
    ...GRAPHQL_QUERY_POLICY as any,
    onError() {
      setIsLoading(false)
    },

    onCompleted(data: { fetchPanelistByUserId: { panelist: Panelist; response: ResponsePayload } }) {
      const { fetchPanelistByUserId: { panelist } } = data
      if (panelist) {

        if (!getLoginAt()) {
          const { id, loginCount } = panelist
          updatePanelist({
            variables: {
              updatePanelistInput: {
                id,
                lastLogin: new Date().toISOString(),
                loginCount: ((loginCount || 0) + 1)
              }
            }
          })

          setLoginAt();
        }

        setCurrentPanelist(panelist)
      }
      setIsLoading(false)
    }
  });

  const [onLoggedInUser] = useLoggedInUserLazyQuery({
    ...GRAPHQL_QUERY_POLICY,
    onError(error: any) {
      setIsLoading(false)
      if (error.message === TOKEN_INVALID) {
        setIsLoggedIn(false);
        setCurrentUser(null);
        setCurrentPanelist(null);
        localStorage.clear();
        navigate(LOGIN_ROUTE);
      }
    },

    onCompleted(data: { me: { user: User; }; }) {
      const { me: { user } } = data;
      if (user) {
        setCurrentUser(user as User);
        fetchPanelist({ variables: { fetchPanelistByUserIdInput: { userId: user.id } } });
      }
      setIsLoggedIn(true);
    }
  } as any);

  const onLeavePanelAndDeactive = async () => {
    await deactivateUser();
    handleLogout();
  }

  const hasToken = getToken()

  useEffect(() => {
    hasToken && setIsLoggedIn(true);
    if (isLoggedIn && hasToken) {
      setIsLoading(true)
      onLoggedInUser()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn, hasToken]);

  const handleLogout = () => {
    removeToken();
    setCurrentUser(null);
    setIsLoggedIn(false);
    navigate(LOGIN_ROUTE);
  }

  return (
    <AuthContext.Provider value={{
      isLoading,
      isLoggedIn,
      currentUser,
      currentPanelist,
      handleLogout,
      setIsLoggedIn,
      setCurrentUser,
      refreshPanelist,
      setCurrentPanelist,
      onLeavePanelAndDeactive,
    }}>
      {isLoading ? <Loading /> : children}
    </AuthContext.Provider>
  );
};