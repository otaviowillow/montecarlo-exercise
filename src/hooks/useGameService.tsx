import { useState } from "react";
import { IRawgGame } from "../models";

interface IfetchGame {
  id?: string;
  search?: string;
}

interface IuseGamesList {
	fetchRawgGame: ({ id }: IfetchGame) => Promise<IRawgGame>;
	searchRawgGame: ({ search }: IfetchGame) => Promise<IRawgGame>;
  fetchGameScreenshots: ({ id }: IfetchGame) => Promise<string[]>;
	isFetching: boolean;
}

const useGamesListService = (): IuseGamesList => {
	const [isFetching, setIsFetching] = useState(false);

	const searchRawgGame = async ({ search }: IfetchGame) => {
		setIsFetching(true);
    const { results } = await (await fetch(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_RAWG_API}&search=${search}`)).json();
		setIsFetching(false);

		return results[0];
	};

	const fetchRawgGame = async ({ id }: IfetchGame) => {
		setIsFetching(true);
    const res = await (await fetch(`https://api.rawg.io/api/games/${id}?key=${process.env.REACT_APP_RAWG_API}`)).json();
		setIsFetching(false);

		return res;
	};

  const fetchGameScreenshots = async ({ id }: IfetchGame) => {
		setIsFetching(true);
    const { results } = await (await fetch(`https://api.rawg.io/api/games/${id}/screenshots?key=${process.env.REACT_APP_RAWG_API}`)).json();
		setIsFetching(false);
		
		return results.map((result: { image: string }) => result.image);
	};

	return { fetchRawgGame, searchRawgGame, fetchGameScreenshots, isFetching };
};

export default useGamesListService;
