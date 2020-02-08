import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css";
import "materialize-css/dist/css/materialize.min.css";


export default class challenges extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cuorse: [
        {
          id:1,
          title: "course on artificial intelligence",
          status: "expired",
          prize:"certificate",
          sub: "Artificial intelligence"
        },
        {
          id:2,
          title: "Turing Coding Challange",
          status: "live",
          prize:"excellent prize",
          sub: "Data Structure"
        }
      ]
    };
  }
  componentDidMount() {
    // document.addEventListener("DOMContentLoaded", function() {
    //   var elems = document.querySelectorAll(".datepicker");
    //   var autoClose = false;
    //   M.Datepicker.init(elems, autoClose);
    //   var elem = document.querySelectorAll(".carousel");
    //   M.Carousel.init(elem, {
    //     fullWidth: true,
    //     indicators: true
    //   });
    // });
    M.AutoInit();
  }
  handelClick=(e)=>{
    
  }

  render() {
    return (
      <div className="row" style={{ marginTop: "40px" }}>
        <div className="col s3">
          <h5 className="left">On-going challenges</h5>
          <label className="left">
            Hurry up to participate in ongoing challenges
          </label>

          <div class="carousel carousel-slider center">
            <div class="carousel-item red white-text" href="#one!">
              <h2>First Panel</h2>
              <p class="white-text">This is your first panel</p>
            </div>
            <div class="carousel-item amber white-text" href="#two!">
              <h2>Second Panel</h2>
              <p class="white-text">This is your second panel</p>
            </div>
            <div class="carousel-item blue white-text" href="#four!">
              <h2>Third Panel</h2>
              <p class="white-text">This is your fourth panel</p>
            </div>
          </div>
        </div>
        <div>
          {this.state.cuorse.map(data => (
            <div key={data}>
              <div  className="card col s5 offset-s1" style={{height:250}}>
              <i class=" tiny material-icons right">expand_more</i>
                <h5 className="left">{data.title}</h5>
                <div  style={{marginTop:"8%"}}>
                <span className="left" >
               {data.status==='expired'?
               <span style={{color:"red"}}>{data.status}</span>
               :
               <span style={{color:"green"}}>{data.status}</span>}
               </span>
               <span className="left">Prize:{data.prize}</span>
               <span className="badge left">
                 {data.id===1?
                 <span className="red" style={{color:"black"}}>{data.sub}</span>
                 :
                 <span className="green" style={{color:"black"}}>{data.sub}</span>}
                 </span>
                </div>
              <button className="btn apricot" style={{ margin: 10 }}>Apply</button>
              <button className="btn waves-light">Cancel</button>
              </div>
             
            </div>
          ))}
        </div>
        <div className="col s2 offset-s1" style={{marginLeft:"5%"}}>
          <label className="left">Search by Title</label>
          <select class="browser-default">
            <option value="" disabled selected>
              Select Challenge
            </option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>

          <label className="left">Applied Status</label>
          <select class="browser-default">
            <option value="" disabled selected>
              All Challenges
            </option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>

          <label className="left">Skills</label>
          <select class="browser-default">
            <option value="" disabled selected>
              Choose Challenge Skills
            </option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
          <label className="left">Last date to apply</label>
          <input type="text" class="datepicker"></input>
        </div>
      </div>
    );
  }
}
