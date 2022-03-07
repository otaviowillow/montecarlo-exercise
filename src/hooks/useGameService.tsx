import { useState } from "react";
import { useGameDispatch } from "../context/Game";
import { IGame } from "../models";
import { setGameDetails } from "../store/actions/Game";

interface IfetchGame {
  id?: string;
  game_pk?: string;
}

interface IuseGamesList {
	fetchGame: ({ id }: IfetchGame) => Promise<IGame>;
  fetchGameScreenshots: ({ id }: IfetchGame) => Promise<string[]>;
	isFetching: boolean;
}

const useGamesListService = (): IuseGamesList => {
	const [isFetching, setIsFetching] = useState(false);
  const dispatch = useGameDispatch();

	const fetchGame = async ({ id }: IfetchGame) => {
		setIsFetching(true);
    const res = await (await fetch(`https://api.rawg.io/api/games/${id}?key=${process.env.REACT_APP_RAWG_API}`)).json();
    dispatch(setGameDetails(res));
		setIsFetching(false);

		return res;
	};

  const fetchGameScreenshots = async ({ id }: IfetchGame) => {
		setIsFetching(true);
    const { results } = await (await fetch(`https://api.rawg.io/api/games/${id}/screenshots?key=${process.env.REACT_APP_RAWG_API}`)).json();
		setIsFetching(false);
		return results.map((result: { image: string }) => result.image);
	};

	return { fetchGame, fetchGameScreenshots, isFetching };
};

export default useGamesListService;
