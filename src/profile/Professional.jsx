import React,{useEffect} from "react";
import M from "materialize-css";
import CardWithEdit from "../layout/CardWithEdit";

const Professional = props => {
  console.log("props.professional",props.professionals);
  var myData=[]
  for(let key in props.professionals){
    console.log(props.professionals[key]);
    var data=props.professionals[key]
    myData.push(data);
  }
  console.log("my information is",myData);
  const desg = [
    "Professor",
    "Businessman",
    "CEO",
    "Manager",
    "Software Development"
  ];

  return (
    <div>
      <ul className="collection">
      {myData.map(professionals => (
          <li className="collection-item" key={professionals.id}>   
            <CardWithEdit
              item={{
                title: professionals.company,
                date: "from"+" "+professionals.from + "  " +"to"+ professionals.to,
                prop1:professionals.designation.name,
                id:professionals.id
              }}
              desg={desg}
              onSave={props.onSave}
              profile={props.profile}
            />
          </li>
          ))}
      </ul>
      <div className="row">
        <form action="">
        <button className="btn apricot"> Add More</button>
        </form>
      </div>
    </div>
  );
};

export default Professional;
