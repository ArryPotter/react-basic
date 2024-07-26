const redux = require('redux');

const counterReducer = (state = {counter: 0}, action) => {
    if(action.type === 'increment'){
        return { counter: state.counter + 1 }
    }

    if(action.type === 'decrement'){
        return { counter: state.counter - 1 }
    }

    return state;
};

// tell store to which reducer who will manipulate the data
const store = redux.createStore(counterReducer);


const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState)
}


store.subscribe(counterSubscriber);

store.dispatch({type: 'increment'});
store.dispatch({type: 'decrement'});