import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import rootSaga from './sagas';

const sagaMeddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMeddleware)); // CREATE STORE

sagaMeddleware.run(rootSaga); // LAUNCH SAGA MIDDLEWARE

export default store;
