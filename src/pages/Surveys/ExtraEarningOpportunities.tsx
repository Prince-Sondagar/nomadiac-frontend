import { FC } from 'react'
import { Box, Button } from '@mui/material'
import { Table, TableBody, TableCell, TableHead, TableRow, TableContainer } from "@mui/material";
import { ProjectTableStyle } from '../../theme/styledComponents';
import { Link } from 'react-router-dom';
import { ADDITIONAL_INFORMATION_ROUTE } from '../../constants';

const LucidSurveyTable: FC = () => {
  return (
    <Box>
      <h2>
        Extra Earning Opportunities
      </h2>

      <Box className="table-overflow" pt={4}>
        <ProjectTableStyle>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#edbb5f" }}>
                  <TableCell sx={{ fontWeight: 800 }}>Points</TableCell>
                  <TableCell sx={{ fontWeight: 800 }}>
                    Survey Type
                  </TableCell>
                  <TableCell sx={{ fontWeight: 800 }}>
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                <TableRow>
                  <TableCell sx={{ fontWeight: 800 }}>100</TableCell>
                  <TableCell sx={{ fontWeight: 800 }}>
                    Additional Information
                  </TableCell>
                  <TableCell>
                    <Link to={ADDITIONAL_INFORMATION_ROUTE}>
                      <Button
                        variant='contained'
                        color='primary'
                        sx={{ background: "#edbb5f", ":hover": { background: "#edbb5f" } }}
                      >
                        Take Survey
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </ProjectTableStyle>
      </Box>
    </Box>
  )
}

export default LucidSurveyTable