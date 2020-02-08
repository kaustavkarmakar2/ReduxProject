const initState=[];

const academicReducer = (state=initState, action) => {
   switch(action.type){
       case "REQUEST_ACADEMICS":
           console.log("requesting academic",action);
           return {};
        case "RECIEVED_ACADEMICS":
            console.log("recieved academic",action);
            return{...action.academics};
            default:
                return state;
   }
};

export default academicReducer
