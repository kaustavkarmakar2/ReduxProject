import {backendUrl} from "../../config/api";

export const getProfessional= userId =>{
    console.log("userId",userId)
   
    return dispatch=>{
        dispatch({type: "REQUEST_PROFESSIONAL",userId});
        fetch(backendUrl + "/users/" + userId + '/professional')
        .then(res=> res.json())
        .then(json=>
            dispatch({type:"RECIEVED_PROFESSIONAL", professionals:json}));   
    };
};

export const updateProfessional=(userId,professionals,id)=>{
    console.log('update from professinal',userId)
    return dispatch=>{
        dispatch({type:"UPDATE_PROFESSIONAL",userId,id});
        fetch(backendUrl+'/users/'+userId+'/professionals/'+id,{
            method:'put', headers:{'Content-Type':'application/json'}, body:JSON.stringify(professionals)
        })
        .then(res=>res.json, err=>console.log("error",err))
        .then(json=>dispatch({type:"UPDATE_PROFESSIONAL", professionals: json}));
    };
};