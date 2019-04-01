import React, { Component } from 'react';
import { Container, Segment, Header, Message } from 'semantic-ui-react';
import axios from 'axios';
class Post extends Component {
    state = {
        post: null
    }
    componentDidMount(){
        // console.log(this.props);
        let id = this.props.match.params.post_id;
        axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
            .then(res=>{
                this.setState({
                    post:res.data
                });
                // console.log(res);
            });
    }
    render() {
        const post = this.state.post ? (
            <Segment>
                <Header>{this.state.post.title}</Header>
                <Message>{this.state.post.body}</Message>

            </Segment>
        ) : (<Segment> Loading Post..... </Segment>) ;


        return (
            <Container>
                {post}
            </Container>
        )
    }
}

export default Post;
