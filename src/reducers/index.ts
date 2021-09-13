import { combineReducers } from "redux";
import { todosReducer } from './todos';
import {Todos} from '../actions'

export interface StoreState{
todos: Todos[]
}
export const reducers = combineReducers<StoreState>({ todos: todosReducer});


