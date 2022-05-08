import React, { useEffect, useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert2';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { MDBCard, MDBCardHeader, MDBIcon, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import NavAdmin from '../adminNav.js'



    function CreatePost() {

        const [topic, setTopic] = useState("");
        const [description, setDescription] = useState("");
        const [postCategory, setpostCategory] = useState("");
        const [email, setemail] = useState("");
        const [dob, setdob] = useState("");
        const [phn, setphn] = useState("");
        const [jobS, setjobS] = useState("");
        const [ws, setws] = useState("");
        const [imageSelected, setimageSelected] = useState("");
        const [imageErrorMsg, setimageErrorMsg] = useState(false);

        function createPost(e){
            e.preventDefault();
            setimageErrorMsg(false);

            if(!imageSelected){

                setimageErrorMsg(true);

                return;

            }
            const formData = new FormData();
            formData.append("file", imageSelected);
            formData.append("upload_preset", "kavinduimage");

            axios.post("https://api.cloudinary.com/v1_1/kavindu/image/upload", formData).then((response)=>{
                const image = imageSelected.name;
                console.log(response.data.url)
                const createost = {topic, description, postCategory, email, dob, phn, jobS, ws, image:response.data.url}

            axios.post("/staffpost/save", createost).then(() =>{
                swal.fire({
                    title: "Success!",
                    text: "staff member Adding Success!",
                    icon: 'success',
                    confirmButtonText: "OK",
                    type: "success"}).then(okay => {
                    if (okay) {
                        window.location.href = "/staffhome";
                    }
                });
                }).catch((err)=>{
                    console.log(err)
                    swal.fire({  
                        title: "Error!",
                        text: "Staff member Adding Not Success",
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
                <h4 className="text-uppercase  d-letter-spacing fw-bold" style={{color:'black'}}><i class="fas fa-home"></i> Dashboard - Staff</h4>
                <hr/>
                </div>
            
            {/* <div className="col-md-8 mt-4 mx-auto"> */}
                
                    
                    <form className="needs-validation" onSubmit={createPost}>
                        
                    
            {/* </div> */}
            <div class="row">
                <div class="col-sm-6" >
                
                <div style={{paddingLeft:'17px'}}>
                    <h1 style={{ color:'black', letterSpacing:'5px', fontSize:'64px'}}><b>Add Staff<br/>Member</b></h1>
                    <div style={{color:'black', letterSpacing:'7px', fontSize:'20px'}}>EVERY FIELD IS MANDATORY</div>
                </div><br/>  


                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}}>NIC</label>
                            <input type="text"
                            maxLength={12}
                            className="nic-validate form-control"
                            required pattern="^[0-9+]{9}[vV|xX]$||^[0-9+]{12}$"
                            name="topic"
                            placeholder="Enter NIC"
                            onChange={(e) =>{
                                setTopic(e.target.value);
                            }}
                            required/>
                        </div>

                        <div className="from-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}}>Name</label>
                            <input type="text"
                            className="form-control"
                            required pattern="^[a-zA-Z\u00C0-\u017F]+(?:\s[a-zA-Z\u00C0-\u017F]+)*$"
                            name="description"
                            placeholder="Enter Name"
                            onChange={(e) =>{
                                setDescription(e.target.value);
                            }}
                            required/>
                        </div>

                        <div className="from-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}}>Department</label>
                            <input type="text"
                            className="form-control"
                            name="postCategory"
                            placeholder="Enter Department"
                            onChange={(e) =>{
                                setpostCategory(e.target.value);
                            }}
                            required/>
                        </div>

                        

                </div>
                <div class="col-sm-6" >
                        <br/>
                        <div className="from-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}}>Email</label>
                            <input type="email"
                            required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                            className="form-control"
                            name="email"
                            placeholder="Enter Email"
                            onChange={(e) =>{
                                setemail(e.target.value);
                            }}/>
                        </div>
                
                        <div className="from-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}}>Date Of Birth</label>
                            <input type="date"
                            className="form-control"
                            name="dob"
                            placeholder="D D / M M / Y Y Y Y"
                            onChange={(e) =>{
                                setdob(e.target.value);
                            }}
                            required/>
                        </div>

                        

                        <div className="from-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}}>Phone Number</label>
                            <PhoneInput defaultCountry="LK"
                            className="form-control"
                            maxLength="12"
                            name="phn"
                            placeholder="Enter phone number"
                            // onChange={(e) =>{
                            //     setphn(e.target.value);
                            // }}
                            onChange={setphn}
                            required/>
                        </div>

                        <div className="from-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}}>JOB Skills</label>
                            <input type="text"
                            className="form-control"
                            name="jobS"
                            placeholder="Enter JOB Skills"
                            onChange={(e) =>{
                                setjobS(e.target.value);
                            }}
                            required/>
                        </div>

                        <div className="from-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}}>Work Experience</label>
                            <input type="text"
                            className="form-control"
                            name="ws"
                            placeholder="No. of years"
                            onChange={(e) =>{
                                setws(e.target.value);
                            }}
                            required/>
                        </div>

                        <div className="from-group" style={{marginBottom:'15px'}}>
                                <label style={{marginBottom:'5px'}}>Profile image</label>
                                <input type="file"
                                className="form-control" id="customFile"
                                name="image"
                                placeholder="upload profile pic"
                                onChange={(e) =>{
                                    setimageSelected(e.target.files[0]);
                                }}/>
                                {imageErrorMsg && <div style={{color:'red'}}>Please select an image</div>}
                            </div>


                        <div class="text-center">
                        <button className="btn btn-success" type="submit" style={{marginTop:'15px' }}>
                            <i className="far fa-check-square"></i>
                            &nbsp; Add Member
                        </button>
                        </div>
 
            </div>
            </div>
            </form>
            </MDBCol>
            </MDBRow>
            </div>



            
        );
    };
export default CreatePost;