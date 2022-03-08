import React, { Dispatch, createContext, useReducer, useContext } from 'react';
import { initialState, reducer } from '../store/reducers/Bestsellers';
import { IBestsellers } from '../models';
import { BestsellersAction } from '../store/actions/Bestsellers';

interface Props {
  children: JSX.Element;
  state?: IBestsellers;
}

const BestsellerState = createContext<IBestsellers | undefined>(undefined);
const BestsellersDispatch = createContext<
  Dispatch<BestsellersAction> | undefined
>(undefined);

const BestsellersProvider = ({
  children,
  state: bestsellerState = initialState
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, bestsellerState);

  return (
    <BestsellerState.Provider value={state}>
      <BestsellersDispatch.Provider value={dispatch}>
        {children}
      </BestsellersDispatch.Provider>
    </BestsellerState.Provider>
  );
};

const useBestsellersState = (): IBestsellers => {
  const context = useContext(BestsellerState);
  if (undefined === context)
    throw new Error('Please use within BestsellersStateProvider');
  return context;
};

const useBestsellersDispatch = (): React.Dispatch<BestsellersAction> => {
  const context = useContext(BestsellersDispatch);
  if (undefined === context)
    throw new Error('Please use within BestsellersDispatchProvider');
  return context;
};

export { BestsellersProvider, useBestsellersState, useBestsellersDispatch };
