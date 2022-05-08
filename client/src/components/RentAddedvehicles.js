import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard, MDBCardHeader, MDBCardBody, MDBIcon, MDBCardText, MDBCardImage , MDBBtn, MDBCol, MDBRow , MDBCardTitle, MDBCardFooter} from 'mdb-react-ui-kit';


class RentAddedvehicles extends Component {

    constructor(props){
        super(props); //maybe an error
      
        this.state={
          posts:[]  //maybe an error
        };
      }
      
      componentDidMount(){
        this.retreivePosts();
      }
      
      retreivePosts(){
        axios.get("/rentposts").then(res =>{
          if(res.data.success){
            this.setState({
              posts:res.data.existingPosts
            });
            console.log(this.state.posts)
          }
        });
      }
      
      onDelete = (id)=>{
          axios.delete(`/rentpost/delete/${id}`).then((res) =>{
              alert("Deleted Successfully");
              this.retreivePosts();
          })
      }
      
      filterData(posts,searchKey){
          const result = posts.filter((post) =>
           post.topic.toLowerCase().includes(searchKey)||
           post.description.toLowerCase().includes(searchKey)||
           post.postCategory.toLowerCase().includes(searchKey)
          )
      
          this.setState({posts:result})
      }
      
      handleSearchArea = (e) =>{
          const searchKey = e.currentTarget.value;
      
          axios.get("/rentposts").then(res =>{
              if(res.data.success){
                  this.filterData(res.data.existingPosts,searchKey)
              }
            });
      }

      
render() {
        return (
         
<div>
    <div class="dashboard-main-wrapper">
        <div class="dashboard-wrapper">
            <div class="container" style={{paddingLeft:'2%', width:'98%'}}>
                <div className=" fw-bold mt-2 border-0 h2 pl-2 pt-5 pb-4 text-center" style={{color:'black', letterSpacing:'3px', fontSize:'64px', fontFamily:'Poppins'}}>
                Now Available Vehicles
                </div>
                <MDBRow  style={{marginTop:'1%'}} >
                    <MDBCol sm='12'>
                        <MDBRow className="p-3 mb-5">
                            {this.state.posts.map((posts,index) => (
                                <MDBCol sm='4'>
                                    <div className="pb-3">
                                        <MDBCard className="shadow-0 square border-5 border-light shadow-20 h-100 rounded-20px shadow p-3 mb-5 bg-white rounded" style={{borderRadius:'20px 20px 20px 20px'}}>
                                            <div className="text-center">
                                            <img src={posts.image} class="card-img-top " style={{height:'300px', width:'300px'}} alt="..." />
                                            </div>
                                            <MDBCardBody>
                                                <MDBCardText>
                                                    <h5 className="text-capitalize fw-bold text-center fw-bold" style={{fontSize:'24px', fontFamily:'Poppins'}}>Vehicle type: {posts.description}</h5>
                                                    <h5 className="text-capitalize fw-bold text-center fw-bold" style={{fontSize:'24px', fontFamily:'Poppins'}}>Vehicle NO: {posts.topic}</h5>
                                                    <h5 className="text-capitalize fw-bold text-center fw-bold" style={{fontSize:'24px', fontFamily:'Poppins'}}>Price per a day: {posts.postCategory}</h5>
                                                    <center>
                                                    <button className="btn btn-primary btn-lg" style={{boxShadow:'5px 5px 5px grey'}}>

                                                        <a href={`/rentorder/${posts._id}`} style={{textDecoration:'none',color:'white'}}>
                                                        <i className="fas fa-cash-register"></i>
                                                        &nbsp; Rent Now!

                                                    </a>

                                                    </button>
                                                    </center>
                                                </MDBCardText>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </div>
                                </MDBCol>
                            ))}
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </div>
        </div>
      </div>
</div>

        );
            }
}

export default RentAddedvehicles;