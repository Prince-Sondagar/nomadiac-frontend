import {
  Button,
  Card,
  Grid,
  LinearProgress,
  Typography,
  CircularProgress,
  ListItemText,
  ListItem,
  List,
  Divider,
  CardHeader,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/authContext";
import {
  Maybe,
  PaginationInput,
  PaginationPayload,
  PaymentWithdrawal,
  PaymentWithdrawalStatus,
  PaymentWithdrawalType,
  useCreateWithdrawalRequestMutation,
  useFetchPaymentWithdrawalsQuery,
} from "../../generated";
import { GRAPHQL_QUERY_POLICY } from "../../constants";
import { Alert } from "../../components/Common/Alert";
import { fetchWithdrawalPaymentHandler } from "../../utils/surveyHandler";
import { Wallet as WalletIcon } from "@mui/icons-material";
import WithdrawalPointTable from "./withdrawalPointTable";
import PointHistoryTable from "./PointHistoryTable";
import { Controller, FormProvider, useForm } from "react-hook-form";
import CommonController from "../../components/Common/CommonController";
import { WithdrawalRequestFormType } from "../../interfaceTypes";
import { yupResolver } from "@hookform/resolvers/yup";
import { withdrawPaymentValidationSchema } from "../../utils/schema";

const PaymentPage = () => {
  const { currentPanelist, refreshPanelist } = useContext(AuthContext);
  const [havePangingRequest, setHavePangingRequest] = useState<boolean>(false);
  const [withdrawalPaymentList, setWithdrawalPaymentList] = useState<
    PaymentWithdrawal[]
  >([]);
  const [paginationState, setPaginationState] = useState<PaginationInput>({
    limit: 50,
    page: 1,
  });
  const [pagination, setPagination] = useState<Maybe<PaginationPayload>>({});

  const { id, availablePoints = 0 } = currentPanelist || {};
  const refreshData = refreshPanelist as Function;

  const methods = useForm<WithdrawalRequestFormType>({
    mode: "all",
    resolver: yupResolver(
      withdrawPaymentValidationSchema(availablePoints || 0)
    ),
    defaultValues: {
      withdrawalPoint: 0,
      type: PaymentWithdrawalType.GiftCard,
    },
  });

  const { handleSubmit, reset, control } = methods;

  const [withdrawalRequest, { loading: withDrawLoading }] =
    useCreateWithdrawalRequestMutation({
      ...(GRAPHQL_QUERY_POLICY as any),
      onError(errors) {
        if (errors) {
          const { message } = errors;
          return Alert.error(message);
        }
      },
      onCompleted(data) {
        if (data) {
          const {
            createWithdrawalRequest: { response, paymentWithdrawal },
          } = data;
          const { status } = response || {};

          if (paymentWithdrawal) {
            setWithdrawalPaymentList((oldData) => [
              paymentWithdrawal,
              ...oldData,
            ]);
          }

          if (status === 200) {
            setHavePangingRequest(true);
            reset();
            Alert.success(response?.message as string);
          }
        }
      },
    });

  const onSubmit = async (data: WithdrawalRequestFormType) => {
    const { withdrawalPoint, type } = data;
    await withdrawalRequest({
      variables: {
        createPaymentWithdrawalRequest: {
          panelistId: id || "",
          points: withdrawalPoint.toString(),
          type: type as PaymentWithdrawalType,
        },
      },
    });
    await refreshData();
  };

  const { loading: isLoading } = useFetchPaymentWithdrawalsQuery({
    ...(GRAPHQL_QUERY_POLICY as any),
    variables: fetchWithdrawalPaymentHandler(id || "", paginationState),
    onCompleted({ fetchPaymentWithdrawals }) {
      const list = fetchPaymentWithdrawals?.paymentWithdrawals;
      setWithdrawalPaymentList(list as PaymentWithdrawal[]);
      const pendingRequest = list.find(
        (paymentWithdrawalsList: any) =>
          paymentWithdrawalsList.status === PaymentWithdrawalStatus.Requested
      );
      setHavePangingRequest(!!pendingRequest);
      const paginationData = fetchPaymentWithdrawals?.pagination;
      if (paginationData) setPagination(paginationData);
      else setPagination(pagination);
    },
  });

  return (
    <Box>
      <Container maxWidth={"xl"} sx={{ p: "0 !important" }}>
        <Card sx={{ my: 4, boxShadow: "0px 1px 10px #ddd" }}>
          <Grid
            display={"flex"}
            my={3}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <WalletIcon
              sx={{
                border: "1px solid #edbb5f",
                padding: "15px",
                boxShadow: 2,
                borderRadius: "50%",
                width: "75px",
                height: "75px",
                color: "#edbb5f",
              }}
            />
          </Grid>
          <Grid
            display={"flex"}
            my={3}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <List sx={{ listStyleType: "disc", pl: 2, width: "400px" }}>
              <ListItem
                sx={{
                  display: "flex",
                  minWidth: "120px",
                  justifyContent: "center",
                }}
              >
                <ListItemText>APPROVED</ListItemText>
                <ListItemText sx={{ display: "flex", justifyContent: "right" }}>
                  {currentPanelist?.pointsWithdrawn}
                </ListItemText>
              </ListItem>
              <Divider />
              <ListItem
                sx={{
                  display: "flex",
                  minWidth: "120px",
                  justifyContent: "center",
                }}
              >
                <ListItemText>AVAILABLE POINTS</ListItemText>
                <ListItemText sx={{ display: "flex", justifyContent: "right" }}>
                  {availablePoints || 0}
                </ListItemText>
              </ListItem>
            </List>
          </Grid>
          <Grid container p={3} alignItems={"center"} spacing={2}>
            <Grid item xs={3} sm={2.5} md={2} textAlign={"center"}>
              <Typography color={"#939393"} fontWeight={600}>
                MY POINTS
              </Typography>
              <Typography color={"#edbb5f"} fontWeight={600}>
                {availablePoints || 0}
              </Typography>
            </Grid>
            <Grid item xs={9} sm={9.5} md={10}>
              <Box className="progressBar">
                <LinearProgress
                  variant="determinate"
                  value={
                    (availablePoints || 0) < 500
                      ? ((availablePoints || 0) / 500) * 100
                      : 100
                  }
                  className="linear-border"
                />
                <Box
                  display={"flex"}
                  justifyContent={
                    (availablePoints || 0) < 500 ? "space-between" : "end"
                  }
                  width={"100%"}
                  mt={1}
                >
                  {(availablePoints || 0) < 500 ? (
                    <Typography
                      fontSize={12}
                      color={"#939393"}
                      fontWeight={600}
                    >
                      {500 - (availablePoints || 0)} POINTS UNTIL PAYOUT
                    </Typography>
                  ) : (
                    ""
                  )}
                  <Typography color={"#edbb5f"} fontWeight={600}>
                    {availablePoints || 0}
                    <span style={{ color: "#939393" }}>/500</span>
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
              <Box
                display="flex"
                justifyContent="center"
                flexDirection="column"
                alignItems="center"
                pb={3}
                gap="10px"
              >
                <Box maxWidth="300px" width="100%">
                  <CommonController
                    controllerName="withdrawalPoint"
                    controllerLabel="Withdrawal Point"
                    isDisabled={
                      (availablePoints || 0) < 500 ||
                      havePangingRequest ||
                      withDrawLoading
                    }
                  />

                  <FormControl
                    component="fieldset"
                    fullWidth
                    sx={{ my: 2 }}
                    disabled={
                      (availablePoints || 0) < 500 ||
                      havePangingRequest ||
                      withDrawLoading
                    }
                  >
                    <FormLabel component="legend">Withdrawal Type</FormLabel>
                    <Controller
                      control={control}
                      name="type"
                      render={({
                        field,
                        fieldState: { error: { message } = {} } = {},
                      }) => (
                        <Box>
                          <RadioGroup {...field} row>
                            <FormControlLabel
                              value={PaymentWithdrawalType.GiftCard}
                              control={<Radio />}
                              label={"Gift Card"}
                            />

                            <FormControlLabel
                              value={PaymentWithdrawalType.Paypal}
                              control={<Radio />}
                              label={"Paypal"}
                            />
                          </RadioGroup>

                          <FormHelperText error={!!message}>
                            {message && message}
                          </FormHelperText>
                        </Box>
                      )}
                    />
                  </FormControl>
                </Box>

                <Button
                  type="submit"
                  className="contained btnPayout"
                  sx={{ height: "45px", marginTop: "-5px" }}
                  disabled={
                    (availablePoints || 0) < 500 ||
                    havePangingRequest ||
                    withDrawLoading
                  }
                  endIcon={
                    withDrawLoading && (
                      <CircularProgress size={20} color="inherit" />
                    )
                  }
                >
                  Payout
                </Button>
              </Box>
            </form>
          </FormProvider>
        </Card>

        <Card sx={{ mb: 4, boxShadow: "0px 1px 10px #ddd" }}>
          <CardHeader title="Point History" />
          <PointHistoryTable />
        </Card>

        <Card sx={{ mb: 4, boxShadow: "0px 1px 10px #ddd" }}>
          <CardHeader title="Payment Request(s)" />
          <WithdrawalPointTable
            paginationState={paginationState}
            setPaginationState={setPaginationState}
            pagination={pagination}
            withdrawalPaymentList={withdrawalPaymentList}
            setWithdrawalPaymentList={setWithdrawalPaymentList}
            isLoading={isLoading}
          />
        </Card>
      </Container>
    </Box>
  );
};
export default PaymentPage;
