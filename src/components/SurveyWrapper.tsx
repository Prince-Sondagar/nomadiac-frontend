import {
  Grid,
  Card,
  CardHeader,
  Typography,
  Button,
  CardContent,
  CardActions,
  Link as MuiLink,
} from "@mui/material";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import { CPIRounding, setSelectedSurveyIds } from "../utils";
import { FC } from "react";

type Props = {
  surveyId: string | undefined;
  estimatedLoi: number | undefined;
  cpi: number | undefined;
  entryLink: string | undefined;
  updateLink: (link:string, cpi:number, transactionId?:string)=>string | undefined;
};

const SurveyWrapper: FC<Props> = ({
  surveyId,
  estimatedLoi,
  cpi,
  entryLink,
  updateLink,
}) => {
  return (
    <>
      <Grid item xs={12} md={6} lg={6}>
        <Card sx={{ textAlign: "center", borderRadius: "0px" }}>
          <CardHeader
            avatar={
              <>
                <Typography variant="body1">Survey ID: </Typography>
                <Typography variant="body1"> {surveyId}</Typography>
              </>
            }
            action={
              <Button variant="text" startIcon={<AccessAlarmIcon />}>
                {estimatedLoi} min
              </Button>
            }
          />
          <CardContent>
            <Typography variant="h4">{CPIRounding(cpi || 0)}</Typography>
            <Typography>Points</Typography>
          </CardContent>
          <CardActions>
            <Button
              size="large"
              sx={{
                width: "100%",
                borderRadius: "25px",
                color: "white",
                backgroundColor: "#edbb5f",
                "&:hover": {
                  backgroundColor: "#edbb5f",
                },
              }}
              variant="contained"
              onClick={() => setSelectedSurveyIds(surveyId!)}
            >
              <MuiLink
                href={updateLink(entryLink || "", cpi || 0, surveyId)}
                target="_blank"
                rel="noreferrer"
                sx={{ color: "white", textDecoration: "none" }}
              >
                Take Survey
              </MuiLink>
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

export default SurveyWrapper;
