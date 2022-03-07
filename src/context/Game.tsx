import React, { Dispatch, createContext, useReducer, useContext } from "react";
import { initialState, reducer } from "../store/reducers/Game";
import { IBestseller } from "../models";
import { GameActions } from "../store/actions/Game";

interface Props {
	children: JSX.Element;
	state?: IBestseller;
}

const GameState = createContext<IBestseller | undefined>(undefined);
const GameDispatch = createContext<Dispatch<GameActions> | undefined>(undefined);

const GameProvider = ({ children, state: gamesListState = initialState }: Props): JSX.Element => {
	const [state, dispatch] = useReducer(reducer, gamesListState);

	return (
		<GameState.Provider value={state}>
			<GameDispatch.Provider value={dispatch}>{children}</GameDispatch.Provider>
		</GameState.Provider>
	);
};

const useGameState = (): IBestseller => {
	const context = useContext(GameState);
	if (undefined === context) {
		throw new Error("Please use within GameStateProvider");
	}
	return context;
};

const useGameDispatch = (): React.Dispatch<GameActions> => {
	const context = useContext(GameDispatch);
	if (undefined === context) {
		throw new Error("Please use within GameDispatchProvider");
	}
	return context;
};

export { GameProvider, useGameState, useGameDispatch };
