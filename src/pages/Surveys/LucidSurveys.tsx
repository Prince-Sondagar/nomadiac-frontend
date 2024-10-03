import "./styled.css";
import { FC, useContext, useEffect, useState, useRef } from "react";
import { Grid, Box } from "@mui/material";
//components block
import { Alert } from "../../components/Common/Alert";
import NoDataFoundComponent from "../../components/Common/NoDataFound";
import { AuthContext } from "../../contexts/authContext";
import SurveyLoader from "../../components/Common/SurveyLoader";
import LucidSurveyCard from "../../components/Card/LucidSurveyCard";
//other block
import { FORBIDDEN_EXCEPTION, GRAPHQL_QUERY_POLICY } from "../../constants";
import { LucidSurvey, Maybe, useFetchLucidSurveysQuery } from "../../generated";
import { LucidSurveysTablePropType } from "../../interfaceTypes";
import { CPIRounding } from "../../utils";

export const LucidSurveys: FC<LucidSurveysTablePropType> = () => {
  const { currentPanelist } = useContext(AuthContext);
  const [lucidSurveys, setLucidSurveys] = useState<Maybe<LucidSurvey>[]>([]);
  const [selectedSurveyId, setSelectedSurveyId] = useState<string>("");
  const [page, setPage] = useState(1);
  const [canRefetch, setCanRefetch] = useState<boolean>(false);
  const [refreshCache, setRefreshCache] = useState<boolean>(false);
  const unAvailableSurveyIdsRef = useRef<string[]>([]);
  const { id } = currentPanelist || {};

  const { loading: isLoading, refetch } = useFetchLucidSurveysQuery({
    ...(GRAPHQL_QUERY_POLICY as any),
    variables: {
      fetchLucidSurveysInput: {
        panelistId: id || "",
        refreshCache,
        paginationOptions: {
          page,
          limit: 10,
        },
      },
    },

    onError({ message }) {
      // setIsLucidSurveyAvailable(false);
      if (message.toLowerCase() === FORBIDDEN_EXCEPTION)
        return Alert.error("something went wrong");
    },
    onCompleted(data) {
      const {
        fetchLucidSurveys: { surveys: fetchedSurveys, pagination },
      } = data;

      const { totalPages } = pagination || {}

      setLucidSurveys([...lucidSurveys, ...fetchedSurveys]);
      if (page < (totalPages || 1)) {
        setCanRefetch(true)
      }
      // if ([...lucidSurveys, ...fetchedSurveys].length < 10 && page !== totalPages && fetchedSurveys.length) {
      // setPage((page + 1))
      // }
    },
  });

  useEffect(() => {
    refetch();
    // eslint-disable-next-line
  }, [page]);

  const updateInventory = () => {
    canRefetch && setPage((page + 1))
  };

  return (
    <Box>
      <Box className="table-overflow">

        {lucidSurveys.length > 0 && (
          <Grid container spacing={4}>
            {lucidSurveys?.sort((lucidSurveyItemA, lucidSurveyItemB) => {
              const { cpi: cpiA, interviewLength: interviewLengthA } = lucidSurveyItemA || {}
              const { cpi: cpiB, interviewLength: interviewLengthB } = lucidSurveyItemB || {}

              return (Math.ceil(CPIRounding(cpiB || 0, true) / (interviewLengthB || 1)) - (Math.ceil(CPIRounding(cpiA || 0, true) / (interviewLengthA || 1))))
            })
              ?.map((survey) => (
                <LucidSurveyCard
                  survey={survey}
                  lucidSurveys={lucidSurveys}
                  setLucidSurveys={setLucidSurveys}
                  selectedSurveyId={selectedSurveyId}
                  setSelectedSurveyId={setSelectedSurveyId}
                  refetch={updateInventory}
                  setRefreshCache={setRefreshCache}
                  refreshCache={refreshCache}
                  unAvailableSurveyIdsRef={unAvailableSurveyIdsRef}
                />
              ))}
          </Grid>
        )}

        {isLoading && (
          <SurveyLoader />
        )}

        {!isLoading && !lucidSurveys?.length && (
          <Box display="flex" justifyContent="center" pb={12} pt={5}>
            <NoDataFoundComponent message="No Survey(s) Available" />
          </Box>
        )}

      </Box>
    </Box>
  );
};
