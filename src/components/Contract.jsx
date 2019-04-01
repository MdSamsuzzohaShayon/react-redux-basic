import React from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';

const Contract = (props) => {
    // ALL OF THE INFO OF PROPS i DIDN'T ADD THE ROUTER ADD THAT AUTOMETICALLY
    // console.log(props);

    setTimeout(()=>{
        // THIS IS HOW WE CAN REDIRECT
        props.history.push('/about')
    },2000);
    return (
        <Container textAlign="center">
            <Header>This is Contract</Header>
            <Segment>
                Segment allows us to smoothly handle the disparate datasets we use. With real-time integrated data flows, we can truly understand what people are doing
            </Segment>
        </Container>
    )
}

export default Contract;
