import React, { Dispatch, createContext, useReducer, useContext } from "react";
import { initialState, reducer } from "../store/reducers/Bestsellers";
import { IBestsellers } from "../models";
import { BestsellerAction } from "../store/actions/Bestseller";

interface Props {
	children: JSX.Element;
	state?: IBestsellers;
}

const BestsellerState = createContext<IBestsellers | undefined>(undefined);
const BestsellerDispatch = createContext<Dispatch<BestsellerAction> | undefined>(undefined);

const BestsellerProvider = ({ children, state: bestsellerState = initialState }: Props): JSX.Element => {
	const [state, dispatch] = useReducer(reducer, bestsellerState);

	return (
		<BestsellerState.Provider value={state}>
			<BestsellerDispatch.Provider value={dispatch}>{children}</BestsellerDispatch.Provider>
		</BestsellerState.Provider>
	);
};

const useBestsellerState = (): IBestsellers => {
	const context = useContext(BestsellerState);
	if (undefined === context) {
		throw new Error("Please use within BestsellerStateProvider");
	}
	return context;
};

const useBestsellerDispatch = (): React.Dispatch<BestsellerAction> => {
	const context = useContext(BestsellerDispatch);
	if (undefined === context) {
		throw new Error("Please use within BestsellerDispatchProvider");
	}
	return context;
};

export { BestsellerProvider, useBestsellerState, useBestsellerDispatch };
