import React,{useEffect} from 'react'
import M from "materialize-css";
import AllTime from './AllTime'
import FullTime from './FullTime'
import PartTime from './PartTime'
import Freelancer from './Freelancer'
import Internship from './Internship'

const job= [
  {
    id:1,
    title: "Looking for React & React Native Developers",
    date:"01/01/2017",
    location:"Kolkata",
    deadline:"31/08/2019",
    type:"Full Time",
    company:"Vixplor Analytics pvt ltd",
    tag:"react"
  },
  {
    id:2,
    title: "PHP Developer with miimum one year experience",
    date:"27/06/2019",
    location:"Kolkata",
    deadline:"31/07/2019",
    type:"Full Time",
    company:"Xigmapro",
    tag:"php"
  }
];

const Jobs = (props) => {
  useEffect(() => {
    M.AutoInit();
  }, [])
  return (
    <div>
      <div className="row" style={{ marginTop: "40px" }}>
        <div className="col s3">
          <label className="left">Search by Title</label>
          <select class="browser-default">
            <option value="" disabled selected>
              All Jobs
            </option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>

          <label className="left">Search by Company</label>
          <select class="browser-default">
            <option value="" disabled selected>
              All Company
            </option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>

          <label className="left">Locations</label>
          <select class="browser-default">
            <option value="" disabled selected>
              Choose Job Location
            </option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>

          <label className="left">Job Type</label>
          <select class="browser-default">
            <option value="" disabled selected>
              Job Types
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
        <div className=" col s9">
          <ul className="tabs">
            <li className="tab" style={{ width: "20%" }}>
              <a href="#alltime">All Time</a>
            </li>
            <li className="tab" style={{ width: "20%" }}>
              <a href="#fulltime">Full Time</a>
            </li>
            <li className="tab" style={{ width: "20%" }}>
              <a href="#parttime">Part Time</a>
            </li>
            <li className="tab" style={{ width: "20%" }}>
              <a href="#freelancer">Freelancer</a>
            </li>
            <li className="tab" style={{ width: "20%" }}>
              <a href="#internship">Internship</a>
            </li>
          </ul>
          <div id="alltime" className="col s12">
          <AllTime job={job}/>
        </div>
        <div id="fulltime" className="col s12">
          <FullTime fjob={job}/>
        </div>
        {/* <div id="parttime" className="col s12">
          <PartTime />
        </div>
        <div id="freelancer" className="col s12">
          <Freelancer />
        </div>
        <div id="internship" className="col s12">
          <Internship />
        </div> */}
        </div>
      </div>
    </div>
  );
}

export default Jobs
