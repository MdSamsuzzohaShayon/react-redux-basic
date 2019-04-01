import React, { Component } from 'react';
import { Form, Container } from 'semantic-ui-react';


class AddForm extends Component {
    state = {
        content: ''
    };
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.props.addForm(this.state);
        this.setState({
            content: ''
        })
    }
    render() {
        return (
            <Container>
 <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                    <label >Add New Todo</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content} placeholder="Write something you want to do...." />
                </Form.Field>
            </Form>
            </Container>
           
        );
    }
}


export default AddForm;