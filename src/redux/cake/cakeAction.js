import {BUY_CAKE} from "./cakeType";

// AN ACTION IS AN OBJECT WITH TYPE PROPERTY
// DEFINING ACTION 
export const buyCake = () =>{
        return {
            type: BUY_CAKE
        };
}


// export default buyCake;