import React, { Component } from 'react';
import { MDBCard, MDBCardHeader, MDBIcon, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import NavAdmin from '../adminNav.js'


//import './navMenu.css';

 

class RoomMenu extends Component {

    render() {

        return (

            <div className="bgimg " >
                <MDBRow>
                <MDBCol sm="3">
                <NavAdmin/>
                </MDBCol>
                <MDBCol sm="9">
                <div style={{paddingTop:'3%'}}>
                <h4 className="text-uppercase  d-letter-spacing fw-bold" style={{color:'black'}}><i class="fas fa-home"></i> Dashboard - Room</h4>
                <hr/>
                </div>

                <div style={{ 
                backgroundImage: `url("https://www.linkpicture.com/q/dot-grid.png")`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat', 
                //width: '100vw',
                height: '90vh'
              }}>

 

            <div className="bgimg " >

                <div style={{paddingLeft:'35px'}}>

                <h1 style={{ color:'black', letterSpacing:'10px', fontSize:'64px'}}><b>Rooms<br/> Management</b></h1>


                <div style={{color:'black', letterSpacing:'15px', fontSize:'20px'}}>SELECT ONE OPTION</div>

                </div>

 

                

                {/* <button type="button" class="btn btn-primary btn-lg">Large button</button>

                <button type="button" class="btn btn-primary btn-lg">Large button</button> */}

                {/* <div class="jumbotron text-center">

                <h1>My First Bootstrap Page</h1>

                <p>Resize this responsive page to see the effect!</p>

                </div> */}

 

               

                <br/><br/>


                <div class="container">

                <div class="row">

                    <div class="col-sm-4">

                    <h3>Add Room</h3>

                    <p>To Add New Room For Now Available Rooms</p>

                    <button type="button" class="btn btn-primary btn-lg rounded-pill"><a href="/roomadd" style={{textDecoration:'none',color:'white'}}> Add New Room</a></button>

                    </div>

                    <div class="col-sm-4">

                    <h3>Available Rooms Details</h3>        

                    <p>To Edit Available Rooms And Book Rooms</p>

                    <button type="button" class="btn btn-primary btn-lg rounded-pill"><a href="/roomHome" style={{textDecoration:'none',color:'white'}}>Update</a></button>

                    </div>

                    <div class="col-sm-4">

                    <h3>To view your Generated bill</h3>

                    <p>To View Generate</p>

                    <button type="button" class="btn btn-primary btn-lg rounded-pill"><a href="/roomorders" style={{textDecoration:'none',color:'white'}}>Received Orders</a></button>

                    </div>

                </div>

                </div>

            </div>

            </div>
</MDBCol>
</MDBRow>
</div>
        );

    }

}

 

export default RoomMenu;