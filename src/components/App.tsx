// import { interpreterDirective } from '@babel/generator/node_modules/@babel/types';
import React from 'react';
import { connect } from 'react-redux';
import { Store } from 'redux';
import { Todos, fetchTodos, deleteTodo } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
  todos: Todos[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

interface AppState {
  fetching: boolean;
}
class __App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {fetching: false}
   }
   onButtonClick = ():void => {
     this.props.fetchTodos();
     this.setState({fetching: true})
  }
  
  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.todos.length && this.props.todos.length) {
this.setState({fetching: false})
}
  }

   onTodoClick = (id: number): void => {
  this.props.deleteTodo(id);
};

   renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todos) => {
      return (
          <div onClick={() => this.onTodoClick(todo.id)} key={todo.id}>
            {todo.title}
          </div>
      );
    });
   }
  render() {
    
    return (
      <div><button onClick={this.onButtonClick}>Fetch</button>
        {this.state.fetching ? 'Loading' : null}
      {this.renderList()}
      </div>
    )
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todos[] } => {
  return { todos }
};

export const App = connect(mapStateToProps, {fetchTodos, deleteTodo})(__App)