import { createStore, combineReducers } from 'redux';
import uuid from 'uuid'

const addExpense = (
    {
        description = '',
        note= '',
        amount = 0,
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// expenses reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        default:
            return state;
    }
}

// filter reducer

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

// store creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    console.log(store.getState())
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 }));

const expenseTwo = store.dispatch(addExpense({ description: 'coffee', amount: 300 }));

store.dispatch(removeExpense({id: expenseOne.expense.id}))

const demoState = {
    expenses: [{
        id: 'pasdaqwe12314',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: "rent",
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};