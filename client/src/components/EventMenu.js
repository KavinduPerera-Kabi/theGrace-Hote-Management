import React, { Component } from 'react';
//import './NavBar.css'
//import './navMenu.css';
import { MDBCard, MDBCardHeader, MDBIcon, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import NavAdmin from '../adminNav.js'


class EventMenu extends Component {
    render() {
        return (
            
            <div className="bgimg " >
                <MDBRow>
                <MDBCol sm="3">
                <NavAdmin/>
                </MDBCol>
                <MDBCol sm="9">
                <div style={{paddingTop:'3%'}}>
                <h4 className="text-uppercase  d-letter-spacing fw-bold" style={{color:'black'}}><i class="fas fa-home"></i> Dashboard - Event</h4>
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
            <div className='menu'>
                <div className='row h-100'>
                
            <div className="bgimg">
                <div style={{paddingLeft:'35px'}}>
                <h1 style={{ color:'black', letterSpacing:'4px', fontSize:'64px'}}><b>Events <br/> Management</b></h1>
                <div style={{color:'black', letterSpacing:'13px', fontSize:'20px'}}>SELECT ONE OPTION</div>
                </div>

                
               

               
                <br/><br/>
                <div className='mx-auto align-self-top'>
                <div class="container">
                <div class="row">
                    <div class="col-sm-4">
                    <div style={{color:'black'}}>
                    
                    <h3>Add New Event</h3>
                    
                    
                    <p>To Add New Event For Now Available Events</p>
                    </div>
                    
                    <button type="button" class="btn btn-primary btn-lg rounded-pill"><a href="/eventadd" style={{textDecoration:'none',color:'white'}}> Add New Event</a></button>
                    
                    </div>
                   
                    
                    <div class="col-sm-4">
                    <div style={{color:'black'}}>
                    
                    <h3>Available Events Details</h3>        
                    <p>To Edit Available Events And Book Event</p>
                    </div>
                    
                    <button type="button" class="btn btn-primary btn-lg rounded-pill"><a href="/eventHome" style={{textDecoration:'none',color:'white'}}>Update</a></button>
                    
                    </div>
                    <div class="col-sm-4">
                    <div style={{color:'black'}}>
                    
                    <h3>To view Received Orders </h3>
                    <p>To View Orders</p>
                    </div>
                    
                    <button type="button" class="btn btn-primary btn-lg rounded-pill"><a href="/eventorders" style={{textDecoration:'none',color:'white'}}>Received Orders</a></button> 
                    
                    </div>
                </div>
                </div>
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

export default EventMenu;