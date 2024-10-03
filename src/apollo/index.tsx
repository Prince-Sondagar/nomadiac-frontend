// packages block
import { onError } from "@apollo/client/link/error";
import { ApolloClient, InMemoryCache, ApolloLink, HttpLink, from, Operation, NextLink } from "@apollo/client";
// components block
// utils and constants block
import {
  INVALID_OR_EXPIRED_TOKEN_MESSAGE, NOT_FOUND, NOT_FOUND_EXCEPTION, PRECONDITION_FAILED_EXCEPTION, REQUEST_NOT_FOUND, SURVEYS_NOT_AVAILABLE, TOKEN_INVALID, TOKEN_NOT_FOUND,
  UNAUTHORIZED
} from "../constants";
import { ErrorException } from "../interfaceTypes";
import { getToken, handleLogout } from "../utils";
import { Alert } from "../components/Common/Alert";

const authMiddleware = new ApolloLink((operation: Operation, forward: NextLink) => {

  operation.setContext({
    headers: {
      authorization: `Bearer ${getToken()}`,
      "X-XSS-Protection": "1; mode=block",
      "X-Frame-Options": "SAMEORIGIN",
      "Referrer-Policy": "same-origin",
      "X-Content-Type-Options": "nosniff",
      "Content-Security-Policy": "default-src 'self'; script-src 'self' 'unsafe-inline'",
    },
  });

  return forward(operation);
});

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_BACKEND_DEV_GQL_URL || 'http://localhost:3001/graphql',
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(
      ({ extensions }) => {
        if (extensions) {
          const { exception } = extensions;
          if (exception) {
            const { response } = exception as ErrorException

            const { response: subResponse } = response || {}
            const { response: thirdResponse } = subResponse || {}
            const { error } = thirdResponse || {}
            if (error && error !== NOT_FOUND_EXCEPTION && error !== NOT_FOUND && error !== SURVEYS_NOT_AVAILABLE && error !== PRECONDITION_FAILED_EXCEPTION) {
              return Alert.error(error)
            }

            if (response) {
              const { error, response: errorResponse } = response

              if (error && error !== REQUEST_NOT_FOUND && error !== NOT_FOUND_EXCEPTION && error !== NOT_FOUND && error !== SURVEYS_NOT_AVAILABLE) {
                if (error === TOKEN_NOT_FOUND) {
                  Alert.error(INVALID_OR_EXPIRED_TOKEN_MESSAGE);
                } else if (error !== NOT_FOUND && error !== SURVEYS_NOT_AVAILABLE)
                  Alert.error(error)
              }

              if (errorResponse) {
                const { error: responseError, message } = errorResponse;

                if (message && message !== REQUEST_NOT_FOUND && message !== NOT_FOUND_EXCEPTION && message !== NOT_FOUND && message !== SURVEYS_NOT_AVAILABLE) {
                  Alert.error(message)
                } else if (responseError && responseError !== REQUEST_NOT_FOUND && responseError !== NOT_FOUND_EXCEPTION && responseError !== NOT_FOUND && responseError !== PRECONDITION_FAILED_EXCEPTION && responseError !== SURVEYS_NOT_AVAILABLE) {
                  Alert.error(responseError)
                }
              }
            }
          }
        }

        return null
      }
    );
    const [{ message }] = graphQLErrors;
    if (message === UNAUTHORIZED || message === TOKEN_INVALID) handleLogout();
  }

  if (networkError) Alert.error(networkError.message);
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  connectToDevTools: true,
  link: from([authMiddleware, errorLink, httpLink]),
});

export default client;
