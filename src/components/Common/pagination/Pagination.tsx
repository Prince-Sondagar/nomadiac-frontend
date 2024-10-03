import { Dispatch, SetStateAction } from 'react'
import ReactPaginate from 'react-paginate'
import "./pagination.css"
import { PaginationInput, PaginationPayload } from '../../../generated';

type IPagination = {
  pagination: PaginationPayload
  paginationState: PaginationInput,
  setPaginationState: Dispatch<SetStateAction<PaginationInput>>
}

export interface Event {
  selected: number;
}

const Pagination = ({ pagination, paginationState, setPaginationState }: IPagination) => {

  const handlePageClick = (event: Event) => {
    setPaginationState({ ...paginationState, page: event.selected + 1 })
  };

  return (
    <ReactPaginate
      nextLabel=">"
      onPageChange={handlePageClick}
      pageRangeDisplayed={1}
      marginPagesDisplayed={1}
      pageCount={pagination?.totalPages as number}
      previousLabel="<"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      breakLabel="..."
      breakClassName="page-item"
      breakLinkClassName="page-link"
      containerClassName="pagination"
      activeClassName="active"
      className="react-paginate"
      renderOnZeroPageCount={null}
    />
  )
}

export default Pagination