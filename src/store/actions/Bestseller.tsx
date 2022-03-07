import { INameAndValue } from '../../models'

export enum BestsellerTypes {
	SET_BESTSELLERS_GAMES = "@game/SET_BESTSELLERS_GAMES",
	SET_BESTSELLERS_BY_PLATFORM = "@game/SET_BESTSELLERS_BY_PLATFORM",
	SET_PLATFORM = "@game/SET_PLATFORM",
}

export type BestsellerAction = {
	type: BestsellerTypes | null;
  games?: INameAndValue[];
	platforms?: INameAndValue[];
	platform?: string;
};

export const setBestsellersGames = (games: INameAndValue[]) => ({ type: BestsellerTypes.SET_BESTSELLERS_GAMES, games });

export const setBestsellersByPlatform = (platforms: INameAndValue[]) => ({ type: BestsellerTypes.SET_BESTSELLERS_BY_PLATFORM, platforms });

export const setPlatform = (platform: string) => ({ type: BestsellerTypes.SET_PLATFORM, platform });