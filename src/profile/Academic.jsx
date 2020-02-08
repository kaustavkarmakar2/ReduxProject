import React from "react";
import CardWithEditAcademic from "../layout/CardWithEditAcademic";

const Academic = props => {
  console.log("props of Academics: ",props.academics)
  var myData=[]
  for(let key in props.academics){
    console.log(props.academics[key]);
    var data=props.academics[key]
    myData.push(data);
  }
  console.log("my information is",myData);
  const course = [
    "B.Tech",
    "B.E",
    "B.Sc",
    "M.Sc",
    "B.A",
    "M.A",
    "MBBS",
    "M.S",
    "P.hd"
  ];
  const stream = [
    "Information Technology",
    "Computer Science & Technology",
    "Civil",
    "Mechanical",
    "Electrical",
    "Electronics & Communication"
  ];
  return (
    <div>
      <ul className="collection">
      {myData.map(academics => (
          <li className="collection-item" key={academics.id}>
            <CardWithEditAcademic
              item={{
                title: academics.organization,
                date: academics.course_start_date + " - " + academics.course_end_date,
                prop1: academics.course_name,
                prop2: academics.stream_name,
                prop3: academics.marks_per
              }}
              course={course}
              stream={stream}
            />
          </li>
          ))}
      </ul>
      <div className="row">
        <button className="btn apricot"> Add More</button>
      </div>
    </div>
  );
};

export default Academic;
