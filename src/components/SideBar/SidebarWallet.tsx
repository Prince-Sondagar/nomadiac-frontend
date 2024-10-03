import { FC } from "react";
import "./SideBar.css";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Box, Divider, List, ListItem, ListItemText } from "@mui/material";
import { Wallet as WalletIcon } from "@mui/icons-material";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";

const SidebarWallet: FC = (): JSX.Element => {
  const { currentPanelist } = useContext(AuthContext);
  const { availablePoints = 0,pointsWithdrawn=0 } = currentPanelist || {};

  return (
    <Card sx={{ boxShadow: "0px 1px 10px #ddd", px: 2 }}>
      <Box
        display={"flex"}
        my={3}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box sx={{ position: "relative", display: "inline-flex" }}>
          <CircularProgressbarWithChildren
            value={
              (availablePoints || 0) < 500
                ? ((availablePoints || 0) / 500) * 100
                : 100
            }
            styles={buildStyles({
              pathColor: "#edbb5f",
              trailColor: "#D3D3D3",
            })}
          >
            <Box
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <WalletIcon
                sx={{
                  border: "1px solid #edbb5f",
                  padding: "15px",
                  boxShadow: 2,
                  borderRadius: "50%",
                  width: "60px",
                  height: "60px",
                  color: "#edbb5f",
                }}
              />
              <Typography variant="h5" sx={{ marginTop: "5px" }}>
                {availablePoints || 0}
                <Typography component="span" variant="caption">
                  /500
                </Typography>
              </Typography>
              <Typography variant="body1">Points</Typography>
              <Typography variant="caption" align="center">
                (100 = $1)
              </Typography>
            </Box>
          </CircularProgressbarWithChildren>
        </Box>
      </Box>

      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <List sx={{ listStyleType: "disc", width: "400px" }}>
          <ListItem
            sx={{
              display: "flex",
              minWidth: "120px",
              justifyContent: "center",
              py: 1,
              px: 0,
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
              py: 1,
              px: 0,
            }}
          >
            <ListItemText>AVAILABLE POINTS</ListItemText>
            <ListItemText sx={{ display: "flex", justifyContent: "right" }}>
              {availablePoints || 0}
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem
            sx={{
              display: "flex",
              minWidth: "120px",
              justifyContent: "center",
              py: 1,
              px: 0,
            }}
          >
            <ListItemText>LIFE TIME POINTS</ListItemText>
            <ListItemText sx={{ display: "flex", justifyContent: "right" }}>
              {(availablePoints || 0) + (pointsWithdrawn || 0)}
            </ListItemText>
          </ListItem>
        </List>
      </Box>
    </Card>
  )
}

export default SidebarWallet