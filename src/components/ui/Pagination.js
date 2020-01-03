import React from "react";
import styled from "styled-components";
import ReactPaginate from "react-paginate";

const Pagination = ({ totalPages, setcurrentPage }) => {
  return (
    <>
      {totalPages > 0 && (
        <PaginationWrapper>
          <ReactPaginate
            pageCount={totalPages}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            onPageChange={e => {
              setcurrentPage(e.selected + 1);
            }}
            containerClassName="page-list"
            pageClassName="page-item"
          />
        </PaginationWrapper>
      )}
    </>
  );
};

const PaginationWrapper = styled.div`
  margin: auto;
  margin-top: 1rem;
  max-width: 20rem;

  /* Styling ul */
  .page-list {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style-type: none;
    margin-bottom: 0;
    padding-left: 0;
  }

  /* Styling li*/
  .page-item,
  .previous,
  .next {
    width: 2rem;
    height: 2rem;
    border-radius: 0px;
    background-color: var(--main);
    border: 1px solid var(--main);
    color: var(--mainWhite);
    cursor: pointer;

    /* Positioning inside a */
    display: flex;
    justify-content: center;
    align-items: center;

    /* Styling inside a */
    a {
      padding: 1rem;
    }
    a:hover,
    a:active,
    a:visited,
    a:focus {
      text-decoration: none;
      outline: none;
    }
  }
  /* Styling disabled li */
  .selected,
  .disabled {
    color: var(--lighter);
    border: 1px solid var(--lighter);
    background-color: var(--mainWhite);
    cursor: default;
  }

  /* Animating li and inside a */
  .page-item:hover,
  .previous:hover,
  .next:hover {
    animation: rotate 0.7s ease-in-out both;

    a {
      animation: storm 0.7s ease-in-out both;
      animation-delay: 0.06s;
    }
  }
  /* Disabling animation for disabled li */
  .selected:hover,
  .disabled:hover {
    animation: none;

    a {
      animation: none;
    }
  }
`;

export default Pagination;

// const ButtonWrapper = styled.div`
//   width: 2rem;
// `;
// { currentPage !== 2 && currentPage !== 1 && <span>...</span> }
// {
// currentPage - 1 > 1 && (
//   <Button onClick={paginationPrev} className="page">
//     <span>{currentPage - 1}</span>
//   </Button>
// )
// }
// <Button disabled className="page">
//   <span>{currentPage}</span>
// </Button>
// {
// currentPage + 1 < totalPages && (
//   <Button onClick={paginationNext} className="page">
//     <span>{currentPage + 1}</span>
//   </Button>
// )
// }
// {
// currentPage !== totalPages - 1 && currentPage !== totalPages && (
//   <span>...</span>
// )
// }
// {
// currentPage !== totalPages && (
//   <Button onClick={paginationLast} className="page">
//     <span>{totalPages}</span>
//   </Button>
// )
// }

// <PaginationWrapper>
//   {/* 1- Prev */}
//   <ButtonWrapper>
//     <Button
//       onClick={paginationPrev}
//       className="page"
//       disabled={currentPage === 1}
//     >
//       <span>&#60;</span>
//     </Button>
//   </ButtonWrapper>

//   {/* 2- 1 */}
//   <ButtonWrapper>
//     <Button
//       onClick={paginationFirst}
//       className="page"
//       disabled={currentPage === 1}
//     >
//       <span>1</span>
//     </Button>
//   </ButtonWrapper>

//   {/* 3- 2 or empty */}
//   <ButtonWrapper>
//     {currentPage <= 3 && (
//       <Button
//         onClick={paginationNext}
//         className="page"
//         disabled={currentPage === 2}
//       >
//         <span>2</span>
//       </Button>
//     )}
//   </ButtonWrapper>

//   {/* 4- 3 or empty or current - 1 */}
//   <ButtonWrapper>
//     {currentPage === 2 && (
//       <Button onClick={paginationNext} className="page">
//         <span>3</span>
//       </Button>
//     )}
//     {currentPage === 3 && (
//       <Button
//         onClick={paginationPrev}
//         className="page"
//         disabled={currentPage === 3}
//       >
//         <span>3</span>
//       </Button>
//     )}
//     {currentPage > 3 && currentPage < totalPages - 2 && (
//       <Button onClick={paginationPrev} className="page">
//         <span>{currentPage - 1}</span>
//       </Button>
//     )}
//   </ButtonWrapper>

//   {/* 5- Current or empty or next for 3 or prev for total - 2*/}
//   <ButtonWrapper>
//     {currentPage === 3 && (
//       <Button onClick={paginationNext} className="page">
//         <span>4</span>
//       </Button>
//     )}
//     {currentPage > 3 && currentPage <= totalPages - 3 && (
//       <Button className="page" disabled>
//         <span>{currentPage}</span>
//       </Button>
//     )}
//     {currentPage === totalPages - 2 && (
//       <Button onClick={paginationPrev} className="page">
//         <span>{currentPage - 1}</span>
//       </Button>
//     )}
//   </ButtonWrapper>

//   {/* 6- Current + 1 or total - 3 */}
//   {currentPage > 3 && currentPage < totalPages - 2 && (
//     <Button className="page" onClick={paginationNext}>
//       <span>{currentPage + 1}</span>
//     </Button>
//   )}
//   {currentPage === totalPages - 2 && (
//     <Button className="page" disabled>
//       <span>{currentPage}</span>
//     </Button>
//   )}
//   {currentPage === totalPages - 1 && (
//     <Button onClick={paginationPrev} className="page">
//       <span>{currentPage - 1}</span>
//     </Button>
//   )}

//   {/* 7- Empty or next for current = total -2 or current for total - 1 or prev for total*/}
//   <ButtonWrapper>
//     {currentPage === totalPages - 2 && (
//       <Button onClick={paginationNext} className="page">
//         <span>{currentPage + 1}</span>
//       </Button>
//     )}
//     {currentPage === totalPages - 1 && (
//       <Button className="page" disabled>
//         <span>{currentPage}</span>
//       </Button>
//     )}
//     {currentPage === totalPages && (
//       <Button onClick={paginationPrev} className="page">
//         <span>{currentPage - 1}</span>
//       </Button>
//     )}
//   </ButtonWrapper>

//   {/* 8- Last page */}
//   <ButtonWrapper>
//     <Button
//       onClick={paginationLast}
//       className="page"
//       disabled={currentPage === totalPages}
//     >
//       <span>{totalPages}</span>
//     </Button>
//   </ButtonWrapper>

//   {/* 9- Next page */}
//   <ButtonWrapper>
//     <Button
//       onClick={paginationNext}
//       className="page"
//       disabled={currentPage === totalPages}
//     >
//       <span>&#62;</span>
//     </Button>
//   </ButtonWrapper>
// </PaginationWrapper>
