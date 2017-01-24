import reduxThunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import * as actions from '../actions/auth';
import userReducer from '../reducers/user_reducer';
import sportReducer from '../reducers/sport_reducer';
import authReducer from '../reducers/auth_reducer';


export default function configureStore(initialState){
  const reducers = combineReducers({
    form: reduxFormReducer, // mounted under "form"
    user: userReducer,
    sports: sportReducer,
    auth: authReducer
  })
    const store = createStore(
      reducers,
      initialState,
      compose(
        applyMiddleware(reduxThunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f

      )
    );

  const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

  const store = createStoreWithMiddleware(reducers);
  store.dispatch(actions.verifyAuth());
  return store
}


export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose (
      applyMiddleware(reduxThunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  store.dispatch(Actions.verifyAuth());

  return store;
}
