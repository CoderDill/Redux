const INITIAL_STATE = { count: 0 }

const countReducer = (state=INITIAL_STATE, action) => {
    return state;
}

const store = Redux.createStore(countReducer);