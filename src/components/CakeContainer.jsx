import React from 'react';
import { connect } from "react-redux";
import { buyCake } from '../redux/index';
import Button from 'react-bootstrap/Button';
import { Container, Badge } from "react-bootstrap";

function CakeContainer(props) {
    return (
        <div>
            <br />
            <br />
            <br />
            <Container >
                <Badge>
                    <h3>Number of cakes - {props.numOfCake}</h3>
                </Badge>
                <br/>
                <Button variant="primary" onClick={props.buyCake} >Buy Cake</Button>
            </Container>
        </div>
    )
}




// ACCESS STATE TO REACT
// DISPATCH
// FOR UPDATING PROPS 
const mapStateToProps = state => {
    return {
        numOfCake: state.numOfCake
    }
}




// DISPATCH ACTION CREATER FROM  REDUX
// FOR ON CLICK FUNCTION    
const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CakeContainer);
