import { Col, Row } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';


const FooterComponent = () => {
  return (

     <footer id="Footer">
       {/* <Container fluid>
         <Row>
         <Col className="bg-dark text-white text-center py-5 md-3 ml-1">
          <div>CUSTOMER SERVICE</div>
          <Row className="fields"><a href="#">Contact Us</a></Row>
          <Row className="fields"><a href="#">Track Order</a></Row>
          <Row className="fields"><a href="#">Cancel Orde</a></Row>
          
          </Col>
         <Col className="bg-dark text-white text-center py-5 md-3">
         <div>COMPANY</div>
         <Row className="fields"><a href="#">Contact Us</a></Row>
          <Row className="fields"><a href="#">Track Order</a></Row>
          <Row className="fields"><a href="#">Cancel Orde</a></Row>
          </Col>
         <Col className="bg-dark text-white text-center py-5 md-3">
         <div>CONTACT WITH US</div>
         <Row className="fields"><a href="#">Contact Us</a></Row>
          <Row className="fields"><a href="#">Track Order</a></Row>
          <Row className="fields"><a href="#">Cancel Orde</a></Row>
          </Col>
          </Row>
      </Container> */}
      <Row className="bg-dark Image_bg "><img className="bg-dark Image_Logo " src="/images/products/logo.png"></img></Row>
      <Row className="bg-dark ">
        <Col >
      <ListGroup variant="flush"  >
      <ListGroup.Item className="bg-dark  md-3 ml-1 Heading">CUSTOMER SERVICE</ListGroup.Item>
      <ListGroup.Item className="bg-dark text-white md-3 ml-1">Contact Us</ListGroup.Item>
      <ListGroup.Item className="bg-dark text-white md-3 ml-1">Track Order</ListGroup.Item>
      <ListGroup.Item className="bg-dark text-white md-3 ml-1">Cancel Order</ListGroup.Item>
    </ListGroup>
    </Col>
        <Col>
      <ListGroup variant="flush">
      <ListGroup.Item className="bg-dark  md-3 ml-1 Heading">COMPANY</ListGroup.Item>
      <ListGroup.Item className="bg-dark text-white md-3 ml-1">About Us</ListGroup.Item>
      <ListGroup.Item className="bg-dark text-white md-3 ml-1">Privacy Policy</ListGroup.Item>
      <ListGroup.Item className="bg-dark text-white md-3 ml-1">Terms & Conditions</ListGroup.Item>
    </ListGroup>
    </Col>
        <Col>
      <ListGroup variant="flush">
      <ListGroup.Item className="bg-dark  md-3 ml-1 Heading">CONNECT WITH US</ListGroup.Item>
      <ListGroup.Item className="bg-dark text-white md-3 ml-1"><i class="bi bi-instagram"></i></ListGroup.Item>
      <ListGroup.Item className="bg-dark text-white md-3 ml-1"><i class="bi bi-facebook"></i></ListGroup.Item>
      <ListGroup.Item className="bg-dark text-white md-3 ml-1"><i class="bi bi-twitter icons"></i><i class="bi bi-pinterest icons "></i><i class="bi bi-snapchat icons"></i></ListGroup.Item>
    </ListGroup>
    </Col>
    </Row>
      <Row className="bg-dark ">
        <Col >
      <ListGroup variant="flush"  >
      <ListGroup.Item className="bg-dark  md-3 ml-1 Heading">Payments</ListGroup.Item>
      <ListGroup.Item className="bg-dark text-white md-3 ml-1"><i class="bi bi-paypal"></i>  PayPal</ListGroup.Item>
      <ListGroup.Item className="bg-dark text-white md-3 ml-1"><i class="bi bi-credit-card"></i> Debit/Credit Card</ListGroup.Item>
      <ListGroup.Item className="bg-dark text-white md-3 ml-1">RazorPay</ListGroup.Item>
    </ListGroup>
    </Col>
        <Col>
      <ListGroup variant="flush">
      <ListGroup.Item className="bg-dark  md-3 ml-1 Heading">Our Android App</ListGroup.Item>
      <ListGroup.Item className="bg-dark text-white md-3 ml-1"><img src="\Images\products\google-play.png"></img>   Play store</ListGroup.Item>
    </ListGroup>
    </Col>
        <Col>
      <ListGroup variant="flush">
      <ListGroup.Item className="bg-dark  md-3 ml-1 Heading">Address</ListGroup.Item>
      <ul class="list-unstyled text-white ">
          <li><i class="fa fa-map-marker"></i>Sector-31, Noida, Uttar Pradesh</li>
          <li><i class="fa fa-map-marker"></i>Pin Code - 201301</li>
          <li><i class="fa fa-phone"></i> 555-555-1212</li>
          <li><i class="fa fa-envelope"></i> <a href="mailto:inmybalcony@gmail.com">inmybalcony@gmail.com</a></li>
        </ul>
    </ListGroup>
    </Col>
    </Row>
     </footer>
  //    <footer class="bg-dark text-white ">
  //    <div class="container">
  //      <div class="row">
  //        <div class="col-md-8
  //        ">
  //          <h4>About Us</h4>
  //          <p>We are a company that specializes in providing high-quality products and services to our customers.</p>
  //          <ul class="list-inline">
  //            <li class="list-inline-item"><a href="#"><i class="fab fa-facebook"></i></a></li>
  //            <li class="list-inline-item"><a href="#"><i class="fab fa-twitter"></i></a></li>
  //            <li class="list-inline-item"><a href="#"><i class="fab fa-instagram"></i></a></li>
  //          </ul>
  //        </div>
  //        <div class="col-md-4">
  //          <h4>Contact Us</h4>
  //          <ul class="list-unstyled">
  //            <li><i class="fa fa-map-marker"></i> 123 Main St, Anytown USA</li>
  //            <li><i class="fa fa-phone"></i> 555-555-1212</li>
  //            <li><i class="fa fa-envelope"></i> <a href="mailto:info@example.com">info@example.com</a></li>
  //          </ul>
  //        </div>
  //        <div class="col-md-4">
          
  //        </div>
  //      </div>
  //    </div>
  //    <div class="container">
  //      <div class="row">
  //        <div class="col-md-6">
  //          <p>&copy; 2023 Example Company. All rights reserved.</p>
  //        </div>
  //        <div class="col-md-6">
  //          <ul class="list-inline float-md-right">
  //            <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
  //            <li class="list-inline-item"><a href="#">Terms of Use</a></li>
  //          </ul>
  //        </div>
  //      </div>
  //    </div>
  //  </footer>
  );
};

export default FooterComponent;
