import { useEffect } from 'react'
import { useBestsellerState } from '../../context';
import { useGameState } from '../../context/Game';
import { useBestsellingServices } from '../../hooks'

export const GameOnPlatform = () => {
  const { byGames } = useBestsellerState();
  const { name } = useGameState();
  const { fetchGameOnPlatform } = useBestsellingServices();

  useEffect(() => {
    console.log(name);
    if(name) fetchGameOnPlatform({ game: name });
  }, [name, fetchGameOnPlatform])

  if(!byGames) return null;

  return (
    <>
      <p>Gameonplat</p>
    </>
  )
}

export default GameOnPlatform