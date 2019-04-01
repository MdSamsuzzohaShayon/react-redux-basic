import React from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';

const Home = () => {
    return (
        <Container textAlign="center">
            <Header>This is Home</Header>
            <Segment>
                Segment allows us to smoothly handle the disparate datasets we use. With real-time integrated data flows, we can truly understand what people are doing
            </Segment>
        </Container>
    )
}

export default Home;