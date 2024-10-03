/* eslint-disable react-hooks/exhaustive-deps */
import { Box } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { Banner } from "./Banner";
import Footer from "./Footer";
import { FromOurFounder } from "./FromOurFounder";
import { WeOffer } from "./WeOffer";
import WhatWeCan from "./WhatWeCan";
import { WhyShouldYou } from "./WhyShouldYou";
import { useEffect } from "react";
import { setTransactionAndSourceId } from "../../utils";

export const WelcomePage = () => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    setTransactionAndSourceId(searchParams.get('clickid') || "", searchParams.get('aid') || "", searchParams.get('subid') || "")
  }, []);
  return (
    <Box className="welcomePage">
      <Banner />
      <WeOffer />
      <WhyShouldYou />
      <WhatWeCan />
      <FromOurFounder />
      <Footer />
    </Box>
  );
};
