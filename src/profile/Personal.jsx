import React, { useEffect, useState } from "react";
import M from "materialize-css";
import moment from "moment";


const Personal = props => {
  let datePicker = null,
    country = null,
    state = null;
  useEffect(() => {
    M.Datepicker.init(datePicker, {
      setDefaultDate: true,
       defaultDate: props.profile ? new Date(props.profile.dateofbirth) : "",
      onSelect: v=>setProfile({dateofbirth: moment(v).format('YYYY-MM-DD')})
    });

    M.FormSelect.init(country, {});
    M.FormSelect.init(state, {});
    M.updateTextFields();
    setProfile(props.profile);
  }, [props.profile]);

  const [profile, setProfile] = useState({});
  console.log("checked profile",profile)
  return (
    <div className="row card z-depth-0">
      <form
        className="col s12"
        onSubmit={e => {
          //e.preventDefault();
          console.log('submit from personal', profile.id)
          props.onSave(props.profile.id, profile);
        }}
      >
        <div className="input-field col s6">
          <input
            id="first_name"
            type="text"
            className="validate"
            onChange={e => setProfile({ first_name: e.target.value })}
            defaultValue={props.profile ? props.profile.first_name : ""}
          />
          <label htmlFor="first_name">First Name</label>
        </div>
        <div className="input-field col s6">
          <input
            id="last_name"
            type="text"
            className="validate"
            onChange={e => setProfile({ last_name: e.target.value })}
            defaultValue={props.profile ? props.profile.last_name : ""}
          />
          <label htmlFor="last_name">Last Name</label>
        </div>
        <div className="input-field col s12">
          <input
            id="dob"
            type="text"
            ref={picker => {
              datePicker = picker;
            }}
            className="datePicker"
          
          />
          <label htmlFor="dob">Date of Birth</label>
        </div>
        <div className="row">
          <label className="left col s4">Gender</label>
          <label className="left">
            <input
              className="with-gap col s4"
              name="gender"
              type="radio"
              value="Male"
              onChange={e => setProfile({ gender: e.target.value })}
              checked={
                props.profile ? props.profile.gender === "Male" : false
              }
            />
            <span>Male</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="gender"
              type="radio"
              value="Female"
              onChange={e => setProfile({ gender: e.target.value })}
              checked={
                props.profile ? props.profile.gender === "Female" : false
              }
            />
            <span>Female</span>
          </label>
        </div>
        <div className="row">
          <label className="left col s4">Marital Status</label>
          <label className="left">
            <input
              className="with-gap col s4"
              name="marital"
              type="radio"
              value="Married"
              onChange={e => setProfile({ maritalstatus: e.target.value })}
              checked={
                props.profile ? props.profile.maritalstatus === "Married" : false
              }
            />
            <span>Married</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="marital"
              type="radio"
              value="Bachelor"
              onChange={e => setProfile({ maritalstatus: e.target.value })}
              checked={
                props.profile
                  ? props.profile.maritalstatus === "Bachelor"
                  : false
              }
            />
            <span>Bachelor</span>
          </label>
        </div>
        <div className="row">
          <div className="input-field col s8">
            <input id="address" type="text" className="materialize-textarea"  onChange={e => setProfile({ address: e.target.value })}
            defaultValue={props.profile ? props.profile.address : ""}/>
            <label htmlFor="address">Address</label>
          </div>
          <div className="input-field col s4">
            <input type="text" id="city" onChange={e => setProfile({ city: e.target.value })}
            defaultValue={props.profile ? props.profile.city : ""} />
            <label htmlFor="city">City</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s4 country">
            <select
              ref={c => {
                country = c;
              }}  
              value={props.profile ? props.profile.country  : ""}
              onChange={e => setProfile({ country: e.target.value })}
            >
              <option value="" disabled selected>
                Choose your country
              </option>
              {props.countries &&
                props.countries.map(country => (
                  <option key={country} >{country}</option>
                ))}
            </select>
            <label htmlFor="country">Country</label>
          </div>
          <div className="input-field col s4">
            <select
              ref={s => {
                state = s;
              }}
              value={props.profile ? props.profile.state  : ""}
              onChange={e => setProfile({ state: e.target.value })}
            >
              <option value="" disabled selected>
                Choose your state
              </option>
              {props.states &&
                props.states.map(state => (
                  <option key={state} >{state}</option>
                ))}
            </select>
            <label htmlFor="state">State</label>
          </div>
          <div className="input-field col s4">
            <input id="pin" type="text" onChange={e => setProfile({ pin: e.target.value })}
            defaultValue={props.profile ? props.profile.pin : ""} />
            <label htmlFor="pin">Pincode</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s8">
            <input type="text" id="aadhar_no" onChange={e => setProfile({ aadhar_no: e.target.value })}
            defaultValue={props.profile ? props.profile.aadhar_no : ""}/>
            <label htmlFor="aadhar_no">Aadhar No</label>
          </div>
          <div className="input-field col s4">
            <input type="text" id="bloodgroup"  onChange={e => setProfile({ bloodgroup: e.target.value })}
            defaultValue={props.profile ? props.profile.bloodgroup : ""}/>
            <label htmlFor="bloodgroup">Blood Group</label>
          </div>
          <div className="col s12">
            <button type="submit" className="btn  apricot right">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Personal;
