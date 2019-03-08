import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { connectRoutes } from "redux-first-router";
import createSagaMiddleware from "redux-saga";

import mySaga from "../sagas/sagas";
import page from "../reducers/pageReducer";
import counter from "../reducers/counterReducer";
import users from "../reducers/usersReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const routesMap = {
  HOME: "/",
  USER: "/user/:id",
  USERS: "/users",
  ABOUT: "/about",
  COUNTER: "/counter"
};
const sagaMiddleware = createSagaMiddleware(mySaga);

export default function configureStore(preloadedState) {
  const { reducer, middleware, enhancer } = connectRoutes(routesMap);

  const rootReducer = combineReducers({
    page,
    location: reducer,
    counter,
    users
  });
  const middlewares = applyMiddleware(middleware, sagaMiddleware);
  const enhancers = compose(
    enhancer,
    middlewares,
    composeWithDevTools()
  );

  const store = createStore(rootReducer, preloadedState, enhancers);

  sagaMiddleware.run(mySaga);

  return store;
}
