import {createStore, combineReducers} from 'redux';
import TaskReducer from './reducers/tasks';

const rootReducer = combineReducers({
  task: TaskReducer,
});
const store = createStore(rootReducer);

export default store;
