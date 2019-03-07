import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { connectRoutes } from "redux-first-router";

import page from "../reducers/pageReducer";
import counter from "../reducers/counterReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const routesMap = {
  HOME: "/",
  USER: "/user/:id",
  USERS: "/users",
  ABOUT: "/about",
  COUNTER: "/counter"
};

export default function configureStore(preloadedState) {
  const { reducer, middleware, enhancer } = connectRoutes(routesMap);

  const rootReducer = combineReducers({
    page,
    location: reducer,
    counter
  });
  const middlewares = applyMiddleware(middleware);
  const enhancers = compose(
    enhancer,
    middlewares,
    composeWithDevTools()
  );

  const store = createStore(rootReducer, preloadedState, enhancers);

  return store;
}
