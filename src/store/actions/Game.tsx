import { IRawgGame } from '../../models'

export enum GameActionTypes {
	SET_GAME_DETAILS = "@game/SET_GAME_DETAILS",
	SET_GAME_NAME = "@game/SET_GAME_NAME",
}

export type GameActions = {
	type: GameActionTypes | null;
  game?: IRawgGame | null;
	name?: string | null;
};

export const setGameDetails = (game: IRawgGame | null) => ({ type: GameActionTypes.SET_GAME_DETAILS, game });

export const setGameName = (name: string | null) => ({ type: GameActionTypes.SET_GAME_NAME, name });
