import React, { Component } from 'react';
import { MDBCard, MDBCardHeader, MDBIcon, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import NavAdmin from '../adminNav.js'



class RentMenu extends Component {
    render() {
        return (

            <div className="bgimg " >
                <MDBRow>
                <MDBCol sm="3">
                <NavAdmin/>
                </MDBCol>
                <MDBCol sm="9">
                <div style={{paddingTop:'3%'}}>
                <h4 className="text-uppercase  d-letter-spacing fw-bold" style={{color:'black'}}><i class="fas fa-home"></i> Dashboard - Rent</h4>
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
            <div className="menu ">
                <div className='row vh-100'>
                
               
                <div className="bgimg " >
                <div style={{paddingLeft:'35px'}}>
                <h1 style={{ color:'black', letterSpacing:'10px', fontSize:'64px'}}><b>Rental<br/> Services</b></h1>
                <div style={{color:'black', letterSpacing:'15px', fontSize:'20px'}}>SELECT ONE OPTION</div>
                </div>
                <br/>
                <br/>
                <div className='mx-auto align-self-center'>
                <div class="container">
                <div class="row">
                    <div class="col-sm-4">
                    <div style={{color:'black'}}>
                    <h3>Add Vehicle</h3>
                    <p>Fill following form and submit to add a Vehicle Available at KandyHills Hotel </p>
                    </div>
                    &nbsp;
                    <button className="btn btn-success"><a href="/rentadd" style={{textDecoration:'none',color:'white'}}>Add Vehicle</a></button>
                    </div>
                   
                    <div class="col-sm-4">
                    <div style={{color:'black'}}>
                    <h3>Update Vehicle Types</h3>        
                    <p>To Edite or Delete the Vehicle Types Available at KandyHills Hotel </p>
                    </div>
                    
                    <button className="btn btn-success"><a href="/rentHome" style={{textDecoration:'none',color:'white'}}>Update</a></button>
                    </div>
                    <div class="col-sm-4">
                    <div style={{color:'black'}}>
                    <h3>Received Orders</h3>
                    <p>Generate a report at the details of newly added orders.</p>
                    </div>
                    <br/>
                    <button className="btn btn-success"><a href="/rentorders" style={{textDecoration:'none',color:'white'}}>Orders</a></button>
                    </div>
                </div>
                </div>
                </div>

            </div>
            </div>
            </div>
            </div>
            </MDBCol></MDBRow></div>
            
            

        );
    }
}

export default RentMenu;