import React, { Component } from 'react';

import axios from 'axios';
import { MDBCard, MDBCardHeader, MDBIcon, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import NavAdmin from '../adminNav.js'
import jsPDF from 'jspdf';
import 'jspdf-autotable';
 

class RoomReciveorders extends Component {

constructor(props){

  super(props); //maybe an error

  this.pdf=this.pdf.bind(this)

  this.state={

    orders:[]  //maybe an error

  };

}


pdf=()=> {
  const doc = new jsPDF();
  var col = ["No","Room Category","Customer","NIC","Tel","Guests","Date"];
  var rows = [];
  this.state.orders.map((orders,index) => {
    var temp = [
      ++index,
      orders.topic,
      orders.name,
      orders.nic,
      orders.phonenumber,
      orders.numberofguest,
      orders.bookdate
    ];
    rows.push(temp);
  });
  doc.autoTable(col,rows,{startY:10});
  doc.save("OrdersReport.pdf")
};


componentDidMount(){

  this.retreiveOrders();

}

 

retreiveOrders(){

  axios.get("/roomorders").then(res =>{

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
                <h4 className="text-uppercase  d-letter-spacing fw-bold" style={{color:'black'}}><i class="fas fa-home"></i> Dashboard - Room</h4>
                <hr/>
                </div>

      <div className="row">

      <div style={{paddingLeft:'17px'}}>

        <h3 style={{ color:'black', letterSpacing:'5px', fontSize:'64px'}}><b>Received<br/>Orders</b></h3>

      </div><br/>

      </div>

      

       <table className="table">

         <thead>

           <tr>

            <th scope ="col">#</th>

             <th scope="col">Topic</th>

             <th scope="col">Description</th>

             <th scope="col">Name</th>

             <th scope="col">NIC</th>

             <th scope="col">phone Number</th>

             <th scope="col">Number Of Guest</th>

             <th scope="col">Book Date</th>

          </tr>

        </thead>

            <tbody>

              {this.state.orders.map((orders,index) =>(

                <tr key={index}>

                   <th scope="row">{index+1}</th>

                   <td>

                       <a href={`/roomorder/${orders._id}`}style={{textDecoration:'none'}}>

                       {orders.topic}

                       </a>

                   </td>

                   <td>{orders.description}</td>

                   <td>{orders.name}</td>

                   <td>{orders.nic}</td>

                   <td>{orders.phonenumber}</td>

                   <td>{orders.numberofguest}</td>

                   <td>{orders.bookdate}</td>

                </tr>

              ))}

            </tbody>           

         

       </table> 
       <div className="d-grid gap-2 d-md-flex justify-content-md-end">
       <button class="btn btn-primary btn-lg" onClick={this.pdf}><i class="far fa-file-alt"></i>&nbsp;Generate Report</button> 
       </div>
       </MDBCol>
       </MDBRow>

       </div>

  )

}

}

 

export default RoomReciveorders;