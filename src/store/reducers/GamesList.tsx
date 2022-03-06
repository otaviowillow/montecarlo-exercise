
import { IGamesList } from "../../models/";
import { GamesListAction, GamesListActionTypes } from "../actions/GamesList";

const initialState: IGamesList = {
	count: 0,
	next: null,
  previous: null,
  results: null
};

const reducer = (state = initialState, action: GamesListAction = { type: null }): IGamesList => {
	switch (action.type) {
		case GamesListActionTypes.SET_GAMES:
			return {
				...state,
        ...action.games
			};
    case GamesListActionTypes.RESET_GAMES:
			return initialState;
		default: {
			throw new Error(`Error on reducer: Unhandled action type ${action.type}`);
		}
	}
};

export { reducer, initialState };
