import { FC, useContext, useEffect, useState } from "react";
import { Grid } from "@mui/material";

import { CPIRounding, getSelectedSurveyIds } from "../../utils";
import "./styled.css";
import { Box } from "@mui/system";
import { AuthContext } from "../../contexts/authContext";
import {
  FusionSurveyType,
  Maybe,
  useFetchPanelistFusionSurveyLazyQuery,
} from "../../generated";
import { GRAPHQL_QUERY_POLICY } from "../../constants";
import NoDataFoundComponent from "../../components/Common/NoDataFound";
import SurveyLoader from "../../components/Common/SurveyLoader";
import SurveyWrapper from "../../components/SurveyWrapper";

export const FusionSurveys: FC = () => {
  const selectedIdsArray = getSelectedSurveyIds();
  const { currentPanelist } = useContext(AuthContext);
  const { id: panelistId } = currentPanelist || {};
  const [surveys, setSurveys] = useState<Maybe<FusionSurveyType>[]>([]);

  const [fetchFusionSurveys, { loading }] =
    useFetchPanelistFusionSurveyLazyQuery({
      ...(GRAPHQL_QUERY_POLICY as any),

      variables: {
        fetchFusionSurveyInput: {
          panelistId: panelistId || "",
        },
      },

      onCompleted(data) {
        const {
          fetchPanelistFusionSurvey: { surveys: fetchedSurvey },
        } = data;
        const surveyData = fetchedSurvey.filter((item) => {
          const { cpi = 0, estimatedLoi = 0, surveyId } = item || {};

          return (
            !(estimatedLoi > 2 && CPIRounding(cpi || 0) < 10) &&
            !selectedIdsArray.includes(surveyId || "")
          );
        });

        if ([...surveys, ...surveyData].length < 10 && !!fetchedSurvey.length) {
          fetchFusionSurveys();
        }

        setSurveys([...surveys, ...surveyData]);
      },
    });

  useEffect(() => {
    if (panelistId)
      fetchFusionSurveys({
        variables: { fetchFusionSurveyInput: { panelistId: panelistId || "" } },
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [panelistId]);

  const updateLink = (
    link: string,
    cpi: number,
    transactionId?: string
  ): string => {
    return `${process.env.REACT_APP_BACKEND_DEV_API_URL
      }/survey/validateFusionApiSurvey?panelistId=${panelistId}&cpi=${cpi}&transactionId=${transactionId || ""
      }&surveyUrl=${encodeURIComponent(link)}`;
  };

  return (
    <Box className="table-overflow" pt={0}>
      {loading ? (
        <SurveyLoader />
      ) : (
        <Grid container spacing={4}>
          {surveys
            ?.filter((v, i, a) => a.findIndex(v2 => (v2?.surveyId === v?.surveyId)) === i)
            ?.sort((a, b) => (b?.cpi || 0) - (a?.cpi || 0))
            .map((survey) => {
              const { cpi, entryLink, estimatedLoi, surveyId } = survey || {};
              return (
                <SurveyWrapper
                  key={surveyId}
                  cpi={cpi}
                  entryLink={entryLink}
                  estimatedLoi={estimatedLoi}
                  surveyId={surveyId}
                  updateLink={updateLink}
                />
              );
            })}
        </Grid>
      )}
      {!loading && !surveys?.length && (
        <Box display="flex" justifyContent="center" pb={12} pt={25}>
          <NoDataFoundComponent message="No Survey(s) Available" />
        </Box>
      )}
    </Box>
  );
};
