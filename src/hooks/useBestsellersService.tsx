import { useState } from "react";
import { INameAndValue, IBestseller } from "../models";

import data from "./vg"

const YEAR = 2002
const MAX_GAMES_LIMIT = 15

interface IUseGamesListService {
  fetchTopByDate: () => INameAndValue[];
	fetchTopByPlatform: ({ platform }: { platform?: string | undefined; }) => INameAndValue[];
  fetchGameOnPlatform: ({ name }: { name: string; }) => IBestseller[];
	isFetching: boolean;
}

const useGamesListService = (): IUseGamesListService => {
	const [isFetching, setIsFetching] = useState(false);

	const fetchTopByDate = () => {
		setIsFetching(true);
    // Filter data below limit year (2002)
    const filteredData = data.filter((data: IBestseller) => parseInt(data.Year_of_Release) > YEAR ); 
    // Reduce items to all the global sales made on EACH specific platform
    const reducedData: { [x: string]: number; } = filteredData.reduce((result: { [x: string]: number; }, item: IBestseller) => ({
      ...result,
      [item.Platform]: item.Global_Sales + result[item.Platform] || item.Global_Sales
    }), {}); 
    // Make the data friendly to recharts.js
    const res: INameAndValue[] = Object.entries(reducedData).map((entry) => ({ name: entry[0], value: entry[1] })) 
		setIsFetching(false);

		return res;
	};

  const fetchTopByPlatform = ({ platform }: { platform?: string }) => {
		setIsFetching(true);
    // Filter data below limit year (2002); if there's a platform set, also filter for specific platform
    const filteredData = platform ? data.filter((data: IBestseller) => parseInt(data.Year_of_Release) > YEAR && data.Platform === platform) : data.filter((data: IBestseller) => parseInt(data.Year_of_Release) > YEAR);
    // Reduce items to all the global sales made on ONE specific platform
    const reducedData: { [x: string]: number; } = filteredData.reduce((result: { [x: string]: number; }, item: IBestseller) => ({
      ...result,
      [item.Name || ""]: Math.round(item.Global_Sales) + result[item.Name || ""] || Math.round(item.Global_Sales)
    }), {});
    // Make the data friendly to recharts.js
    const arrayData: INameAndValue[] = Object.entries(reducedData).map((entry) => ({ name: entry[0], value: entry[1] }));
    // Slice and normalize data
    const res = arrayData.sort((a, b) => a.value - b.value).reverse().slice(0, MAX_GAMES_LIMIT);
		setIsFetching(false);
		return res;
	};

  const fetchGameOnPlatform = ({ name }: { name: string }) => {
		setIsFetching(true);
    const res: IBestseller[] = data.filter((data: IBestseller) => parseInt(data.Year_of_Release) > YEAR && data.Name === name);
		setIsFetching(false);

		return res;
	};

	return { fetchTopByDate, fetchTopByPlatform, fetchGameOnPlatform, isFetching };
};

export default useGamesListService;