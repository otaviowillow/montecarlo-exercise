import { IGamesList } from '../../models/'

export enum GamesListActionTypes {
	SET_GAMES = "@gamesList/SET_GAMES_LIST",
}

export type GamesListAction = {
	type: GamesListActionTypes | null;
  games?: IGamesList;
};

export const setGamesList = (games: IGamesList) => ({ type: GamesListActionTypes.SET_GAMES, games });

