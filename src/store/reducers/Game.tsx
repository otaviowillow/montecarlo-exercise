
import { IGame } from "../../models";
import { GameActions, GameActionTypes } from "../actions/Game";

const initialState: IGame = {
	id: 0,
  slug: "",
  name: "",
  released: "",
  tba: false,
  background_image: "",
  rating: 0,
  rating_top: 0,
  ratings: {},
  ratings_count: 0,
  reviews_text_count: "",
  added: 0,
  added_by_status: {},
  metacritic: 0,
  playtime: 0,
  suggestions_count: 0,
  updated: null,
  esrb_rating: {
    id: 0,
    slug: "",
    name: ""
  },
  platforms: [],
	description: null,
	description_raw: null
};

const reducer = (state = initialState, action: GameActions = { type: null }): IGame => {
	switch (action.type) {
		case GameActionTypes.SET_GAME_DETAILS:
			return {
				...state,
        ...action.game
			};
    case GameActionTypes.SET_GAME_NAME:
			return {
				...state,
        name: action.name || null
			};
		default: {
			throw new Error(`Error on reducer: Unhandled action type ${action.type}`);
		}
	}
};

export { reducer, initialState };
