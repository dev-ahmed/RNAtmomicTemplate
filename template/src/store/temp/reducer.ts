import {Reducer} from 'redux';
const initialState = {
  list: [],
};

export const tempReducer: Reducer<any, any> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    default:
      return state;
  }
};
