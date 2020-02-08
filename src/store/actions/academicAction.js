import {backendUrl} from "../../config/api";

export const getAcademic= userId =>{
    return dispatch=>{
        dispatch({type: "REQUEST_ACADEMICS",userId});
        fetch(backendUrl + "/users/" + userId + '/academics')
        .then(res=> res.json())
        .then(json=>
            dispatch({type:"RECIEVED_ACADEMICS", academics:json}));   
    };
};