import React from 'react'

const FullTime = (props) => {
    return (
        <div>
        <ul className="collection">
         {props.fjob.map(data => (
            <li key={data}>
              <div  className="card" style={{height:250,flex:5,flexDirection:"column"}}>
                <i class="tiny material-icons right">expand_more</i>
                <div style={{flex:1,textAlign:"left"}}>
                 <h5>{data.title}</h5>
                </div>
                <div style={{flex:3}}>
                <span className="left" >Posted on:{data.date}</span><br/>
               <span className="left" style={{paddingTop:10}}>Location:{data.location}</span>
               <span className="badge left">
                 {data.id===1?
                 <span className="red" style={{color:"black"}}>{data.tag}</span>
                 :
                 <span className="green" style={{color:"black"}}>{data.tag}</span>}
                 </span>
                </div>
              <button className="btn apricot" style={{ margin: 10 }}>Apply</button>
              <button className="btn waves-light">Cancel</button>
              </div>
             
            </li>
          ))}
         </ul>
        </div>
    )
}

export default FullTime
