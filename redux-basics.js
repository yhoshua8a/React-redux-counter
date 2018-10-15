const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
}

//REDUCER
const reducer = (state = initialState, action) => {

    if(action.type === 'INC_COUNTER'){
       return {
           ...state,
           counter: state.counter + 1
       }
    }

    if(action.type === 'ADD_COUNTER'){
        return {
            ...state,
            counter: state.counter + action.value
        }
    }

    return state;
};

//STORE
const store = createStore(reducer);
console.log('STORE',store.getState());

//SUSCRIPTION ACTIONS
store.subscribe(()=>{
    console.log('[SUSCRIPTION]', store.getState())
});

//DISPATCHING ACTIONS
store.dispatch({type:'INC_COUNTER'});
store.dispatch({type:'ADD_COUNTER', value:10});

console.log('STORE',store.getState());

