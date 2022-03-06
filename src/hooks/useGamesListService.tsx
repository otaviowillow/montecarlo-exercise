import { useState } from "react";
import { useGamesListDispatch } from "../context";
import { IGamesList } from "../models";
import { setGamesList } from "../store/actions";

interface IfetchGamesList {
  ordering?: "name" | "released" | "added" | "created" | "updated" | "rating" | "metacritic";
  dates?: string;
  parent_platforms?: string;
}

interface IuseGamesList {
	fetchGamesList: ({ ordering }: IfetchGamesList) => Promise<IGamesList>;
	isFetching: boolean;
}

const useGamesListService = (): IuseGamesList => {
	const [isFetching, setIsFetching] = useState(false);
  const dispatch = useGamesListDispatch();

	const fetchGamesList = async (params: IfetchGamesList) => {
    const initialParams = { metacritic: "1,100" }
    const qs = Object.entries({...initialParams, ...params}).map(([key, val]) => `${key}=${encodeURIComponent(val)}`).join('&')
		setIsFetching(true);
    const res = await (await fetch(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_RAWG_API}&${qs}`)).json();
    dispatch(setGamesList(res));
		setIsFetching(false);

		return res;
	};

	return { fetchGamesList, isFetching };
};

export default useGamesListService;
