import React, { Component } from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';
import axios from 'axios';

class Home extends Component {
    state = {
        posts: []
    }



    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res)
                this.setState({
                    //TAKING ONLY 10 POST FROM ALL
                    posts: res.data.slice(0, 10)
                });
            });
    }
    render() {





        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <Segment key={post.id}>
                        <Header>{post.title}</Header>
                        {post.body}
                    </Segment>

                )
            })
        ) : (
                <Segment >No Posts Yet</Segment>
            )





        return (
            <Container textAlign="center">
                {postList}
            </Container>
        )
    }
}

export default Home;
