
import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';
export interface Todos {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: Todos[];
}

export interface DeleteTodoAction {
  type: ActionTypes.deleteTodo,
  payload: number;
}
const url = 'https://jsonplaceholder.typicode.com/todos'
export const fetchTodos = () => {
  return async(dispatch:Dispatch) => {
    const response = await axios.get<Todos[]>(url);
dispatch<FetchTodosAction>({type: ActionTypes.fetchTodos, payload: response.data})
  }
}

export const deleteTodo = (id: number): DeleteTodoAction => {
  return {
    type: ActionTypes.deleteTodo,
    payload: id
}
}