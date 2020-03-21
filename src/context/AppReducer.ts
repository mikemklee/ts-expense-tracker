import { GlobalState } from './GlobalState';

export const ACTION_TYPE = 'ACTION_TYPE';

interface Action {
  type: string; // ACTION_TYPE
  payload: any;
}

export type ActionTypes = Action;
// | SomeOtherAction;

export default (state: GlobalState, action: ActionTypes) => {
  switch (action.type) {
    default:
      return state;
  }
};
