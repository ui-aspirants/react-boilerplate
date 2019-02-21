import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk  from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

/**
 * combineReducers is simply a utility function to simplify the most common use case when writing Redux reducers.
 * It takes an object full of slice reducer functions, and returns a new reducer function
 */
const rootReducer = combineReducers({
    formReducer,
});

/**
 * Creates a Redux store that holds the complete state tree of your app.
 * There should only be a single store in your app.
 */
const store = createStore(
    rootReducer,
    /**
     * compose: Composes functions from right to left.
     *          The final function obtained by composing the given functions from right to left.
     * applyMiddleware: Middleware is the suggested way to extend Redux with custom functionality.
     *                  Middleware lets you wrap the store's dispatch method for fun and profit.
     *
     * Thunk: A thunk is a function that returns a function.
     * Invert control! Return a function that accepts `dispatch` so we can dispatch later.
     * Thunk middleware knows how to turn thunk async actions into actions.
    */
    compose(applyMiddleware(thunk)),
);

export default store;