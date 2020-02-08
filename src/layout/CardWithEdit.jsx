import React, { Component,useState } from 'react'
import M from "materialize-css";




// const CardWithEdit = props => {
//   const {professional}=this.props
  
// }

// export default CardWithEdit


export default class CardWithEdit extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount(){
    M.AutoInit();
  }
  handleClick=(e)=>{
    e.preventDefault();
    console.log('submit',this.props.item.id)
    this.props.onSave(this.props.profile.id, this.props.item,this.props.item.id);

  }
  
  render() {
    const {item,desg }= this.props;
    //const [professional, setProfessional] = useState({})
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
        </div>
        <div className="col s2" style={{ marginTop: "2em" }}>
          <button
            data-target="modal1"
            className="btn apricot col s12 modal-trigger"
          >
            Edit
          </button>
  
          <div id="modal1" class="modal">
            <div class="modal-content" style={{ height: 400 }}>
              <div className="modal-header">
                <h4 className="modal-title left">Prefessional details</h4>
              </div>
              <div style={{ marginTop: 60 }}>
             {/* <form
             onSubmit={e => {
          e.preventDefault();
          console.log('submit', this.props)
          this.props.onSave(this.props.professional.id, professional);
        }}> */}
             <div class="input-field">
                  <input id="company" type="text" class="validate" />
                  <label for="company">Company Name</label>
                </div>
                <div>
                  <label className="left">Designation</label>
                  <select class="browser-default">
                    <option value="" disabled selected>
                      Choose your option
                    </option>
                    {desg &&
                      desg.map(desg=>(
                      <option key={desg}>{desg}</option>
                    ))}
                  </select>
                </div>
  
                <div className="row" style={{ marginTop: "2 em" }}>
                  <div className="col s6">
                    <label className="left">start_ date</label>
                    <input id="from" type="text" class="datepicker"  />
                  </div>
                  <div className="col s6">
                    <label className="left">end_date</label>
                    <input id="to" type="text" class="datepicker"  />
                  </div>
                </div>
             {/* </form> */}
              </div>
            
            <div className="right">
                <button className="btn apricot">Cancel</button>
                <button type="submit" className="btn apricot" style={{ margin: 10 }} onClick={this.handleClick} >
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



