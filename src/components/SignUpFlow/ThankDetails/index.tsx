import { Button, Card, Container, Typography } from "@mui/material";
import { PanelJoinWrap } from "./styled";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, } from "../../../constants";


function ThanksDetail() {
  const navigate = useNavigate();
  const clickHandle = () => {
    localStorage.clear()
    navigate(LOGIN_ROUTE)
  }

  return (
    <PanelJoinWrap>
      <Container sx={{ width: "750px", height: "90vh", textAlign: "center", alignItems: "center", display: "flex", justifyContent: "center" }}>
        <Box my={4}>
          <Card sx={{ boxShadow: "0px 1px 10px #ddd", p: 3 }}>
            <Typography variant="h2" mb={1} sx={{ marginTop: "25px" }}>
              Thank You!
            </Typography>
            <Typography>
              Please check your email to confirm your email address.Click the link in the email to complete your registration.
            </Typography>
            <Button className="btnNextStep" onClick={() => clickHandle()}>Go back to home</Button>
          </Card>
        </Box>
      </Container>
    </PanelJoinWrap>
  );
}

export default ThanksDetail;
