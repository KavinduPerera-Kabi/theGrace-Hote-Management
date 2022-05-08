import React, { Component } from 'react';
import axios from 'axios';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { MDBCard, MDBCardHeader, MDBIcon, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import NavAdmin from '../adminNav.js'
import swal from 'sweetalert2';

export default class EditPost extends Component {


    constructor(props){
        super(props);
        this.state={
            topic:"",
            description:"",
            postCategory:"",
            email:"",
            dob:"",
            phn:"",
            jobS:"",
            ws:""
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

        const {topic,description,postCategory,email,dob,phn,jobS,ws} = this.state;

        const data ={
            topic:topic,
            description:description,
            postCategory:postCategory,
            email:email,
            dob:dob,
            phn:phn,
            jobS:jobS,
            ws:ws
        }
        console.log(data)

        axios.put(`/staffpost/update/${id}`,data).then((res) =>{
            if(res.data.success){
                swal.fire({

                    title: "Success!",

                    text: "Staff Member Updated Successfully!",

                    icon: 'success',

                    confirmButtonText: "OK",

                    type: "success"}).then(okay => {

                    if (okay) {

                        window.location.href = "/staffhome";

                    }

                });
                this.setState(
                    {
                        topic:"",
                        description:"",
                        postCategory:"",
                        email:"",
                        dob:"",
                        phn:"",
                        jobS:"",
                        ws:""   
                    }
                )
            }
        })
    }


    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`/staffpost/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    topic:res.data.post.topic,
                    description:res.data.post.description,
                    postCategory:res.data.post.postCategory,
                    email:res.data.post.email,
                    dob:res.data.post.dob,
                    phn:res.data.post.phn,
                    jobS:res.data.post.jobS,
                    ws:res.data.post.ws
                });
                console.log(this.state.post);
            }
        });
    }


    render() {
        return (

            <div>

<MDBRow>
                <MDBCol sm="3">
                <NavAdmin/>
                </MDBCol>
                <MDBCol sm="9">
                <div style={{paddingTop:'3%'}}>
                <h4 className="text-uppercase  d-letter-spacing fw-bold" style={{color:'black'}}><i class="fas fa-home"></i> Dashboard - Staff</h4>
                <hr/>
                </div>

            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Edit Member Details</h1>
                 <form className="needs-validation" noValidate>
                     <div className="form-group" style={{marginBottom:'15px'}}>
                         <label style={{marginBottom:'5px'}}>NIC</label>
                         <input type="text"
                         className="form-control"
                         name="topic"
                         placeholder="Enter NIC"
                         value={this.state.topic}
                         onChange={this.handleInputChange}/>
                     </div>
 
                     <div className="from-group" style={{marginBottom:'15px'}}>
                         <label style={{marginBottom:'5px'}}>Name</label>
                         <input type="text"
                         className="form-control"
                         name="description"
                         placeholder="Enter Name"
                         value={this.state.description}
                         onChange={this.handleInputChange}/>
                     </div>
 
                     <div className="from-group" style={{marginBottom:'15px'}}>
                         <label style={{marginBottom:'5px'}}>Department</label>
                         <input type="text"
                         className="form-control"
                         name="postCategory"
                         placeholder="Enter Department"
                         value={this.state.postCategory}
                         onChange={this.handleInputChange}/>
                     </div>

                     <div className="from-group" style={{marginBottom:'15px'}}>
                         <label style={{marginBottom:'5px'}}>Email</label>
                         <input type="text"
                         className="form-control"
                         name="email"
                         placeholder="Enter Email"
                         value={this.state.email}
                         onChange={this.handleInputChange}/>
                     </div>

                     <div className="from-group" style={{marginBottom:'15px'}}>
                         <label style={{marginBottom:'5px'}}>Date Of Birth</label>
                         <input type="text"
                         className="form-control"
                         name="dob"
                         placeholder="D D / M M / Y Y Y Y"
                         value={this.state.dob}
                         onChange={this.handleInputChange}/>
                     </div>

                     <div className="from-group" style={{marginBottom:'15px'}}>
                         <label style={{marginBottom:'5px'}}>Phone number</label>
                         <PhoneInput defaultCountry="LK"
                         maxLength="12"
                         className="form-control"
                         name="phn"
                         placeholder="Enter Phone number"
                         value={this.state.phn}
                         onChange={this.handleInputChange}/>
                     </div>

                     <div className="from-group" style={{marginBottom:'15px'}}>
                         <label style={{marginBottom:'5px'}}>JOB Skills</label>
                         <input type="text"
                         className="form-control"
                         name="jobS"
                         placeholder="Enter JOB Skills"
                         value={this.state.jobS}
                         onChange={this.handleInputChange}/>
                     </div>

                     <div className="from-group" style={{marginBottom:'15px'}}>
                         <label style={{marginBottom:'5px'}}>Work Experience</label>
                         <input type="text"
                         className="form-control"
                         name="ws"
                         placeholder="No. of years"
                         value={this.state.ws}
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