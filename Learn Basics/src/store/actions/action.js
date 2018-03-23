import actionType from '../constant/constant';

import * as firebase from 'firebase'
export function changeState(data) {
    return dispatch => {
        console.log("changeState() action.js");
        dispatch({
            type: actionType.CHANGEUSERNAME,
            payload: data
        })

    }
}


export function signupUser(data) {
    return dispatch => {

        console.log("signupUser() action.js", data);
        firebase.auth().createUserWithEmailAndPassword(data.email, data.password).then((data) => {
            console.log(data)
            dispatch({
                type: actionType.SIGNUPUSER,
                payload: data
            })
        }).catch((error) => {
            console.log("Error")
        })

    }
}