import { FC } from "react";
import { Box, Typography } from "@mui/material";
import StarsIcon from '@mui/icons-material/Stars';

interface Props {
  title1: string,
  title2: string,
  cardType: string,
  star: any,
}

export const Card: FC<Props> = ({ title1, title2, cardType, star }): JSX.Element => {
  const colors: { [key: string]: string } = {
    Bronze: "#c29e79",
    Silver: "#bcbcbc",
    Gold: "#ecbb38",
  };

  return (
    <Box sx={{ paddingTop: "25px" }}>
      <Box
        sx={{
          filter: 'drop-shadow(0px - 2px 4px rgba(0, 0, 0, 0.05)) drop - shadow(0px 2px 4px rgba(0, 0, 0, 0.05))',
          borderRadius: 4,
          minHeight: 130,
          display: "flex",
          justifyContent: "center",
          background: colors[cardType]
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="top">
          <Box display="block">
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "-22px",
                marginBottom: "10px",
              }}
            >
              {star.map(() => (
                <Box
                  sx={{
                    clipPath: "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "45px",
                    height: "45px",
                    background: "white",
                    marginLeft: "-25px",
                    transform: "rotate(90deg)"
                  }}
                >
                  <Typography
                    sx={{
                      clipPath: "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "37px",
                      height: "37px",
                      background: colors[cardType],
                    }}
                  >
                    <StarsIcon />
                  </Typography>
                </Box>
              ))}
            </Box>
            <Typography variant='h3' sx={{ marginBottom: "10px", }} display={"flex"} justifyContent={"center"} color="black">
              {title1}
            </Typography>
            <Typography sx={{ letterSpacing: "2px", marginBottom: "10px" }} display={"flex"} justifyContent={"center"} textAlign="center" color="black">
              {title2}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

