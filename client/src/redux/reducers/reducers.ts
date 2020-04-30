import { ActionTypes } from '../actions/types';
import { Page } from '../../website-styling/Header';
import { serializeJSONToHashiMap, staticHashiMap } from './ReducerHelpers';

const initState = {
  currentPage: Page.HASHI_SOLVER,
  hashiMap: staticHashiMap(),
};

const reducer = (state = initState, action: any) => {
  switch (action.type) {
    case ActionTypes.FETCH_STATIC_HASHI_MAP_REQUEST:
      return {...state, loading: true};
    case ActionTypes.FETCH_STATIC_HASHI_MAP_SUCCESS:
      return {...state, hashiMap: serializeJSONToHashiMap(action.body), loading: false}

    default:
      return state;
  }
};

export default reducer;