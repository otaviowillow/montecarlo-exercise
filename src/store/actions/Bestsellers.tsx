import { INameAndValue } from '../../models'

export enum BestsellersTypes {
	SET_BESTSELLERS_GAMES = "@bestsellers/SET_BESTSELLERS_GAMES",
	SET_BESTSELLERS_BY_PLATFORM = "@bestsellers/SET_BESTSELLERS_BY_PLATFORM",
	SET_PLATFORM = "@bestsellers/SET_PLATFORM",
	SET_GAME_PLATFORM = "@bestsellers/SET_GAME_PLATFORM",
}

export type BestsellersAction = {
	type: BestsellersTypes | null;
  games?: INameAndValue[];
	platforms?: INameAndValue[];
	platform?: string;
};

export const setBestsellersGames = (games: INameAndValue[]) => ({ type: BestsellersTypes.SET_BESTSELLERS_GAMES, games });

export const setBestsellersByPlatform = (platforms: INameAndValue[]) => ({ type: BestsellersTypes.SET_BESTSELLERS_BY_PLATFORM, platforms });

export const setPlatform = (platform: string) => ({ type: BestsellersTypes.SET_PLATFORM, platform });