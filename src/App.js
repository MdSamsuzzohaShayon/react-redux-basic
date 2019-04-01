import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';
import {Header, Segment} from 'semantic-ui-react';


class App extends Component {
  state={
    todos: [
      {id: 1, content:'Buy some milk'},
      {id: 2, content:'Go Fo Jouging'},

    ]
  }


  deleteTodo =(id)=>{
    console.log(id);
    const todos = this.state.todos.filter(todo=>{
      return todo.id !== id   
    });
    this.setState({
      todos:todos
    });
  }
  render() {
    return (
      <React.Fragment>
        <Segment>
          <Header as="h1" textAlign="center">Todos</Header>
        </Segment>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </React.Fragment>
    )
  }
}

export default App;

