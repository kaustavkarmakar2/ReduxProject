const initState=[];

const professionalReducer = (state=initState, action) => {
   switch(action.type){
       case "REQUEST_PROFESSIONAL":
           console.log("requesting professional",action);
           return {};
        case "RECIEVED_PROFESSIONAL":
            console.log("recieved professional",action);
            return{...action.professionals};
            default:
                return state;
   }
};

export default professionalReducer
