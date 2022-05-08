import React, { Component} from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { MDBCard, MDBCardHeader, MDBIcon, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import NavAdmin from '../adminNav.js'

  export default class RentEditPost extends Component{


    constructor(props){
      super(props);
      this.state={
        topic:"",
        description:"",
        postCategory:"",
        dname:"",
        dnumber:""
      }
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
      const id = this.props.match.params.id;
      const {topic,description,postCategory,dname,dnumber} = this.state;
    
      const data ={
        topic:topic,
        description:description,
        postCategory:postCategory,
        dname:dname,
        dnumber:dnumber
      }
    
      console.log(data)
    axios.put(`/rentpost/update/${id}`,data).then((res) =>{
      if(res.data.success){
        swal("Done!", "Vehicle Type Updated Successfully", "success")
        this.setState(
            {
              topic:"",
              description:"",
              postCategory:"",
              dname:"",
              dnumber:""
            }
        )
      }
    })
    
    }




    componentDidMount(){

      const id = this.props.match.params.id;

      axios.get(`/rentpost/${id}`).then((res) =>{
        if(res.data.success){
          this.setState({
            topic:res.data.post.topic,
            description:res.data.post.description,
            postCategory:res.data.post.postCategory,
            dname:res.data.post.dname,
            dnumber:res.data.post.dnumber
          });

          console.log(this.state.post);
        }

      });

    }

    render(){
      return (

<div>

<MDBRow>
                <MDBCol sm="3">
                <NavAdmin/>
                </MDBCol>
                <MDBCol sm="9">
                <div style={{paddingTop:'3%'}}>
                <h4 className="text-uppercase  d-letter-spacing fw-bold" style={{color:'black'}}><i class="fas fa-home"></i> Dashboard - Rent</h4>
                <hr/>
                </div>

        <div className="col-md-8 mt-4 mx-auto">
            <h1 className="h3 mb-3 font-weight-normal">Edit Vehicle Details</h1>
             <form className="needs-validation" noValidate>
                 <div className="form-group" style={{marginBottom:'15px'}}>
                     <label style={{marginBottom:'5px'}}>Vehicle Number</label>
                     <input type="text"
                     className="form-control"
                     name="topic"
                     placeholder="Enter vehicle number"
                     value={this.state.topic}
                     onChange={this.handleInputChange}/>
                 </div>

                 <div className="from-group" style={{marginBottom:'15px'}}>
                     <label style={{marginBottom:'5px'}}>Vehicle Types</label>
                     <input type="text"
                     className="form-control"
                     name="description"
                     placeholder="Enter vehicle type"
                     value={this.state.description}
                     onChange={this.handleInputChange}/>
                 </div>

                 <div className="from-group" style={{marginBottom:'15px'}}>
                     <label style={{marginBottom:'5px'}}>Price per a day </label>
                     <input type="number"
                     className="form-control"
                     name="postCategory"
                     placeholder="Enter the price"
                     value={this.state.postCategory}
                     onChange={this.handleInputChange}/>
                 </div>

                 <div className="from-group" style={{marginBottom:'15px'}}>
                     <label style={{marginBottom:'5px'}}>Drivers Name </label>
                     <input type="text"
                     className="form-control"
                     name="dname"
                     placeholder="Enter the Name"
                     value={this.state.dname}
                     onChange={this.handleInputChange}/>
                 </div>

                 <div className="from-group" style={{marginBottom:'15px'}}>
                     <label style={{marginBottom:'5px'}}>Drivers Number </label>
                     <PhoneInput defaultCountry="LK"
                     className="form-control"
                     maxLength="12"
                     name="dnumber"
                     placeholder="Enter the Number"
                     value={this.state.dnumber}
                     onChange={this.handleInputChange}/>
                 </div>

                 <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                     <i className="far fa-check-square"></i>
                     &nbsp; Update
                 </button>
             </form>
        </div>
        </MDBCol>
        </MDBRow>
        </div>
    );
  }
}