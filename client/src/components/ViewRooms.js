import React, { Component } from 'react';

import axios from 'axios';

import { MDBCard, MDBCardHeader, MDBCardBody, MDBIcon, MDBCardText, MDBCardImage , MDBBtn, MDBCol, MDBRow , MDBCardTitle, MDBCardFooter} from 'mdb-react-ui-kit';

import SmoothList from 'react-smooth-list';

 

class ViewRooms extends Component {

 

    constructor(props){

        super(props);

      

        this.state={

          posts:[]

        };

      }

      

       

      componentDidMount(){

        this.retrievePosts();

      }

      retrievePosts(){

        axios.get("/roomposts").then(res =>{

          if(res.data.success){

            this.setState({

              posts:res.data.existingPosts

            });

            console.log(this.state.posts);

          }

        });

      }

      

      onDelete = (id) =>{

        axios.delete(`/roompost/delete/${id}`).then((res) =>{

          alert("Delete Successfully");

          this.retrievePosts();

        })

      }

      

      filterData(posts,searchKey){

        const result =posts.filter((post) => 

        post.topic.toLowerCase().includes(searchKey)||

        post.description.toLowerCase().includes(searchKey)||

        post.postCategory.toLowerCase().includes(searchKey)

        )

      

        this.setState({posts:result})

      }

      

      handleSearchArea=(e) =>{

      

        const searchKey =e.currentTarget.value;

      

        axios.get("/roomposts").then(res =>{

          if(res.data.success){

           this.filterData(res.data.existingPosts,searchKey)

          }

        });

        

      }

 

      render() {

        return (

          <div style={{ 

            backgroundImage: `url("http://www.hdwallpaperspulse.com/wp-content/uploads/2017/05/31/stunning-hd-dark-image.jpg")`,

            backgroundPosition: 'center',

            backgroundSize: 'cover',

            backgroundRepeat: 'no-repeat', 

            width: '100vw',

            height: '90vh'

          }}>

    <SmoothList>

 

            {/* /*<div>

                {this.state.posts.map((posts,index) =>(*/ 

<div>

    <div class="dashboard-main-wrapper">

        <div class="dashboard-wrapper">

            <div class="container" style={{paddingLeft:'2%', width:'98%'}}>

                            <div className=" fw-bold mt-2 border-0 h2 pl-2 pt-5 pb-4 text-center" style={{color:'aqua', letterSpacing:'3px', fontSize:'64px', fontFamily:'Roboto'}}>

                             AvailableRooms

                            </div>

                 <MDBRow  style={{marginTop:'1%'}} >

                    <MDBCol sm='12'>

                            <div className="text-end mb-3">

                                {/* <a href="Academicstaffleave">

                                    <MDBBtn className="shadow-0 mx-2" style={{fontSize:'14px', letterSpacing:'2px'}}color='dark'>Leave Teachers</MDBBtn>

                                </a> */}

                            </div>

                            <MDBRow className="p-3">

                             {this.state.posts.map((posts,index) => (

                                        <MDBCol sm='4'>

                                            <MDBCard className="shadow-0 square border-5 border-light shadow-2  h-100">

                                                <img src={posts.image} class="card-img-top" alt="..." />

                                                <MDBCardBody>

                                                    <MDBCardText>

                                                    <h5 className="text-capitalize fw-bold text-center fw-bold" style={{fontSize:'32px', fontFamily:'Poppins'}}>{posts.topic}</h5>

                                                    <center>

                                                    <button className="btn btn-outline-primary" style={{boxShadow:'5px 5px 5px grey'}}>

                                                <a href={`/roombook/${posts._id}`} style={{textDecoration:'none',color:'blue'}}>

                                                <i class="glyphicon glyphicon-bookmark"></i>

                                                &nbsp;Book

 

                                                </a>

 

                                            </button>

                                                    </center>

                                                    </MDBCardText>

                                                    </MDBCardBody>

                                            </MDBCard>

                                        </MDBCol>

                                    ))}

                                  </MDBRow>

                        <br/><br/>

                    </MDBCol>

                    </MDBRow>

                

            </div>

        </div>

      </div>

    </div>

      }

    </SmoothList>

    </div>

                             

        );

    }

    

 

}
export default ViewRooms;

