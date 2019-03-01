import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { connectRoutes } from "redux-first-router";

import page from "../reducers/pageReducer";

const routesMap = {
  HOME: "/",
  USER: "/user/:id",
  ABOUT: "/about"
};

export default function configureStore(preloadedState) {
  const { reducer, middleware, enhancer } = connectRoutes(routesMap);

  const rootReducer = combineReducers({ page, location: reducer });
  const middlewares = applyMiddleware(middleware);
  const enhancers = compose(
    enhancer,
    middlewares
  );

  const store = createStore(rootReducer, preloadedState, enhancers);

  return store;
}
