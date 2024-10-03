import { Chip, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { Dispatch, FC, SetStateAction } from 'react'
import { PaginationInput, PaymentWithdrawalStatus } from '../../generated'
import { PaymentWithdrawal } from '../../generated'
import { Maybe } from '../../generated'
import { PaginationPayload } from '../../generated'
import NoDataFoundComponent from '../../components/Common/NoDataFound'
import { Box } from '@mui/system'
import TableLoader from '../../components/Common/TableLoader'
import { capitalizeFirstLetter, formatDate, getColorForPaymentRequestStatus } from '../../utils'
import Pagination from '../../components/Common/pagination/Pagination'


type Props = {
  paginationState: PaginationInput,
  setPaginationState: Dispatch<SetStateAction<PaginationInput>>,
  pagination: Maybe<PaginationPayload>,
  withdrawalPaymentList: PaymentWithdrawal[],
  setWithdrawalPaymentList: Dispatch<SetStateAction<PaymentWithdrawal[]>>,
  isLoading: boolean
}

const WithdrawalPointTable: FC<Props> = ({ paginationState, setPaginationState, pagination, withdrawalPaymentList, isLoading }) => {

  return (
    <>
      <Box className="table-overflow" p={4}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="customized table">
            <TableHead sx={{ backgroundColor: "#edbb5f" }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 600 }}>ID</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Points</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Type</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Demanded At</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Created At</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={10}>
                    <TableLoader numberOfRows={10} numberOfColumns={6} />
                  </TableCell>
                </TableRow>
              ) : (
                withdrawalPaymentList?.map((paymentRequest, index) => {
                  const { id, status, points, type, createdAt, updatedAt } = paymentRequest || {};
                  return (
                    <TableRow key={id}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{points}</TableCell>
                      <TableCell>{capitalizeFirstLetter(`${type?.split("_")?.join(" ")}`)}</TableCell>
                      <TableCell>
                        <Chip label={capitalizeFirstLetter(status ?? "") ?? ""} color={getColorForPaymentRequestStatus(status as PaymentWithdrawalStatus)} />
                      </TableCell>
                      <TableCell>{formatDate(+updatedAt)}</TableCell>
                      <TableCell>{formatDate(+createdAt)}</TableCell>
                    </TableRow>
                  );
                })
              )}
            </TableBody>
          </Table>
        </TableContainer>

        {!isLoading && !withdrawalPaymentList?.length && (
          <Box display="flex" justifyContent="center" pb={12} pt={5}>
            <NoDataFoundComponent />
          </Box>
        )}
      </Box>
      {withdrawalPaymentList ?
        <Box mb={-4}>
          <Pagination pagination={pagination as PaginationPayload} paginationState={paginationState as PaginationInput} setPaginationState={setPaginationState} />
        </Box> : ""}
    </>
  )
}

export default WithdrawalPointTable