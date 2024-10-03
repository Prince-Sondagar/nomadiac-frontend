// packages block
import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { FolderOpen } from "@mui/icons-material";
import { NoDataFoundPropsTypes } from "../../interfaceTypes";

const NoDataFoundComponent: FC<NoDataFoundPropsTypes> = ({
  message,
}): JSX.Element => (
  <Box
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
  >
    <Box color="#E3EEFA" fontSize={120} display="flex" alignItems="center">
      <FolderOpen fontSize="inherit" color="inherit" />
    </Box>
    <Box display="flex" alignItems="center">
      <Typography variant="body1">{message || "No data found"}</Typography>
    </Box>
  </Box>
);

export default NoDataFoundComponent;
