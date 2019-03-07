This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Redux First Router

This repo gathers misc examples using redux-first-router

## github-example

Comes direct from their github site here it's put together and works!
https://github.com/faceyspacey/redux-first-router

## github-example-counter

Builds further on github-example (see above) but here a page/view/route Counter is added.
It uses the redux-store for its two components Control and Display to communicate.
This is done to demonstrate a more "real-life example" where the store is used for both routing and application state.

## github-example-counter-sagas

Builds further on github-example-counter (see above) but here a saga is added! it fakes a side-effect an async call.
The saga call is in it's own component Users, it fakes getting users for an API.
This is done to demonstrate a more "real-life example" where the store is used for both routing and application state and sagas are used for acync-api-calls.
