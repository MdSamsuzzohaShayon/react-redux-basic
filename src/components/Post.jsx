import React, { Component } from 'react';
import { Container, Segment, Header, Message } from 'semantic-ui-react';
import {connect} from 'react-redux';





class Post extends Component {

    render() {
        const post = this.props.post ? (
            <Segment>
                <Header>{this.props.post.title}</Header>
                <Message>{this.props.post.body}</Message>
            </Segment>
        ) : (<Segment> Loading Post..... </Segment>) ;


        return (
            <Container>
                {post}
            </Container>
        )
    }
}


const mapStateToProps=(state, ownProps)=>{
    let id = ownProps.match.params.post_id;

    //INSIDE TERURN WHAT WE WANT TO APPLY TO OUR PROPS FOR THIS COMPONENT
    // AND WE WANT AN INDIVIDUAL POST HERE
    return {
        post: state.posts.find(post =>post.id === id)
    }
}

export default connect(mapStateToProps)(Post);
