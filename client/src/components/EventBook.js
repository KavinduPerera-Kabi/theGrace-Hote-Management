import React, { Component} from "react";
import axios from "axios";
import swal from 'sweetalert';
import NavBar from './NavBar.js';

  export default class EventBook extends Component{
    constructor(props){
      super(props);

      this.state={
        post:{},
        topic :"",
        description:"",
        name:"",
        nic:"",
        phonenumber:"",
        numberofguest:"",
        bookdate:"",

      };
    }

    handleInputChange = (e) =>{
      const {name,value} = e.target;
      this.setState({
          ...this.state,
          [name]:value

      })
  }

  onSubmit = (e) =>{

    e.preventDefault();

    const {topic,description} = this.state.post;
    const {name,nic,phonenumber,numberofguest,bookdate} = this.state;

    const data ={

        topic:topic,
        description:description,
        name:name,
        nic:nic,
        phonenumber:phonenumber,
        numberofguest:numberofguest,
        bookdate:bookdate
    }



    console.log(data)



    axios.post("/eventorder/save",data).then((res) =>{
        if(res.data.success){
            swal("Done!", "Event Booked Successfully", "success")
            this.setState(
                {
                    topic:"",
                    description:"",
                    name:"",
                    nic:"",
                    phonenumber:"",
                    numberofguest:"",
                    bookdate:""
                }
            )
        }
    })





}

    componentDidMount(){

      const id = this.props.match.params.id;

      axios.get(`/eventpost/${id}`).then((res) =>{
        if(res.data.success){
          this.setState({
            post:res.data.post
          });

          console.log(this.state.post);
        }

      });

    }
    render() {

      const {topic,description,postCategory,image,} = this.state.post;

      return (
        <div>
        <NavBar/>
          <div className="col-md-8 mt-4 mx-auto">
               <form className="needs-validation" onSubmit={this.onSubmit}>
                  <div class="row">
                      <div className="col-sm-6">
                          <div className="text-center">
                      <img src={image} width={350} height={270} class="card-img-top" alt="..." /><br/><br/>
                      <h5 className="text-capitalize fw-bold" style={{fontSize:'32px'}}>{topic}</h5>
                      </div><br/>
                      <center>
                      <div style={{color:'#7D7D7D'}}>
                          <h5>{description}</h5>
                      </div><br/>
                      <div style={{color:'#7D7D7D'}}>
                          <h5>{postCategory}</h5>
                      </div>
                      </center>
                  </div>
                   <div className="col-sm-6">
                   <div className="from-group" style={{marginBottom:'15px', fontSize:'24px'}}>
                       <label style={{marginBottom:'5px'}}>Name</label>
                       <input type="text"
                       className="form-control"
                       required pattern="^[a-zA-Z\u00C0-\u017F]+(?:\s[a-zA-Z\u00C0-\u017F]+)*$"
                       name="name"
                       placeholder="Enter Name"
                       value={this.state.name}
                      onChange={this.handleInputChange}
                      required/>
                   </div>
                
                   <div className="from-group" style={{marginBottom:'15px', fontSize:'24px'}}>
                       <label style={{marginBottom:'5px'}}>NIC</label>
                       <input type="text"
                       maxLength={12}
                       className="nic-validate form-control"
                       required pattern="^[0-9+]{9}[vV|xX]$||^[0-9+]{12}$"
                       name="nic"
                       placeholder="Enter NIC"
                       value={this.state.nic}
                      onChange={this.handleInputChange}
                      required/>


                   </div>

                   <div className="from-group" style={{marginBottom:'15px', fontSize:'24px'}}>
                          <label style={{marginBottom:'5px'}}>Phone Number</label>
                            <input type="number"
                            className="form-control"
                            maxLength="10"
                            name="phonenumber"
                            placeholder="Enter phone number"
                        value={this.state.phonenumber}
                        onChange={this.handleInputChange}
                        required/>
                      </div>

                      <div className="from-group" style={{marginBottom:'15px', fontSize:'24px'}}>
                          <label style={{marginBottom:'5px'}}>Number Of Guest:</label>
                          <input type="number"
                          className="form-control"
                          name="numberofguest"
                          placeholder="Enter Number Of Guest"
                          value={this.state.numberofguest}
                        onChange={this.handleInputChange}
                        required/>
                      </div>
                      <div className="from-group" style={{marginBottom:'15px', fontSize:'24px'}}>
                          <label style={{marginBottom:'5px'}}>Book Date:</label>
                          <input type="date"
                          className="form-control"
                          name="bookdate"
                          placeholder="DD / MM / YYYY"
                          value={this.state.bookdate}
                        onChange={this.handleInputChange}
                        required/>
                      </div>


                   </div><div className="d-grid gap-2 d-md-flex justify-content-md-end">
                   <button className="btn btn-primary btn-lg rounded-pill" type="submit" style={{marginTop:'15px', boxShadow:'5px 5px 5px grey'}}>
                       
                       &nbsp;Book
                   </button></div>
                   </div>

               </form>
          </div>
          </div>
      );
  }
}