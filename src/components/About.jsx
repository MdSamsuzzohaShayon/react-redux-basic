import React from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';
import Rainbow from './hoc/Rainbow';

const About = () => {
    return (
        <Container textAlign="center">
            <Header>This is About</Header>
            <Segment>
                Segment allows us to smoothly handle the disparate datasets we use. With real-time integrated data flows, we can truly understand what people are doing
            </Segment>
        </Container>
    )
}

export default Rainbow(About);
