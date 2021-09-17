import React from 'react';
import { Button } from 'react-bootstrap';

const Pagination = ({ setPage, page, isPreviousData, hasMore }) => {
  return (
    <div className='align-items-center mt-4 d-flex justify-content-between'>
      <Button
        className='btn-dark'
        onClick={() => setPage((old) => Math.max(old - 1, 1))}
        disabled={page === 1}
      >
        Prev
      </Button>
      <span>Page {page}</span>
      <Button
        className='btn-dark'
        onClick={() => {
          if (!isPreviousData && hasMore) {
            setPage((old) => old + 1);
          }
        }}
        disabled={isPreviousData || !hasMore}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
