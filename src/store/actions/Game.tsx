import { IGame } from '../../models'

export enum GameActionTypes {
	SET_GAME = "@game/SET_GAME_LIST",
}

export type GameActions = {
	type: GameActionTypes | null;
  game?: IGame;
};

export const setGame = (game: IGame) => ({ type: GameActionTypes.SET_GAME, game });

