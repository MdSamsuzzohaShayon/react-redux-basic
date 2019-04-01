import React from 'react';
// import PropTypes from 'prop-types';
import { Container, List, Segment } from 'semantic-ui-react';


const Todos = ({ todos, deleteTodo }) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <Segment key={todo.id}>
                    <List >
                        <List.Content>
                            <List.Header onClick={() => deleteTodo(todo.id)}> {todo.content}</List.Header>
                        </List.Content>
                    </List>
                </Segment>
            );
        })
    ) : (
            <Segment>
                <p className="center red">You have no todos left</p>
            </Segment>
        );
    return (
        <Container>
            {todoList}
        </Container>
    )
}




export default Todos;

