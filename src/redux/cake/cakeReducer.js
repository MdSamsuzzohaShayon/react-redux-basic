import {BUY_CAKE} from './cakeType';

// reducer is an function that accept state and action as parameter and return stat e
const initialState = {
    numOfCake: 10
};


const cakeReducer = (state = initialState, action ) =>{
    switch(action.type){
        case BUY_CAKE:
            return {
                ...state,
                numOfCake: state.numOfCake-1
            }
            default: return state;
    }
}



export default cakeReducer;