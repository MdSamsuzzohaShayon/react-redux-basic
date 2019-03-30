import React, { Component } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
// import 'semantic-ui-css/semantic.min.css';

class AddPlayer extends Component {

    //THIS IS INITIAL SATE AND AFTERWARD IT WILL COMBINE WITH MAIN STATE FROM APP.JS
    state = {
        name: null,
        age: null,
        born: null
    };

    // IT VALUE WAS INITIALL NULL BUT WILL 
    // UPDATE THE VALUE TO WHAT USER INPUT
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }



    // TAKE THE VALUE OF STASE IN THIS CLASS AND EXPORT TO APP.JS
    handleSubmit = (e) => {
        e.preventDefault(); // IT WILL STOP DEFAULT ACTIVITY THAT IS LOADING THE PAGE
        // console.log(this.state);
        // THIS WILL EXPORT ALL STATE TO THE MAIN COMPONENT STATE FROM APP.JS
        this.props.addPlayer(this.state)
    }



    // RENDERING THE FORM
    render() {
        return (
            <Segment inverted>
                <Form inverted onSubmit={this.handleSubmit}>
                    <Form.Group widths='equal'>
                        <Form.Input fluid label='Player Name' id="name" placeholder='Player Name' onChange={this.handleChange} />
                        <Form.Input fluid label='Player Age' id="age" placeholder='Player Age' onChange={this.handleChange} />
                        <Form.Input fluid label='Born' id="born" placeholder='Born' onChange={this.handleChange} />
                    </Form.Group>
                    <Button type='submit'>Submit</Button>
                </Form>
            </Segment>
        );
    }
}


export default AddPlayer;
