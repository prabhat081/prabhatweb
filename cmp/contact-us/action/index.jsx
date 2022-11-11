import {
  Container,
  Row,
  Col
} from "react-bootstrap";
import Style from "./action.module.css";

const Action = () =>{
  return(
  <>
  <Container fluid  className={`p-0 d-flex flex-wrap justify-content-center align-items-center my-5 ${Style.con_action}`}>
     <Row className="w-100">
       <Col md="6" className={`p-4 p-md-5`}>
         <h2 className="text-center text-md-start">
          We run all kinds of IT services that vow <br className="d-none d-md-block" /> your <span className="text-primary"> success</span>
         </h2>
       </Col>
       <Col md="6" className={`d-flex justify-content-center align-items-center`}>
         <button className= {`btn btn-primary me-4 px-4 py-3`}>
            <i className={`fa fa-comment me-1`}></i>
            Let's talk
        </button>
         <button className="btn btn-danger px-4 py-3">
           <i className={` fa fa-info-circle me-1`}></i>
           Get info
         </button>
       </Col>
     </Row>
 </Container>
  </>
  );
}

export default Action;
