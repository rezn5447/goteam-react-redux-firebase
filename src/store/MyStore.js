import { createStore, combineReducers} from 'redux';
import { reducer as formreducer } from 'redux-form';

import mathReducer from '../reducers/mathReducer';
import userReducer from '../reducers/userReducer';

export const store = createStore(
  combineReducers({ form: formreducer })

);
