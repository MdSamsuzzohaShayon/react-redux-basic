import React, { Component } from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png';
import { connect } from 'react-redux'; // THIS IS A ACTUALLY FUNCTION AND WE INVOKE THIS FUNCTION TO BRING BACK HIGHER ORDER FUNCTION



class Home extends Component {








    render() {
        console.log(this.props);
        const { posts } = this.props;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <Segment key={post.id}>
                    <img width="120px" src={Pokeball} alt="Image"/>
                        <Header>
                            <Link to={'/' + post.id}>
                                {post.title}
                            </Link>
                        </Header>
                        {post.body}
                    </Segment >

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

//TAKING STATE FROM REDUX STORE AND MAKE IT PROPS
const mapStateToProps=(state)=>{
    return {
        posts: state.posts
    }
}


//CONNECTING REACT COMPONENT TO REDUX STORAGE
// INVOKING CONNECT FUNCTION PASSING IN A FUNCTION mapStateToProps THAT RETURNS A HIGHER ORDER FUNCTION
// AND THAT WRAPS OUR COMPONENT
export default connect(mapStateToProps)(Home);
