import { useState } from "react";
import { useBestsellerDispatch } from "../context";
import { IBestsellingGame, INameAndValue, IBestseller } from "../models";
import { setBestsellersByPlatform, setBestsellersGames } from "../store/actions";

import data from "./vg"

const YEAR = 2002
const MAX_GAMES_LIMIT = 15

interface IuseGamesList {
	fetchBestSellingByPlatform: () => {};
  fetchBestSellingGames: ({ platform }: { platform?: string | undefined; }) => INameAndValue[];
  fetchGameOnPlatform: ({ game }: { game: string; }) => IBestsellingGame[];
	isFetching: boolean;
}

interface IBestSell { 
  [x: string]: number; 
}

const useGamesListService = (): IuseGamesList => {
	const [isFetching, setIsFetching] = useState(false);
  const dispatch = useBestsellerDispatch();

	const fetchBestSellingByPlatform = () => {
		setIsFetching(true);
    const filteredData = data.filter((data: IBestsellingGame) => parseInt(data.Year_of_Release) > YEAR );
    const reducedData: IBestSell = filteredData.reduce((result: IBestSell, item: IBestsellingGame) => ({
      ...result,
      [item.Platform]: item.Global_Sales + result[item.Platform] || item.Global_Sales
    }), {});
    const res: INameAndValue[] = Object.entries(reducedData).map((entry) => ({ name: entry[0], value: entry[1] }))
    dispatch(setBestsellersByPlatform(res));
		setIsFetching(false);

		return res;
	};

  const fetchBestSellingGames = ({ platform }: { platform?: string }) => {
		setIsFetching(true);
    const filteredData = platform ? data.filter((data: IBestsellingGame) => parseInt(data.Year_of_Release) > YEAR && data.Platform === platform) : data.filter((data: IBestsellingGame) => parseInt(data.Year_of_Release) > YEAR);
    const reducedData: IBestSell = filteredData.reduce((result: IBestSell, item: IBestsellingGame) => ({
      ...result,
      [item.Name]: Math.round(item.Global_Sales) + result[item.Name] || Math.round(item.Global_Sales)
    }), {});
    const arrayData: INameAndValue[] = Object.entries(reducedData).map((entry) => ({ name: entry[0], value: entry[1] }));
    const res = arrayData.sort((a, b) => a.value - b.value).reverse().slice(0, MAX_GAMES_LIMIT);
    dispatch(setBestsellersGames(res));
		setIsFetching(false);

		return res;
	};

  const fetchGameOnPlatform = ({ game }: { game: string }) => {
    console.log("fetching")
		setIsFetching(true);
    const res: IBestsellingGame[] = data.filter((data: IBestsellingGame) => parseInt(data.Year_of_Release) > YEAR && data.Name === game);
    // const reducedData: IBestSell = filteredData.reduce((result: IBestSell, item: IBestsellingGame) => ({
    //   ...result,
    //   [item.Name]: Math.round(item.Global_Sales) + result[item.Name] || Math.round(item.Global_Sales)
    // }), {});
    // const arrayData: INameAndValue[] = Object.entries(reducedData).map((entry) => ({ name: entry[0], value: entry[1] }));
    // const res = arrayData.sort((a, b) => a.value - b.value).reverse().slice(0, MAX_GAMES_LIMIT);
    // console.log(filteredData)
    console.log("res", res)
    // dispatch(setGameOnPlatform(res));
		setIsFetching(false);

		return res;
	};

	return { fetchBestSellingByPlatform, fetchBestSellingGames, fetchGameOnPlatform, isFetching };
};

export default useGamesListService;
