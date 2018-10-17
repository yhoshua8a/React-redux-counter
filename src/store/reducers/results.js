import * as actionTypes from '../actions.js';


const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.result })
      };
    case actionTypes.DELETE_RESULT:
      const id = action.elementId;

      return {
        ...state,
        results: state.results.filter(element => element.id !== id)
      };

    default:
      return state;
  }
};

export default reducer;
