import actionType from '../constant/constant';

export function changeState(data) {
    return dispatch => {
        console.log("changeState() action.js");
        dispatch({
            type: actionType.CHANGEUSERNAME,
            payload: data
        })

    }
}