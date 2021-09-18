import React from 'react';
import { useIsFetching } from 'react-query';
import FadeLoader from 'react-spinners/FadeLoader';

const FetchingSpinner = () => {
  const isFetching = useIsFetching();

  return isFetching ? (
    <div className='spinner'>
      <FadeLoader color={'#888'} size={100} />
    </div>
  ) : null;
};

export default FetchingSpinner;
