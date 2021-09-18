import React from 'react';
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';

const Pagination = ({ setPage, page, isPreviousData, hasMore }) => {
  return (
    <Col className='align-items-center m-5 d-flex justify-content-between'>
      <Button
        className='btn-dark'
        onClick={() => setPage((old) => Math.max(old - 1, 1))}
        disabled={page === 1}
      >
        Previous
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
    </Col>
  );
};

export default Pagination;
