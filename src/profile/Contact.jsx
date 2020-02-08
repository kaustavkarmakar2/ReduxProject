import React,{useEffect,useState} from "react";
import M from "materialize-css";

const Contact = props => {
  useEffect(() => {
    M.updateTextFields();
    setProfile(props.profile);
  }, [props.profile]);

  const [profile, setProfile] = useState({});

  return (
    <div className="row card z-depth-0">
      <form 
      className="col s12"
      onSubmit={e => {
          e.preventDefault();
          console.log('submit from contact', profile.id)
          props.onSave(props.profile.id, profile);
        }}
        >
      <div className="input-field col s12">
          <input
            id="email"
            type="email"
            className="validate"
            /* defaultValue={props.profile.email}*/
            onChange={e => setProfile({ email: e.target.value })}
            defaultValue={props.profile ? props.profile.email : ""}
          />
          <label htmlFor="email">Email Address</label>
        </div>
        <div className="input-field col s6">
          <input
            id="phone"
            type="tel"
            className="validate"
            /*defaultValue={props.profile.phone_no}*/
            onChange={e => setProfile({ phone: e.target.value })}
            defaultValue={props.profile ? props.profile.phone : ""} 
            
          />
          <label htmlFor="first_name">Phone Number</label>
        </div>
        <div className="input-field col s6">
          <input
            id="alt_phone"
            type="tel"
            className="validate"
            onChange={e => setProfile({ alt_phone: e.target.value })}
            defaultValue={props.profile ? props.profile.alt_phone: ""}
          />
          <label htmlFor="phone2">Alternate Phone Number</label>
        </div>
        <div className="input-field col s12">
          <input
            id="facebook_link"
            type="text"
            className="validate"
          
            onChange={e => setProfile({ facebook_link: e.target.value })}
            defaultValue={props.profile ? props.profile.facebook_link: ""}
          />
          <label htmlFor="fb">Facebook URL</label>
        </div>
        <div className="input-field col s12">
          <input
            id="linkedin_link"
            type="text"
            className="validate"
            /* defaultValue={props.profile.ln_url} */

            onChange={e => setProfile({ linkedin_link: e.target.value })}
            defaultValue={props.profile ? props.profile.linkedin_link: ""}
          />
          <label htmlFor="linkedin">LinkedIn URL</label>
        </div>
        <div className="input-field col s12">
          <input
            id="google_link"
            type="text"
            className="validate"
            /* defaultValue={props.profile.google_url} */

            onChange={e => setProfile({ google_link: e.target.value })}
            defaultValue={props.profile ? props.profile.google_link: ""}
          />
          <label htmlFor="google">Google Plus URL</label>
        </div>
        <div className="col s12">
            <button type="submit" className="btn apricot right">
              Save
            </button>
          </div>
      </form>
    </div>
  );
};


export default Contact;
