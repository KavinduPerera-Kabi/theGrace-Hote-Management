import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard, MDBCardHeader, MDBIcon, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import NavAdmin from '../adminNav.js'

export default class PostDetails extends Component {
    constructor(props){
        super(props);

        this.state={
            post:{}
        };
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`/staffpost/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    post:res.data.post
                });
                console.log(this.state.post);
            }
        });
    }



    render() {
 
        const {topic,description,postCategory,email,dob,phn,jobS,ws,image} = this.state.post;
 
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

            <div class="row">
            

            <div style={{marginTop:'20px'}}>
            <h2><b><i>{description} 's </i></b>Details</h2>
            <br/>
            
            

            <hr/>
            <dl className="row">
            <div class="col-sm-4" >

                <div>
                    <img src={image} class="card-img-top " style={{height:'250px', width:'250px', border:'4px solid #CAC9C9'}} alt="..." /> 
                </div>

            </div>
            <div class="col-sm-6" >
                <dt className="col-sm-3">NIC</dt>
                <dd className="col-sm-9">{topic}</dd>
                <hr/>

                <dt className="col-sm-3">Department</dt>
                <dd className="col-sm-9">
                    {postCategory}
                </dd>
                <hr/>

                <dt className="col-sm-3">Email</dt>
                <dd className="col-sm-9">{email}</dd>
                <hr/>

                <dt className="col-sm-3">Date Of Birth</dt>
                <dd className="col-sm-9">{dob}</dd>
                <hr/>

                <dt className="col-sm-3">Phone Number</dt>
                <dd className="col-sm-9">{phn}</dd>
                <hr/>

                <dt className="col-sm-3">JOB Skills</dt>
                <dd className="col-sm-9">{jobS}</dd>
                <hr/>

                <dt className="col-sm-3">Work Experience</dt>
                <dd className="col-sm-9">{ws}</dd>
                <hr/>

               

            </div>
            </dl>
            
            
            </div>
            </div>
            </MDBCol>
            </MDBRow>
            </div>


            
            
           
        );

        


    }
}