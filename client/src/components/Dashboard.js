import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import NavBar from './NavBar.js';


import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';
import image4 from './images/4.jpg';
import image5 from './images/5.jpg';
import image6 from './images/6.jpg';
import image7 from './images/7.jpg';
import image8 from './images/8.jpg';
import image9 from './images/9.jpg';
import image10 from './images/10.jpg';
import image11 from './images/11.jpg';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Carousel pause={false} fade={true} indicators={true} wrap={true}>
                <Carousel.Item interval={4000}>
                    <img
                    width={900}
                    height={500} 
                    className="d-block w-100"
                    src={image5}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h1 style={{ color:'white', letterSpacing:'5px', fontSize:'64px', fontFamily:'Lucida Handwriting'}}>The<i>GRACE</i></h1>
                    <p style={{ color:'white', letterSpacing:'5px', fontSize:'24px' , fontFamily:'Times New Roman'}}>A personal tropical sanctuary set within the heart of city</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img
                    width={900}
                    height={500} 
                    className="d-block w-100"
                    src={image2}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Relax and feel peace in you</h3>
                    <p>Enjoy an extraordinary retreat with exclusive offers. Relax and refresh – a perfect family getaway</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img
                    width={900}
                    height={500} 
                    className="d-block w-100"
                    src={image3}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Small town feel, big city fun.</h3>
                    <p>"We can breed endangered species in captivity but with nowhere wild to release them their days are probably numbered."</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={4000}>
                    <img
                    width={900}
                    height={500} 
                    className="d-block w-100"
                    src={image1}
                    alt="fourth slide"
                    />
                    <Carousel.Caption>
                    <h3>Relax and feel peace in you</h3>
                    <p>Enjoy an extraordinary retreat with exclusive offers. Relax and refresh – a perfect family getaway</p>
                    </Carousel.Caption>
                </Carousel.Item>

                    <Carousel.Item interval={4000}>
                    <img
                    width={900}
                    height={500} 
                    className="d-block w-100"
                    src={image4}
                    alt="fifth slide"
                    />
                    <Carousel.Caption>
                    <h3>The best value under the sun</h3>
                    <p>Come and stay with us to feel even better than at home. Enjoy unforgettable experiences in dream hotels</p>
                    </Carousel.Caption>
                </Carousel.Item>

                

                </Carousel>
                <br/><br/>

                <p><center>_______________________________ the<i>GRACE</i> HOTEL _______________________________</center></p>
                <h2 style={{fontFamily:'Times New Roman'}}><center>"OUR GUESTS ENJOY THE BEST OF<br/>EVERYTHING"<br/>__________________________________</center></h2>
               
                <p style={{fontFamily:'Helvetica'}}><center>Plan an ideal staycation complete with complimentary, breakfast, spa or dining credits or even all-day access<br/> to Adventure Zone for the kids. We have everyone in the family's well-being in mind.</center></p>
                <br/><br/>

                <Container>
                <Row>
                    <Col sm={8}>
                        <img
                            width={700}
                            height={318} 
                            // className="d-block w-100"
                            src={image6}
                            alt="fifth slide"
                        />
                    </Col>
                    <Col sm={4}><center>
                        <h6>______<b>the</b><i>GRACE</i>______</h6>
                        <h3>BARS & RESTAURANTS</h3>
                        <br/>
                        Set your senses a sail on a culinary adventure, with multiple themed dining options, designed especially with you in mind. Featuring succulent local delights, flavorful delicacies from the East and epicurean masterpieces from the West, our gourmet selections will take you on an exotic journey around the globe.
                        </center><br/>
                        <button type="button" class="btn btn-outline-primary btn-sm"><a href="/mealsadded" style={{textDecoration:'none'}}>Read more</a></button>
                        </Col>
                </Row>
                <br/><br/><br/>
                <h2 style={{fontFamily:'Times New Roman'}}><center>"UNFORGETTABLE EVENTS"<br/>__________________________________</center></h2>
               

                <Row>
                    <Col sm={6}>
                        <center>
                        <img
                            width={550}
                            height={300} 
                            // className="d-block w-100"
                            src={image7}
                            alt="fifth slide"
                        />
                        </center><br/>
                        <h4>Meetings & Events</h4>
                        <p style={{textAlign:'justify'}}>KandyHills Hotel has the most extensive and versatile events space in Sri Lanka.
                        Offers a range of flexible venues including the signature theGRACE Ballroom,  that can cater to seated banquets for up to 1,440 guests.
                        </p>
                        <button type="button" class="btn btn-outline-primary btn-sm">Learn more</button>

                    </Col>
                    <Col sm={6}>
                        <center>
                        <img
                            width={550}
                            height={300} 
                            // className="d-block w-100"
                            src={image8}
                            alt="fifth slide"
                        />
                        </center><br/>
                        <h4>Wedding Planning</h4>
                        <p style={{textAlign:'justify'}}>The city’s sought-after location for weddings, KandyHills Hotel offers unique and luxuriously styled venues with a dedicated team who will help make your special day a memorable one.</p>
                        <button type="button" class="btn btn-outline-primary btn-sm">Learn more</button>
                    </Col>
                </Row>

                <br/><br/><br/>
                <h2 style={{fontFamily:'Times New Roman'}}><center>"LUXURY HIGHLIGHTS"<br/>__________________________________</center></h2>
                <Row>
                
                    <Col sm>
                    <center>
                    <img
                            width={280}
                            height={350} 
                            // className="d-block w-100"
                            src={image10}
                        />

                        <h3>DINING</h3>
                        <p>Comprising the very best of restaurants in<br/> Sri Lanka, theGRACE offers grandeur extravagance & unparalleled dining experiences.</p>
                        <br/><button type="button" class="btn btn-outline-primary btn-sm">Find out more</button>
                  

                    </center>
                    </Col>

                    <Col sm>
                    <center>

                    <img
                            width={280}
                            height={350} 
                            // className="d-block w-100"
                            src={image9}
                        />
                        <h3>SPA</h3>
                        <p>Set your soul free with a range of <br/>rejuvenating spa treatments</p><br/><br/>
                        <button type="button" class="btn btn-outline-primary btn-sm">Find out more</button>

                   </center>
                    </Col>

                    <Col sm>
                    <center>
                    <img
                            width={280}
                            height={350} 
                            // className="d-block w-100"
                            src={image11}
                        />

                        <h3>ACCOMMODATION</h3>
                        <p>A pinnacle of comfort, our rooms are dressed in warm shades of beige, fitted with white marble bathrooms & adorned with furniture in soothing shades of ivory.
                        </p>
                        <button type="button" class="btn btn-outline-primary btn-sm">Find out more</button>

                   
                    </center>
                    </Col>
                </Row>

                </Container>

                <br/>
                
                


            </div>
        );
    }
}

export default Dashboard;