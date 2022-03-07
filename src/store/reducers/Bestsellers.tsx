
import { IBestsellers } from "../../models";
import { BestsellerAction, BestsellerTypes } from "../actions/Bestseller";

const initialState: IBestsellers = {
	platform: null,
	byPlatforms: null,
	byGames: null
};

const reducer = (state = initialState, action: BestsellerAction = { type: null }): IBestsellers => {
	switch (action.type) {
		case BestsellerTypes.SET_PLATFORM:
			return {
				...state,
        platform: action.platform || null
			};
		case BestsellerTypes.SET_BESTSELLERS_BY_PLATFORM:
			return {
				...state,
        byPlatforms: action.platforms || null
			};
		case BestsellerTypes.SET_BESTSELLERS_GAMES:
			return {
				...state,
        byGames: action.games || null
			};
		default: {
			throw new Error(`Error on reducer: Unhandled action type ${action.type}`);
		}
	}
};

export { reducer, initialState };
