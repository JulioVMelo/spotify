//Importando o responsável pela criação da store do Redux
import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

//Importando os reducers que serão responsáveis por evoluir a store.
import reducers from "./ducks";

import sagas from "./sagas/";

const middlewares = [];

const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

//Criando a store passando os reducers do combineReducers e aplicando o middleware.
const store = createStore(reducers, compose(applyMiddleware(...middlewares)));

sagaMiddleware.run(sagas);
export default store;
