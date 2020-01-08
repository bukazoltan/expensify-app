import { createStore } from 'redux';

// Action generators

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
            }
        case 'RESET':
            return {
                count: 0
            }
        case 'SET':
            const amount = typeof action.amount === 'number' ? action.amount : 0;
            return {
                count: amount
            }
        default:
            return state;
    }

});

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});

store.dispatch({
    type: 'INCREMENT'
});

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 5
});

store.dispatch({
    type: 'RESET'
});

store.dispatch({
    type: 'SET',
    amount: 101
});