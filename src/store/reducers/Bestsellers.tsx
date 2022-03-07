
import { IBestsellers } from "../../models";
import { BestsellersAction, BestsellersTypes } from "../actions/Bestsellers";

const initialState: IBestsellers = {
	platform: null,
	byPlatforms: null,
	byPlatform: null,
	byDate: null
};

const reducer = (state = initialState, action: BestsellersAction = { type: null }): IBestsellers => {
	switch (action.type) {
		case BestsellersTypes.SET_PLATFORM:
			return {
				...state,
        platform: action.platform || null
			};
		case BestsellersTypes.SET_TOP_GAMES_BY_DATE:
			return {
				...state,
        byDate: action.byDate || null
			};
		case BestsellersTypes.SET_TOP_GAMES_BY_PLATFORMS:
			return {
				...state,
        byPlatforms: action.byPlatforms || null
			};
		case BestsellersTypes.SET_TOP_GAME_BY_PLATFORM:
			return {
				...state,
        byPlatform: action.byPlatform || null
			};
		default: {
			throw new Error(`Error on reducer: Unhandled action type ${action.type}`);
		}
	}
};

export { reducer, initialState };
