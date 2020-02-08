import React,{useEffect,useState} from 'react'
import M from "materialize-css";

const Skills = (props) => {
  useEffect(() => {
    M.AutoInit();
    M.updateTextFields();
    setSkill(props.skills);
  }, [props.skills]);
  const [skills,setSkill] = useState({});
  console.log("checked skill",skills);
  var myData=[]
  for(let key in props.skills){
    console.log("skill key",props.skills[key]);
    var data=props.skills[key]
    myData.push(data);
  }
  return (
    <div className="row">
      <form  onSubmit={e => {
          e.preventDefault();
      console.log('submit', skills)
        props.onSave(props.skills.id, skills);
     }} >
      <div  class="chips ">
        {myData.map(skills=>(
          <input
        className="chips-initial"
        key={skills.id}
      onChange={e => setSkill({ name: e.target.value })}
      defaultValue={skills.skills ? skills.skills.name : ""}/>
        ))}
 </div>
 
    <button type="submit" className="btn apricot right">
             Save       
    </button>
      </form>
 

    </div>
  )
}

export default Skills
