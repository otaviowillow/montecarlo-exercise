import { IBestseller, INameAndValue } from '../../models'

export enum BestsellersTypes {
	SET_TOP_GAMES_BY_PLATFORMS = "@bestsellers/SET_TOP_GAMES_BY_PLATFORMS",
	SET_TOP_GAME_BY_PLATFORM = "@bestsellers/SET_TOP_GAME_BY_PLATFORM",
	SET_TOP_GAMES_BY_DATE = "@bestsellers/SET_TOP_GAMES_BY_DATE",
	SET_PLATFORM = "@bestsellers/SET_PLATFORM",
}

export type BestsellersAction = {
	type: BestsellersTypes | null;
	byPlatform?: IBestseller[] | null;
	byPlatforms?: INameAndValue[] | null;
	byDate?: INameAndValue[] | null;
	platform?: string | null;
};

export const setTopGamesByPlatforms = (byPlatforms: INameAndValue[] | null) => ({ type: BestsellersTypes.SET_TOP_GAMES_BY_PLATFORMS, byPlatforms });

export const setTopGameByPlatform = (byPlatform: IBestseller[] | null) => ({ type: BestsellersTypes.SET_TOP_GAME_BY_PLATFORM, byPlatform });

export const setTopGamesByDate = (byDate: INameAndValue[] | null) => ({ type: BestsellersTypes.SET_TOP_GAMES_BY_DATE, byDate });

export const setPlatform = (platform: string | null) => ({ type: BestsellersTypes.SET_PLATFORM, platform });
