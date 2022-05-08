import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';


class MakeOrder extends Component {
    constructor(props){
        super(props);

        this.state={
            post:{},
            bookingdate:"",
            time:"",
            nodatesrent:"",
            location:""
        };
    }

    handleInputChange = (e) =>{
        const {name,value} = e.target;
        this.setState({
            ...this.state,
            [name]:value
        })
    }

        onSubmit = (e) =>{
        e.preventDefault();

        const {topic,description,postCategory} = this.state.post;
        const {bookingdate,time,nodatesrent,location} = this.state;

        const data ={
            topic:topic,
            description:description,
            postCategory:postCategory,
            bookingdate:bookingdate,
            time:time,
            nodatesrent:nodatesrent,
            location:location
        }

        console.log(data)

        axios.post("/rentorder/save",data).then((res) =>{
            if(res.data.success){
                swal("Done!", "Rent Added Successfully", "success")
                this.setState(
                    {
                        topic:"",
                        description:"",
                        postCategory:"",
                        bookingdate:"",
                        time:"",
                        nodatesrent:"",
                        location:""
                    }
                )
            }
        })
    

    }
  
      componentDidMount(){
  
        const id = this.props.match.params.id;
  
        axios.get(`/rentpost/${id}`).then((res) =>{
          if(res.data.success){
            this.setState({
              post:res.data.post
            });
  
            console.log(this.state.post);
          }
  
        });
  
      }
      render() {

        const {topic,description,postCategory,dname,dnumber,image} = this.state.post;

        return (
            
            <div className="col-md-8 mt-4 mx-auto">
                 <form className="needs-validation" onSubmit={this.onSubmit}>
                    <div class="row">
                        <div className="col-sm-6">
                            <div className="text-center">
                        <img src={image} class="card-img-top " style={{height:'200px', width:'200px', border:'4px solid #CAC9C9'}} alt="..." />
                        <h5 className="text-capitalize fw-bold text-center fw-bold" style={{fontSize:'32px'}}>{topic}</h5>
                        </div><br/><br/>
                        <div style={{color:'#7D7D7D'}}>
                            <h5>Vehicle Types : {description}</h5>
                        </div><br/>
                        <div style={{color:'#7D7D7D'}}>
                            <h5>Price per a day : Rs. {postCategory}</h5>
                        </div><br/>
                        <div style={{color:'#7D7D7D'}}>
                            <h5>Drivers Name: {dname}</h5>
                        </div><br/>
                        <div style={{color:'#7D7D7D'}}>
                            <h5>Drivers Number: {dnumber}</h5>
                        </div><br/>
                    </div>
                     <div className="col-sm-6">

                     <div className="from-group text-capitalize fw-bold fw-bold" style={{marginBottom:'15px', fontSize:'24px'}}>
                         <label style={{marginBottom:'5px'}}>Booking Date :</label>
                         <input type="date"
                         className="form-control"
                         name="bookingdate"
                         placeholder="Type here...(Ex : 2021/05/05)"
                         value={this.state.bookingdate}
                         onChange={this.handleInputChange}
                         required/>
                     </div>
                        <div className="form-group text-capitalize fw-bold fw-bold" style={{marginBottom:'15px', fontSize:'24px'}}>
                            <label style={{marginBottom:'5px'}}>Time :</label>
                            <input type="time"
                            className="form-control"
                            name="time"
                            placeholder="Type here...(Ex : 10.00pm)"
                            value={this.state.time}
                            onChange={this.handleInputChange}
                            required/>
                        </div>
                        <div className="form-group text-capitalize fw-bold fw-bold" style={{marginBottom:'15px', fontSize:'24px'}}>
                            <label style={{marginBottom:'5px'}}>NO dates rent :</label>
                            <input type="number"
                            className="form-control"
                            name="nodatesrent"
                            placeholder="Number of dates rent (Ex : 1)"
                            value={this.state.nodatesrent}
                            onChange={this.handleInputChange}
                            required/>
                        </div>
                        <div className="form-group text-capitalize fw-bold fw-bold" style={{marginBottom:'15px', fontSize:'24px'}}>
                            <label style={{marginBottom:'5px'}}>Location :</label>
                            <input type="text"
                            className="form-control"
                            name="location"
                            placeholder="Type here...(Ex : malabe)"
                            value={this.state.location}
                            onChange={this.handleInputChange}
                            required/>
                        </div>
                     </div>
                     <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                     <button className="btn btn-primary btn-lg rounded-pill" type="submit" style={{marginTop:'15px', boxShadow:'5px 5px 5px grey'}}>
                         <i className="fab fa-opencart"></i>
                         &nbsp; Rent
                     </button></div>
                     </div>

                 </form>
            </div>
        );
    }
}

export default MakeOrder;