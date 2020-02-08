import React, { useEffect } from "react";
import M from "materialize-css";
import Sidenav from "./Sidenav";
import Personal from "./Personal";
import colors from "../config/colors";
import Academic from "./Academic";
import Contact from "./Contact";
import Professional from "./Professional";
import Skills from "./Skills";
import { connect } from "react-redux";
import { getProfile, updateProfile } from "../store/actions/profileAction";
import { getSkill,updateSkill } from "../store/actions/skillAction";
import { getProfessional,updateProfessional } from "../store/actions/professionalAction";
import {getAcademic} from "../store/actions/academicAction";

const userProfile = {
  profilePicUrl: "assets/img/",
  dateofbirth: new Date(),
  first_name: "Kaustav",
  last_name: "Karmakar",
  gender: "Male",
  maritalstatus: "Married",
  email:"",
  alt_email: "",
  bloodgroup: "",
  aadhar_no: "",
  website: "",
  address: "",
  facebook_link:"",
  linkedin_link:"",
  google_link:"",
  city: "Kharagpur",
  state: "West Bengal",
  country:"India",
  about_me:
    "Working as Chief Executive Officer",
};
const countries = ["USA", "India", "Pakistan","UK"];
const states = ["Delhi", "West Bengal", "Maharashtra"];
const academics = [
  {
      id: '1',
    institution: "Indian Institute of Technology",
    course_name: "B. Tech",
    stream_name: "Computer Science",
    start_date: "March 2010",
    end_date: "October 2014",
    marks_per: "67%"
  },
  {
      id: '2',
    institution: "Jadavpur University",
    course_name: "B. Tech",
    stream_name: "Computer Science",
    start_date: "March 2010",
    end_date: "October 2014",
    marks_per: "67%"
  }
];
// const professionals = [
//   {
      
//     company_name: "Magnox",
//     designation: "Chief Executive Officer",
//     start_date: "March 2010",
//     end_date: "October 2014"
//   },
//   {
//     company_name: "IBM",
//     designation: "Consultant",
//     start_date: "March 2008",
//     end_date: "April 2010"
//   }
// ];
//const skills=[];
const Profile = props => {
  let profile_tabs = null;

  useEffect(() => {
    M.Tabs.init(profile_tabs, {});
    props.getProfile(1);  
    props.savePersonal(1,props.profile);  
    props.getSkill(1);
    props.saveSkill(1,props.skills);
    props.getProfessional(1);
    props.saveProfessional(1,props.professionals,5);
    props.getAcademic(1);
  }, []);

  return (
    <div className="row" style={{ marginTop: "40px" }}>
      <div className="col s3">
        <Sidenav profile={userProfile} />
      </div>
      <div className="col s9 card">
        <ul
          className="tabs"
          ref={tabs => {
            profile_tabs = tabs;
          }}
          style={{ borderBottom: "1px solid " + colors.citrus }}
        >
          <li className="tab" style={{ width: "20%" }}>
            <a href="profile#personal">Personal</a>
          </li>
          <li className="tab" style={{ width: "20%" }}>
            <a href="profile#contact">Contact</a>
          </li>
          <li className="tab" style={{ width: "20%" }}>
            <a href="profile#professional">Professional</a>
          </li>
          <li className="tab" style={{ width: "20%" }}>
            <a href="profile#academic">Academic</a>
          </li>
          <li className="tab" style={{ width: "20%" }}>
            <a href="#skills">Skills</a>
          </li>
        </ul>
        <div id="personal" className="col s12">
          <Personal
            profile={props.profile}
            countries={countries}
            states={states}
            onSave={props.savePersonal}
          />
        </div>
        <div id="contact" className="col s12">
          <Contact 
          profile={props.profile}
          onSave={props.savePersonal}
          />
        </div>
        <div id="professional" className="col s12">
          <Professional 
          professionals={props.professionals}
         onSave={props.saveProfessional}
         profile={props.profile}
          
           />
        </div>
        <div id="academic" className="col s12">
          <Academic academics={props.academics} />
        </div>
        <div id="skills" className="col s12">
          <Skills 
          skills={props.skills}
          onSave={props.saveSkill} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
    console.log('state', state);
    //console.log("professional state: ",state.professionals)
    return {
        profile: state.profile,
        skills: state.skills,
        professionals: state.professionals,
        academics:state.academics
    }
}
const mapDispatchToProps = dispatch => {
    return {
      getProfile: (userId) => dispatch(getProfile(userId)),
      savePersonal: (userId, profile) => dispatch(updateProfile(userId, profile)),
      getSkill:(userId)=> dispatch(getSkill(userId)),
      saveSkill:(userId,skills)=> dispatch(updateSkill(userId,skills)),
      getProfessional: (userId)=> dispatch(getProfessional(userId)),
      saveProfessional: (userId,professionals,id)=>dispatch(updateProfessional(userId,professionals,id)),
      getAcademic:(userId)=>dispatch(getAcademic(userId)),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
