import React, { useEffect } from 'react'
import { useGamesListState } from '../../context';
import { useGamesListService } from '../../hooks';

const BiggestMetacriticList = () => {
  const { results } = useGamesListState();
  const { fetchGamesList, isFetching } = useGamesListService();
  
  useEffect(() => {
    if(!results && !isFetching) fetchGamesList({ ordering: "metacritic" });
  }, [results, fetchGamesList, isFetching])
  
  if(!results) return <p>loading</p>;

  return (
    <div>BiggestMetacriticList</div>
  )
}

export default BiggestMetacriticList
