import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard, MDBCardHeader, MDBIcon, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import NavAdmin from '../adminNav.js'

class ReceivedOrders extends Component {
constructor(props){
  super(props); //maybe an error

  this.state={
    orders:[]  //maybe an error
  };
}

componentDidMount(){
  this.retreiveOrders();
}

retreiveOrders(){
  axios.get("/rentorders").then(res =>{
    if(res.data.success){
      this.setState({
        orders:res.data.existingOrders
      });
      console.log(this.state.orders)
    }
  });
}

render(){
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

      <div className="row">
      <div style={{paddingLeft:'17px'}}>
        <h1 style={{ color:'black', letterSpacing:'5px', fontSize:'64px'}}><b>Received<br/>Orders</b></h1>
      </div><br/>
      </div>
      
       <table className="table">
         <thead>
           <tr>
             <th scope="col">#</th>
             <th scope="col">Vehicle NO</th>
             <th scope="col">Vehicle Types</th>
             <th scope="col">Price per a day</th>
             <th scope="col">Booking Date</th>
             <th scope="col">Time</th>
             <th scope="col">NO dates rent</th>
             <th scope="col">Location</th>
          </tr>
        </thead>
            <tbody>
              {this.state.orders.map((orders,index) =>(
                <tr key={index}>
                   <th scope="row">{index+1}</th>
                   <td>
                       <a href={`/rentorder/${orders._id}`}style={{textDecoration:'none'}}>
                       {orders.description}
                       </a>
                   </td>
                   <td>{orders.topic}</td>
                   <td>{orders.postCategory}</td>
                   <td>{orders.bookingdate}</td>
                   <td>{orders.time}</td>
                   <td>{orders.nodatesrent}</td>
                   <td>{orders.location}</td>

                </tr>
              ))}
            </tbody>           
         
       </table> 
       <div className="d-grid gap-2 d-md-flex justify-content-md-end">

       <button class="btn btn-primary btn-lg"><i class="far fa-file-alt"></i>&nbsp;Generate Report</button> 

       </div>
       </MDBCol>
       </MDBRow>
       </div>
  )
}
}

export default ReceivedOrders;