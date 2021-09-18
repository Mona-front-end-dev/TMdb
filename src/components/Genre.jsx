import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Row from 'react-bootstrap/Row';
import { useParams } from 'react-router-dom';
import { getMoviesByGenrePaginated } from '../services/TmApi';
import Col from 'react-bootstrap/Col';
import MovieCard from './cards/MovieCard';
import Pagination from '../pages/partials/Pagination';
import { useUrlSearchParams } from 'use-url-search-params';

/*used use-url-search params package for pagination, url part which is shown in the browser. 
By that url get read and updated the part which is after ?. For example(?page=2) in url becomes 
(?page=3) after clicking on nextPage btn.*/

const Genre = () => {
  const { genreId } = useParams();
  const [searchParams, setSearchParams] = useUrlSearchParams(
    { page: 1 },
    { page: Number }
  ); //
  const [page, setPage] = useState(searchParams.page);

  const { data, error, isError, isLoading, isPreviousData } = useQuery(
    ['movies', page, genreId],
    () => getMoviesByGenrePaginated(genreId, page),
    {
      staleTime: 1000 * 60 * 5, // 5 min
      cacheTime: 1000 * 60 * 30, // 30 min
      keepPreviousData: true,
    }
  );

  useEffect(() => {
    //when page state changes, setSearchParams updates ?= in url.
    setSearchParams({ ...searchParams, page });
  }, [page]);

  useEffect(() => {
    // set pagination to 1 when new genre selected
    setPage(1);
    setSearchParams({ ...searchParams, page });
  }, [genreId]);

  return (
    <>
      <Row>
        {isLoading && <span>Movies are laoding... </span>}
        {isError && <span>An error occured: {error}</span>}
        {data &&
          data?.results.map((movie, i) => (
            <Col xs={12} sm={4} lg={3} xxl={2} className='mb-4' key={movie.id}>
              <MovieCard movie={movie} />
            </Col>
          ))}
      </Row>
      <Row>
        <Pagination
          setPage={setPage} //to update page state
          page={page}
          isPreviousData={isPreviousData}
          hasMore={data?.total_pages > data?.page}
        />
      </Row>
    </>
  );
};

export default Genre;
