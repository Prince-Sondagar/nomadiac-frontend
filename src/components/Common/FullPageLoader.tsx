import { CircularProgress, Backdrop } from '@mui/material';
import { FC } from 'react';
import { FullPageLoaderPropsType } from '../../interfaceTypes';

const FullPageLoader: FC<FullPageLoaderPropsType> = ({ loading }): JSX.Element => (
  <Backdrop
    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open={loading}
    onClick={() => { }}
  >
    <CircularProgress color="inherit" />
  </Backdrop>
);


export default FullPageLoader;