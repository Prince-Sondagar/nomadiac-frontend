import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { Box } from "@mui/system";
import NoDataFoundComponent from "../../components/Common/NoDataFound";
import { PaginationInput, PaginationPayload, PointHistory, useFetchPanelistPointHistoryQuery } from "../../generated";
import { fetchPointHistoryHandler } from "../../utils/surveyHandler";
import { AuthContext } from "../../contexts/authContext";
import { useContext, useState } from "react";
import { GRAPHQL_QUERY_POLICY } from "../../constants";
import Pagination from "../../components/Common/pagination/Pagination";
import { Maybe } from "yup";
import TableLoader from "../../components/Common/TableLoader";
import { formatDate } from "../../utils";

const PointHistoryTable = () => {
  const { currentPanelist } = useContext(AuthContext);
  const { id } = currentPanelist || {}
  const [paginationState, setPaginationState] = useState<PaginationInput>({ limit: 10, page: 1 });
  const [pagination, setPagination] = useState<Maybe<PaginationPayload>>({});
  const [pointHistoryList, setPointHistoryList] = useState<PointHistory[]>([]);

  const { loading } = useFetchPanelistPointHistoryQuery({
    ...GRAPHQL_QUERY_POLICY as any,
    variables: fetchPointHistoryHandler(id || "", paginationState),
    onCompleted({ fetchPanelistPointHistory }) {
      const list = fetchPanelistPointHistory?.pointHistory
      setPointHistoryList(list as PointHistory[]);
      const paginationData = fetchPanelistPointHistory?.pagination;
      if (paginationData) setPagination(paginationData);
      else setPagination(pagination);
    }
  });

  return (
    <>
      <Box className="table-overflow" p={4}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="customized table">
            <TableHead sx={{ backgroundColor: "#edbb5f" }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 600 }}>ID</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Survey ID</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Points</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Description</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Demanded At</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Created At</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={10}>
                    <TableLoader numberOfRows={10} numberOfColumns={6} />
                  </TableCell>
                </TableRow>
              ) : (pointHistoryList?.map((pointHistory, index) => {
                const { id, points, details, updatedAt, createdAt, surveyId } = pointHistory || {};
                return (
                  <TableRow key={id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{surveyId || "N/A"}</TableCell>
                    <TableCell>{points}</TableCell>
                    <TableCell>{details}</TableCell>
                    <TableCell>{formatDate(+updatedAt)}</TableCell>
                    <TableCell>{formatDate(+createdAt)}</TableCell>
                  </TableRow>
                );
              }))}
            </TableBody>
          </Table>
        </TableContainer>

        {!loading && !pointHistoryList?.length && (
          <Box display="flex" justifyContent="center" pb={12} pt={5}>
            <NoDataFoundComponent />
          </Box>
        )}
      </Box>
      {pointHistoryList.length > 5 ?
        <Box mb={-4}>
          <Pagination pagination={pagination as PaginationPayload} paginationState={paginationState as PaginationInput} setPaginationState={setPaginationState} />
        </Box> : ""}
    </>
  )
}

export default PointHistoryTable;