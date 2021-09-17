import React from "react";
import { Button } from "react-bootstrap";

const Pagination = ({ setPage, page, isPreviousData, hasMore }) => {
  return (
    <div className="m-3">
      <Button
        onClick={() => setPage((old) => Math.max(old - 1, 1))}
        disabled={page === 1}
      >
        Prev
      </Button>
      <span>Current {page}</span>
      <Button
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