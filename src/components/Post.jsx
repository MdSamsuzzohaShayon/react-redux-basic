import React, { Component } from 'react';
import { Container, Segment } from 'semantic-ui-react';

class Post extends Component {
    state = {
        id: null
    }
    componentDidMount(){
        // console.log(this.props);
        let id = this.props.match.params.post_id;
        this.setState({
            id
        })
    }
    render() {
        return (
            <Container>
                <Segment>{this.state.id}</Segment>
            </Container>
        )
    }
}

export default Post;
