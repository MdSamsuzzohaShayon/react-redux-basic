import React from 'react';
import {Container, Badge, Button} from "react-bootstrap";
import {useSelector, useDispatch} from 'react-redux';
import {buyCake} from "../redux/index";

function HooksCakeContainer() {
    // similer to mapState to props function 
    const numOfCake = useSelector(state =>state.cake.numOfCake);
    const dispatch = useDispatch();
    return (
        <div>
            <br />
            <br />
            <br />
            <Container >
                <Badge>
                    <h3>Number of cakes (Hook) - {numOfCake} </h3>
                </Badge>
                <br/>
                <Button variant="primary" onClick={()=>dispatch(buyCake())} >Buy Cake</Button>
            </Container>
        </div>
    )
}

export default HooksCakeContainer;
