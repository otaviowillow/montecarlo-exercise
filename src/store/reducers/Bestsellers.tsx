
import { IBestsellers } from "../../models";
import { BestsellersAction, BestsellersTypes } from "../actions/Bestsellers";

const initialState: IBestsellers = {
	platform: null,
	byPlatforms: null,
	byGames: null
};

const reducer = (state = initialState, action: BestsellersAction = { type: null }): IBestsellers => {
	switch (action.type) {
		case BestsellersTypes.SET_PLATFORM:
			return {
				...state,
        platform: action.platform || null
			};
		case BestsellersTypes.SET_BESTSELLERS_BY_PLATFORM:
			return {
				...state,
        byPlatforms: action.platforms || null
			};
		case BestsellersTypes.SET_BESTSELLERS_GAMES:
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
