import {Reducer} from 'redux';
const initialState = {
  list: [],
};

export const homeReducer: Reducer<any, any> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    default:
      return state;
  }
};
