import React from 'react';
import { connect } from "react-redux";
import { buyIceCream } from '../redux/index';
import Button from 'react-bootstrap/Button';
import { Container, Badge } from "react-bootstrap";

function IceCreamContainer(props) {
    return (
        <div>
            <br />
            <br />
            <br />
            <Container >
                <Badge>
                    <h3>Number of Ice Cream - {props.numOfIceCream}</h3>
                </Badge>
                <br/>
                <Button variant="primary" onClick={props.buyIceCream} >Buy Ice Cream</Button>
            </Container>
        </div>
    )
}




// ACCESS STATE TO REACT
// DISPATCH
// FOR UPDATING PROPS 
const mapStateToProps = state => {
    return {
        numOfIceCream: state.iceCream.numOfIceCream
    }
}




// DISPATCH ACTION CREATER FROM  REDUX
// FOR ON CLICK FUNCTION    
const mapDispatchToPaops = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToPaops
)(IceCreamContainer);
