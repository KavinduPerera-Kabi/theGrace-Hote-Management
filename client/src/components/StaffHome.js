import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { MDBCard, MDBCardHeader, MDBIcon, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import NavAdmin from '../adminNav.js'
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { post } from 'jquery';






export default class Home extends Component {
constructor(props){
  super(props);
  this.pdf=this.pdf.bind(this)

  this.state={
    posts:[]
  };

}

componentDidMount(){
  this.retrievePosts();
}

pdf=()=> {
  const doc = new jsPDF();
  var col = ["No","NIC","Name","Department"];
  var rows = [];
  this.state.posts.map((posts,index) => {
    var temp = [
      ++index,
      posts.topic,
      posts.description,
      posts.postCategory
    ];
    rows.push(temp);
  });
  doc.autoTable(col,rows,{startY:10});
  doc.save("Staff Summery Report.pdf")
};


retrievePosts(){
  axios.get("/staffposts").then(res =>{
    if(res.data.success){
      this.setState({
        posts:res.data.existingPosts
      });
      console.log(this.state.posts)
    }
  });
}



// onDelete = (id) =>{
//   axios.delete(`/post/delete/${id}`).then((res) =>{
//     alert("Deleted successfully");
//     this.retrievePosts();
//   })
// }


onDelete = (id)=>{
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this member!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
          axios.delete(`/staffpost/delete/${id}`).then((res) =>{
          swal("Done! Staff member has been deleted!", {
            icon: "success",
          })
          this.retrievePosts()
          });
        } else {
          swal("Staff member details are safe!");
        }
        this.retrievePosts();
    })
}



filterData(posts,searchKey){
  const result = posts.filter((post) =>
    post.topic.toLowerCase().includes(searchKey)||
    post.description.toLowerCase().includes(searchKey)
  )

  this.setState({posts:result})
}

handleSearchArea = (e) =>{
  const searchKey= e.currentTarget.value;
  
  axios.get("/staffposts").then(res =>{
    if(res.data.success){
      this.filterData(res.data.existingPosts,searchKey)
    }
  });
  
}



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

        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            
          <h4>Current Staff</h4>
          </div>
          <div className="col-lg-3 mt-2 mb-2">
                <input
                className="form-control"
                type="search"
                placeholder="search by NIC or Name"
                name="searchQuery"
                onChange={this.handleSearchArea}>
                </input>
          </div>
        </div>
        
        <table className="table table-hover" style={{marginTop:'40px'}}>
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">NIC</th>
              <th scope="col">Name</th>
              <th scope="col">Department</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((posts,index) =>(
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>
                    <a href={`/staffpost/${posts._id}`} style={{textDecoration:'none'}}>
                    {posts.topic}
                    </a>
                </td>
                <td>{posts.description}</td>
                <td>{posts.postCategory}</td>
                <td>
                  <a className="btn btn-warning" href={`/staffedit/${posts._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(posts._id)}>
                    <i className="fas fa-trash-alt"></i>&nbsp;Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table> 

        <button className="btn btn-success"><a href="/staffadd" style={{textDecoration:'none',color:'white'}}>Add new staff Member</a></button>
        &nbsp;&nbsp;&nbsp;
        <button className="btn btn-success" onClick={this.pdf}>Summery Report</button>
        {/* <div>
            <button type="button" class="btn btn-secondary btn-sm" onClick={() => generatePDF(this.state.posts)}>Generate Report</button>
        </div> */}

</MDBCol>
</MDBRow>
      </div>
      
    )
  }
}