import { FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material'
import { Box } from '@mui/system'

import CardComponent from '../../components/Common/CardComponent'
import { useHandleBlockUnblockPromotionMainMutation } from '../../generated'
import { GRAPHQL_QUERY_POLICY } from '../../constants'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../contexts/authContext'


const Preference = () => {
  const { currentPanelist } = useContext(AuthContext);
  const { id, blockPromotions } = currentPanelist || {}
  const [preferenceSetting, setPreferenceSetting] = useState<{ blockPromotions?: boolean }>();
  const [onBlockPromotion, { loading }] = useHandleBlockUnblockPromotionMainMutation({ ...(GRAPHQL_QUERY_POLICY as any) });

  const handlePromotion = async (e: any) => {
    await onBlockPromotion({ variables: { updatePanelistInput: { id: id || "", blockPromotions: e.target.value === "true" } } });
    setPreferenceSetting({ ...preferenceSetting, blockPromotions: e.target.value === "true" });
  }

  useEffect(() => {
    if (currentPanelist)
      setPreferenceSetting({ ...preferenceSetting, blockPromotions: !!blockPromotions });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPanelist]);

  return (
    <Box mb={3}>
      <CardComponent cardTitle="Prefrences">
        <Grid container>
          <Grid item xs={12}>
            <Typography sx={{ marginRight: "10px" }}>Block daily paid survey email(s)?</Typography>
            <RadioGroup name='blockPromotions' value={String(preferenceSetting?.blockPromotions)} onChange={handlePromotion} sx={{ pt: 1 }}>
              <FormControlLabel value={"true"} disabled={loading} control={<Radio />} label="Yes" />
              <FormControlLabel value={"false"} disabled={loading} control={<Radio />} label="NO" />
            </RadioGroup>
          </Grid>
        </Grid>
      </CardComponent>
    </Box>
  )
}

export default Preference;