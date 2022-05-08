import React, { Component} from "react";
import axios from "axios";
import { MDBCard, MDBCardHeader, MDBIcon, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import NavAdmin from '../adminNav.js';

  export default class RentPostDetails extends Component{
    constructor(props){
      super(props);

      this.state={
        post:{}
      };
    }

    componentDidMount(){

      const id = this.props.match.params.id;

      axios.get(`/rentpost/${id}`).then((res) =>{
        if(res.data.success){
          this.setState({
            post:res.data.post
          });

          console.log(this.state.post);
        }

      });

    }

    render(){

      const{topic,description,postCategory,dname,dnumber,image} = this.state.post;
      
      return(

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

         <div style={{marginTop:'20px'}}>
         <h4>{topic}</h4>
         <hr/>
         
         <div>
         <img src={image} class="card-img-top" style={{height:'300px', width:'300px', border:'4px solid #CAC9C9'}} alt="..." /> 
         </div>
         &nbsp;

          <dl className="row">
          <dt className="col-sm-3">Vehicle Type</dt>
          <dd className="col-sm-9">{description}</dd>

          <dt className="col-sm-3"> Price per a day</dt>
          <dd className="col-sm-9">{postCategory}</dd>

          <dt className="col-sm-3"> Drivers Name </dt>
          <dd className="col-sm-9">{dname}</dd>

          <dt className="col-sm-3"> Drivers Phone Number </dt>
          <dd className="col-sm-9">{dnumber}</dd>

          </dl>
          
            
         </div>
         </MDBCol>
         </MDBRow>
         </div>
      )
  }
}