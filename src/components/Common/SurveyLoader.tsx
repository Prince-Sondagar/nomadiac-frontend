import {
  CardContent,
  Grid,
  Skeleton,
  Card,
  CardHeader,
  CardActions,
} from "@mui/material";
export default function SurveyLoader() {
  return (
    <Grid container spacing={4}>
      {new Array(10).fill(1).map((_, index) => {
        return (
          <Grid item xs={12} md={6} lg={6} key={index}>
            <Card sx={{ alignItems: "center" }}>
              <CardHeader
                avatar={
                  <Skeleton
                    animation="wave"
                    variant="circular"
                    width={40}
                    height={40}
                  />
                }
                action={
                  <Skeleton
                    animation="wave"
                    variant="circular"
                    width={40}
                    height={40}
                  />
                }
              />

              <CardContent sx={{display:'flex', justifyContent:'center'}}>
                <Skeleton
                  animation="wave"
                  variant="circular"
                  width={60}
                  height={60}
                />
              </CardContent>
              <CardActions>
              <Skeleton animation="wave" height={70} width="100%" />
            </CardActions>
            </Card>
           
          </Grid>
        );
      })}
    </Grid>
  );
}
