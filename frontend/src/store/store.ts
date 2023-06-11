import { applyMiddleware, combineReducers, compose, legacy_createStore } from 'redux'
import thunk from 'redux-thunk'
import { oemsReducer } from './oems/oems.reducer';
import { authReducer } from './auth/auth.reducer';
import { carsReducer } from './cars/cars.reducer';



const rootReducer = combineReducers({
     authManager: authReducer,
     carsManager: carsReducer,
     oemsManager: oemsReducer
})

const composeEnhancer = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch