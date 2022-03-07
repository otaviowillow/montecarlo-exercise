
import { IBestseller } from "../../models";
import { GameActions, GameActionTypes } from "../actions/Game";

const initialState: IBestseller = {
	Name: null,
  Platform: "",
  Year_of_Release: "",
  Genre: "",
  Publisher: null,
  NA_Sales: null,
  EU_Sales: null,
  JP_Sales: null,
  Other_Sales: null,
  Global_Sales: 0,
  Critic_Score: null,
  Critic_Count: null,
  User_Score: null,
  User_Count: null,
  Developer: null,
  Rating: null,
  RawgGame: null
};

const reducer = (state = initialState, action: GameActions = { type: null }): IBestseller => {
	switch (action.type) {
		case GameActionTypes.SET_GAME_DETAILS:
      console.log(action.game);
			return {
				...state,
        RawgGame: action.game
			};
    case GameActionTypes.SET_GAME_NAME:
			return {
				...state,
        Name: action.name || null
			};
		default: {
			throw new Error(`Error on reducer: Unhandled action type ${action.type}`);
		}
	}
};

export { reducer, initialState };
