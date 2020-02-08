import React from 'react'


const AllTime = (props) => {
    return (
         <div>
         <ul className="collection">
         {props.job.map(data => (
            <li key={data}>
              <div  className="card" style={{height:250,flex:6,flexDirection:"column",textAlign:"left",paddingLeft:30}}>
                <div style={{flex:1}}>
                <i class="tiny material-icons right">expand_more</i>
                <h5>{data.title}</h5>
                </div>
                <div style={{flex:4,flexDirection:"column"}}>
                <span className="left" >Posted on:{data.date}</span>
               <span className="left">Location:{data.location}</span>
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

export default AllTime



