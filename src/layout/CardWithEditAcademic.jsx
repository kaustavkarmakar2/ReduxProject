import React, { Component } from "react";
import M from "materialize-css";

export default class CardWithEditAcademic extends Component {
  // componentDidMount() {
    // document.addEventListener("DOMContentLoaded", function() {
    //   var elems = document.querySelectorAll(".modal");
    //   var preventScrolling = true;
    //   M.Modal.init(elems, preventScrolling);
    //   M.Modal.getInstance(elems);
    //   console.log("hjghc");
    // });
  //   M.AutoInit();
  // }
  componentDidMount() {
    // document.addEventListener('DOMContentLoaded', function() {
    //   var elems = document.querySelectorAll('.datepicker');
    //   var autoClose=true
    //   var instances = M.Datepicker.init(elems, autoClose);
    // });
    M.AutoInit();
  }
  render() {
    const { item } = this.props;
    return (
      <div className="row">
        <div className="col s5">
          <div className="row title">
            <h5>{item.title}</h5>
          </div>
          {item.date && <div className="row grey-text">{item.date}</div>}
        </div>
        <div className="col s5" style={{ marginTop: "0.5em" }}>
          {item.prop1 && <div className="row">{item.prop1}</div>}
          {item.prop2 && <div className="row">{item.prop2}</div>}
          {item.prop3 && <div className="row">{item.prop3}</div>}
        </div>
        <div className="col s2" style={{ marginTop: "2em" }}>
          <button
            data-target="modal2"
            className="btn apricot col s12 modal-trigger"
          >
            Edit
          </button>

          <div id="modal2" class="modal">
            <div class="modal-content" style={{ height: 400 }}>
              <div className="modal-header">
                <h4 className="modal-title left">Academic details</h4>
              </div>
              <div style={{ marginTop: 60 }}>
              <label className="left">Course Type</label>
                  <select class="browser-default">
                    <option value="" disabled selected>
                      Choose your option
                    </option>
                    {this.props.course &&
                this.props.course.map(course => (
                  <option key={course} >{course}</option>
                ))}
                  </select>
                <div class="input-field">
                  <input id="institution_name" type="text" class="validate" />
                  <label for="institution_name">Institution Name</label>
                </div>
                <div>
                  <label className="left">Stream</label>
                  <select class="browser-default">
                    <option value="" disabled selected>
                      Choose your option
                    </option>
                    {this.props.stream &&
                this.props.stream.map(stream => (
                  <option key={stream} >{stream}</option>
                ))}
                  </select>
                </div>
                <div class="input-field">
                  <input id="marks_gained" type="text" class="validate" />
                  <label for="marks_gained">Marks gained (%)</label>
                </div>
                <div class="input-field">
                  <input id="website" type="text" class="validate" />
                  <label for="website">Website</label>
                </div>

                <div className="row" style={{ marginTop: "2 em" }}>
                  <div className="col s6">
                    <label className="left">start_ date</label>
                    <input type="text" class="datepicker" />
                  </div>
                  <div className="col s6">
                    <label className="left">end_date</label>
                    <input type="text" class="datepicker" />
                  </div>
                </div>
              </div>
              <div className="right">
                <button className="btn apricot">Cancel</button>
                <button className="btn apricot" style={{ margin: 10 }}>
                  Save
                </button>
              </div>
            </div>
          </div>
          <button className="btn apricot col s12" style={{ marginTop: "1em" }}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}
