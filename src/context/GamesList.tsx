import React, { Dispatch, createContext, useReducer, useContext } from "react";
import { initialState, reducer } from "../store/reducers";
import { IGamesList } from "../models";
import { GamesListAction } from "../store/actions/GamesList";

interface Props {
	children: JSX.Element;
	state?: IGamesList;
}

const GamesListState = createContext<IGamesList | undefined>(undefined);
const GamesListDispatch = createContext<Dispatch<GamesListAction> | undefined>(undefined);

const GamesListProvider = ({ children, state: gamesListState = initialState }: Props): JSX.Element => {
	const [state, dispatch] = useReducer(reducer, gamesListState);

	return (
		<GamesListState.Provider value={state}>
			<GamesListDispatch.Provider value={dispatch}>{children}</GamesListDispatch.Provider>
		</GamesListState.Provider>
	);
};

const useGamesListState = (): IGamesList => {
	const context = useContext(GamesListState);
	if (undefined === context) {
		throw new Error("Please use within GamesListStateProvider");
	}
	return context;
};

const useGamesListDispatch = (): React.Dispatch<GamesListAction> => {
	const context = useContext(GamesListDispatch);
	if (undefined === context) {
		throw new Error("Please use within GamesListDispatchProvider");
	}
	return context;
};

export { GamesListProvider, useGamesListState, useGamesListDispatch };
