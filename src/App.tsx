import "./App.css";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo";
import { CloseButton, SnackbarUtilsConfiguration } from "./components/Common/Alert";
import { SnackbarProvider } from "notistack";
import { AuthContextProvider } from "./contexts/authContext";
import RouteComponent from "./routes";

export default function App() {
  return (
    <SnackbarProvider
      maxSnack={5} autoHideDuration={5000} action={key => <CloseButton id={key} />}
      preventDuplicate={true} anchorOrigin={{ vertical: "top", horizontal: "right" }}
      classes={{ containerRoot: 'snackbarProvider' }}
    >
      <SnackbarUtilsConfiguration />
      <ApolloProvider client={client} >
        <AuthContextProvider>
          <ThemeProvider theme={theme}>
            <RouteComponent />
          </ThemeProvider>
        </AuthContextProvider>
      </ApolloProvider>
    </SnackbarProvider>
  );
}