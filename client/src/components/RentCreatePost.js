import React, { useEffect, useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert2';
import { MDBCard, MDBCardHeader, MDBCardBody, MDBBtn, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import NavAdmin from '../adminNav.js'
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

function RentCreatePost() {

    const [topic, setTopic] = useState("");
    const [description, setDescription] = useState("");
    const [postCategory, setpostCategory] = useState("");
    const [dname, setdname] = useState("");
    const [dnumber, setdnumber] = useState("");
    const [imageSelected, setimageSelected] = useState("");
    const [imageErrorMsg, setimageErrorMsg] = useState(false);

    function RentcreatePost(e){
        e.preventDefault();
        setimageErrorMsg(false);

            if(!imageSelected){

                setimageErrorMsg(true);

                return;

            }
        const formData = new FormData();
        formData.append("file", imageSelected);
        formData.append("upload_preset", "kesharaimage");

        axios.post("https://api.cloudinary.com/v1_1/kesara/image/upload", formData).then((response)=>{
            const image = imageSelected.name;
            console.log(response.data.url)
            const createost = {topic, description, postCategory, dname,dnumber, image:response.data.url}

            axios.post("/rentpost/save", createost).then(() =>{
                swal.fire({
                    title: "Success!",
                    text: "Vehicle Adding Success!",
                    icon: 'success',
                    confirmButtonText: "OK",
                    type: "success"}).then(okay => {
                    if (okay) {
                        window.location.href = "/renthome";
                    }
                });
            }).catch((err)=>{
                console.log(err)
                swal.fire({  
                    title: "Error!",
                    text: "Vehicle Adding Not Success",
                    icon: 'error',
                    confirmButtonText: "OK",
                    type: "success"})
            })
        })
    }

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
          <h1 className="h3 mb-3 font-weight-normal">Add New Vehicle</h1>
              <form className="needs-validation" onSubmit={RentcreatePost}>
                  <div className="form-group" style={{marginBottom:'15px'}}>
                      <label style={{marginBottom:'5px'}}>Vehicle NO</label>
                      <input type="text"
                      className="form-control"
                      name="topic"
                      placeholder="Enter Vehicle NO"
                      onChange={(e) =>{
                          setTopic(e.target.value);
                      }}
                      required/>
                  </div>

                  <div className="from-group" style={{marginBottom:'15px'}}>
                      <label style={{marginBottom:'5px'}}>Vehicle Type</label>
                      <input type="text"
                      className="form-control"
                      name="description"
                      placeholder="Enter Vehicle Type"
                      onChange={(e) =>{
                          setDescription(e.target.value);
                      }}
                      required/>
                  </div>

                  <div className="from-group" style={{marginBottom:'15px'}}>
                      <label style={{marginBottom:'5px'}}>Price</label>
                      <input type="number"
                      className="form-control"
                      name="postCategory"
                      placeholder="Enter Price"
                      onChange={(e) =>{
                          setpostCategory(e.target.value);
                      }}
                      required/>
                  </div>

                  <div className="from-group" style={{marginBottom:'15px'}}>
                      <label style={{marginBottom:'5px'}}>Drivers Name</label>
                      <input type="text"
                      className="form-control"
                      required pattern="^[a-zA-Z\u00C0-\u017F]+(?:\s[a-zA-Z\u00C0-\u017F]+)*$"
                      name="dname"
                      placeholder="Enter the Name"
                      onChange={(e) =>{
                          setdname(e.target.value);
                      }}
                      required/>
                  </div>
                  
                  <div className="from-group" style={{marginBottom:'15px'}}>
                      <label style={{marginBottom:'5px'}}>Drivers Phone Number</label>
                      <PhoneInput defaultCountry="LK"
                      className="form-control"
                      maxLength="12"
                      name="dnumber"
                      placeholder="Enter the number"
                      //onChange={(e) =>{
                         // setdnumber(e.target.value);
                     // }}
                     onChange={setdnumber}
                      required/>
                  </div>
                  

                  <div className="from-group" style={{marginBottom:'15px'}}>
                      <label style={{marginBottom:'5px'}}>Upload Image</label>
                      <input type="file"
                      className="form-control" id="customFile"
                      name="postCategory"
                      placeholder="Enter Potion Includes"
                      onChange={(e) =>{
                          setimageSelected(e.target.files[0]);
                      }}/>
                      {imageErrorMsg && <div style={{color:'red'}}>Please select an image</div>}
                  </div>


                  <button className="btn btn-success" type="submit" style={{marginTop:'15px'}}>
                      <i className="far fa-check-square"></i>
                      &nbsp; Add
                  </button>
              </form>
      </div>
      </MDBCol>
      </MDBRow>
      </div>

        );
                    };

export default RentCreatePost;