import React from "react";

const Sidenav = props => {
  return (
    <div className="card apple">
      <a href='#upload' className="card-image">
        <img
          alt=""
          src={props.profile.profilePicUrl}
          style={{ borderRadius: "50%", padding: "35%" }}
        ></img>
      </a>

      <div className="card-content">
        <span className="card-title" style={{ marginTop: "-150px" }}>
          {props.profile.first_name + ' ' + props.profile.last_name}
        </span>
        <span>{props.profile.about_me}</span>
        <br/>
        <br/>
        <span className='brown-text'>{props.profile.city + ', ' + props.profile.country}</span>
        <div className="card-action" style={{ height: "8.5em" }}>
          <button className="btn blueberry col s12">
            Download your resume
          </button>
          <button
            className="btn apricot col s12"
            style={{ marginTop: "0.5em" }}
          >
            Create your resume
          </button>
          <button
            className="btn citrius col s12"
            style={{ marginTop: "0.5em" }}
          >
            Upload your resume
          </button>
        </div>
        <div className="card-action row" style={{ marginTop: "1em" }}>
          <button className="btn-floating btn-large">
            <i className="fa fa-facebook circle blue darken-4"></i>
          </button>
          <button className="btn-floating btn-large" style={{ marginLeft: "1em" }}>
            <i className="fa fa-linkedin circle cyan darken-2"></i>
          </button>
          <button className="btn-floating btn-large" style={{ marginLeft: "1em" }}>
            <i className="fa fa-google-plus circle red darken-4"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
