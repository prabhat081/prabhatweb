import {
  Container,
  Row,
  Col
} from "react-bootstrap";
import Style from "./section.module.css";
const Section = () =>{
  return (
    <>
      <Container className="my-5 py-4">
        <Row>
          <Col className="py-5">
            <div className={`${Style.heading} px-4`}>
              <h3>To make requests for further information,<br /><span className="text-primary">contact us </span> via our social channels.</h3>
            </div>
            <div className="sub_heading px-4">
              <p>We just need a couple of hours!<br /> No more than 2 working days since receiving your issue ticket</p>
            </div>
          </Col>
          <Col className="p-3">
              <form className={`${Style.contact_form}`}>
                <input type="text"  name="con_name" placeholder="To make requests for further informat *" />
                <input type="email" name="email" placeholder="Email *" />
                <input name="con_subject"  type="text" placeholder="Subject *" className={`${Style.con_subject}`} />
                <textarea name="con_message" placeholder="Please describe what you need." className={`${Style.con_message}`}></textarea>
                <button className={`${Style.submit_btn} btn submit-btn btn-primary`} value="submit">Send message</button>
              </form>

          </Col>
        </Row>
     </Container>
   </>
  );
}
export default Section;
