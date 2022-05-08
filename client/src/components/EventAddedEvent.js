import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard, MDBCardHeader, MDBCardBody, MDBIcon, MDBCardText, MDBCardImage , MDBBtn, MDBCol, MDBRow , MDBCardTitle, MDBCardFooter} from 'mdb-react-ui-kit';
import NavBar from './NavBar.js'; 
import { blue } from '@material-ui/core/colors';
import { dark } from '@material-ui/core/styles/createPalette';


class EventAddedEvent extends Component {


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
        axios.get("/eventposts").then(res =>{
          if(res.data.success){
            this.setState({
              posts:res.data.existingPosts
            });
            console.log(this.state.posts);
          }
        });
      }
      
      onDelete = (id) =>{
        axios.delete(`/eventpost/delete/${id}`).then((res) =>{
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
      
        axios.get("/eventposts").then(res =>{
          if(res.data.success){
           this.filterData(res.data.existingPosts,searchKey)
          }
        });
        
      }

      render() {
        return (
            /*<div>
                {this.state.posts.map((posts,index) =>(*/
<div>
<NavBar/>
    <div class="dashboard-main-wrapper">
        <div class="dashboard-wrapper">
            <div class="container" style={{paddingLeft:'2%', width:'98%'}}>
                            <div><br/><br/>
                            <p><center>_______________________________ the<i>GRACE</i> HOTEL _______________________________</center></p>
                <h2 style={{fontFamily:'Times New Roman'}}><center>"OUR GUESTS ENJOY THE BEST OF<br/>EVERYTHING"<br/>__________________________________</center></h2>
               
                <p style={{fontFamily:'Helvetica'}}><center>Always remember the reason why you started, especially in those moments when self-doubt comes in.<br/>The reason you started will always pull you out of the shadows.</center></p>
               
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
                                                <img width={280} height={200} src={posts.image} class="card-img-top" alt="..." />
                                                <MDBCardBody>
                                                    <MDBCardText>
                                                    <h5 className="text-capitalize fw-bold text-center fw-bold" style={{fontSize:'32px', fontFamily:'Poppins'}}>{posts.topic}</h5>
                                                    <center>
                                                    <button className="btn btn-outline-primary" style={{boxShadow:'5px 5px 5px grey'}}>
                                                <a href={`/eventbook/${posts._id}`} style={{textDecoration:'none',color:'blue'}}>
                                                <i class="glyphicon glyphicon-bookmark"></i>
                                                &nbsp;Book

                                                </a>
                                              
                                            </button>
                                                    </center>
                                                    </MDBCardText>
                                                    
                                                    </MDBCardBody>
                                            </MDBCard>
                                            <br/><br/>
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
        );
    }

}



export default EventAddedEvent;