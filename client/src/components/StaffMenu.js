import React, { Component } from 'react';
import { MDBCard, MDBCardHeader, MDBIcon, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import NavAdmin from '../adminNav.js'


class Menu extends Component {
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

                <div style={{ 
                backgroundImage: `url("https://www.linkpicture.com/q/dot-grid.png")`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat', 
                //width: '100vw',
                height: '90vh'
              }}>
            <div className="container">
                <div style={{paddingLeft:'17px'}}>
                <h1 style={{ color:'black', letterSpacing:'15px', fontSize:'64px'}}><b>Staff<br/> Management</b></h1>
                <div style={{color:'black', letterSpacing:'20px', fontSize:'20px'}}>SELECT ONE OPTION</div>
                </div><br/><br/><br/>

                <div class="container">
                <div class="row">
                    <div class="col-sm-6">
                    <div style={{color:'black'}}>
                    <h3>Add New Staff Member</h3>
                    <p>Fill following form and submit to Add a new<br/> Staff member to the KandyHills Hotel</p>
                    
                    <button type="button" class="btn btn-primary btn-lg"><a href="/staffadd" style={{textDecoration:'none',color:'white'}}>Add Member</a></button>
                    </div>
                    </div>
                    <div class="col-sm-6">
                    <div style={{color:'black'}}>
                    <h3>Current Staff Details</h3>
                    <p>Full details of Current Working members in the KandyHills Hotel.</p>
                    
                    <button type="button" class="btn btn-primary btn-lg"><a href="/staffhome" style={{textDecoration:'none',color:'white'}}>Current Members</a></button>
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

export default Menu;