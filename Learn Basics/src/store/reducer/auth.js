import actionType from '../constant/constant';


const INITIAL_STATE = {
    name: "",
    email: "",
    password: "",
    type: ""
}

export default (states = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionType.SIGNUPUSER:
        
        console.log(states);
        return ({
            ...states,
            name: action.payload.name,
            email: action.payload.email,
            password: action.payload.password,
            type: action.payload.type
            
        })
            //Object.assign({}, states, action.payload)
        default:
            return states;
    }

}