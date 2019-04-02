import React, { Component } from 'react';
import { Container, Segment, Header, Message } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';





class Post extends Component {

    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        // REDIRECT TO HOME PAGE
        this.props.history.push('/');
    }

    render() {
        console.log(this.props);
        const post = this.props.post ? (
            <Segment>
                <Header>{this.props.post.title}</Header>
                <Message>{this.props.post.body}</Message>
                <Button negative fluid onClick={this.handleClick}>Delete This Post</Button>
            </Segment>
        ) : (<Segment> Loading Post..... </Segment>);


        return (
            <Container>
                {post}
            </Container>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;

    //INSIDE TERURN WHAT WE WANT TO APPLY TO OUR PROPS FOR THIS COMPONENT
    // AND WE WANT AN INDIVIDUAL POST HERE
    return {
        post: state.posts.find(post => post.id === id)
    }
}


const mapDispatchToProps = (dispatch) => {
    //THIS WILL RETURN AN OBJECT AND THIS OBJECT WILL REPRESENT WHAT PROPS AND WHAT FUNCTION WE ARE GONNA MAP OF THIS COMPONENT
    return {
        // MAP A FUNCTION AND DISPATCH AN ACTION
        // THIS FUNCTION IS GOING TO ATTACHED TO OUR PROPS SO WE CAN USE INSIDE COMPONENT
        deletePost: (id) => { dispatch({ type: 'DELETE_POST', id: id }) }
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(Post);
