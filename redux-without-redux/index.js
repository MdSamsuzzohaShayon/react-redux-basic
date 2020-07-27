// USING REDUX WITHOUR REACT

const redux = require('redux');
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();

const applyMiddleware = redux.applyMiddleware;

// CREATING STORE
const createStore = redux.createStore;
// FOR MULTIPLE REDUCER
const combineReducers = redux.combineReducers;

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = "BUY_ICECREAM";


// DEFINE ACTION
// AN ACTION IS AN OBJECT THAT HAS TYPE PROPERTY IT RETURN OBJECT
function buyCake() {
    return {
        type: BUY_CAKE,
        info: "First redux action"
    }
}

function buyIceCream() {
    return {
        type: BUY_ICECREAM,
        info: "First redux action"
    }
}



/*
// (previousState, action) => newState
const initialState = {
    numOfCakes: 10,
    numOfIceCreams: 20
};
*/


const initialCakeState = {
    numOfCakes: 10,
};

const initialIceCreamState = {
    numOfIceCreams: 20
};


// DEFINE REDUCER FUNCTION 
/*
// (reviousState, action) => newState;
const reducer = (state = initialState, action) => {
    switch (action.type) {
        // cake:
        // https://www.youtube.com/watch?v=qdAThMLtF98&list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK&index=6
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            };
        case BUY_ICECREAM:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            };
        default:
            return state;
    }
}
*/



const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        // cake:
        // https://www.youtube.com/watch?v=qdAThMLtF98&list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK&index=6
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            };
        default:
            return state;
    }
}


const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            };
        default:
            return state;
    }
}



// REDUX STORE
// FOR ENTIRE APPLICATION WE WILL ALWAYS HAVE ONE STORE
// HOLD APPLICATION STATE
// ALLOWS ACCESS TO STATE VIA GETSTATE
// ALLOW STATE TO BE UPDATED VIA DISPATCH(ACTION)
// REGISTER LISTENER VIA SUBSCRIBE(LISTENER)
// HANDLE UNREGISTER OF LISTENERS VIA THE FUNCTION RETURNED BY SUBSCRIBE(LISTENER)

const rootReducers = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
});

// CREATE STORE
// const store = createStore(reducer);
const store = createStore(rootReducers, applyMiddleware(logger));

console.log("Intial state", store.getState());

// SETUP LISTENER TO THE STORE
// const unsubscribe = store.subscribe(() => console.log("Updated state", store.getState()));
const unsubscribe = store.subscribe(() => {});

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsubscribe();