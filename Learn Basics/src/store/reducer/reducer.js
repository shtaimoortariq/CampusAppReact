import actionType from '../constant/constant';


const INITIAL_STATE = {
    userName : "Taimoor"
}   

export default (states = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionType.CHANGEUSERNAME:
            return ({
                ...states,
                userName: action.payload
            })
        default:
            return states;
    }

}