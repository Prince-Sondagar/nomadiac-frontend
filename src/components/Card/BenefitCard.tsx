import React, { FC } from "react";
import { Box, Grid, Typography } from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';

interface Props {
  title1: string,
  title2: string,
  cardType: string,
  heightFull: boolean,
  icons: boolean,
  subTitle: string,
  lock: boolean,
}

export const BenefitCard: FC<Props> = ({ title1, title2, cardType, heightFull, icons, subTitle, lock }): JSX.Element => {
  const bg: { [key: string]: string } = {
    Bronze: "#f7f2ec",
    Silver: "#f4f4f4",
    Gold: "#fcf8eb",
  };

  const colors: any = {
    Bronze: "#46321d",
    Silver: "#707070",
    Gold: "#866b4b",
  };

  return (
    <>
      <Box sx={{ paddingTop: "16px", height: heightFull ? "calc(100% - 186px)" : "auto" }}>
        <Box sx={{
          filter: 'drop-shadow(0px - 2px 4px rgba(0, 0, 0, 0.05)) drop - shadow(0px 2px 4px rgba(0, 0, 0, 0.05))',
          borderRadius: 4,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "220px",
          background: bg[cardType],
          position: "relative",
          height: heightFull ? "100%" : "auto",
        }}>
          <Grid>
            <Box display="flex" justifyContent="center" alignItems="center">
              {icons ?
                <Box>
                  <Box textAlign={"center"}>
                    <img
                      src="assets/images/card.png"
                      alt="logo"
                      width="150"
                      height="auto"
                    />
                  </Box>
                  <Typography
                    variant='h6'
                    sx={{
                      marginBottom: "10px",
                      color: colors[cardType],
                      maxWidth: "300px",
                      margin: "auto",
                      textAlign: ' center'
                    }}
                    display={"flex"}
                    justifyContent={"center"}
                  >
                    {subTitle}
                  </Typography>
                </Box> :
                <Box>
                  {lock && (
                    <Box>
                      <LockIcon sx={{ color: colors[cardType] }} />
                    </Box>
                  )}

                  <Typography variant='h5' sx={{ marginBottom: "10px", fontWeight: "900", color: colors[cardType], }} display={"flex"} justifyContent={"center"} color="black">
                    {title1}
                  </Typography>

                  <Box sx={{
                    background: "#fff",
                    flexFlow: "column",
                    borderRadius: "50%",
                    width: "150px",
                    minWidth: "150px",
                    height: "150px",
                    margin: "0 auto",
                  }}
                    fontSize={"1.5rem"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <Typography variant="h3" sx={{ letterSpacing: "2px", fontWeight: "900", marginBottom: "10px", color: colors[cardType] }} justifyContent={"center"} color="black">
                      {title2}
                    </Typography>
                    <Typography sx={{ letterSpacing: "2px", color: colors[cardType] }} justifyContent={"center"} color="black">
                      BONUS
                    </Typography>
                  </Box>
                </Box>}
            </Box>
          </Grid>
        </Box>
      </Box>
    </>
  )
}

