import {
  Container,
  Row,
  Col
} from "react-bootstrap";
import Style from "./info.module.css";
const Info = () =>{
  return(
    <Container className="  my-5 py-4">
      <Row>
        <Col>
          <div>
            <h5 className={`${Style.con_heading}`}>India</h5>
            <ul className={`${Style.conact_info__list}`}>
              <li>{process.env.NEXT_PUBLIC_ADDRESS}</li>
              <li ><a href="#" className={`${Style.css_efect}`}>{process.env.NEXT_PUBLIC_EMAI}</a></li>
              <li className={`${Style.css_efect}`}>{process.env.NEXT_PUBLIC_PHONE_NUMBER}</li>
            </ul>
          </div>
        </Col>
        <Col>
          <div>
            <h5 className={`${Style.con_heading}`}>India</h5>
            <ul className={`${Style.conact_info__list}`}>
              <li>{process.env.NEXT_PUBLIC_ADDRESS}</li>
              <li><a href="#" className={`${Style.css_efect}`}>{process.env.NEXT_PUBLIC_EMAI}</a></li>
              <li className={`${Style.css_efect}`}>{process.env.NEXT_PUBLIC_PHONE_NUMBER}</li>
            </ul>
          </div>
        </Col>
        <Col>
          <div>
            <h5 className={`${Style.con_heading}`}>India</h5>
            <ul className={`${Style.conact_info__list}`}>
              <li>{process.env.NEXT_PUBLIC_ADDRESS}</li>
              <li ><a href="#" className={`${Style.css_efect}`}>{process.env.NEXT_PUBLIC_EMAI}</a></li>
              <li className={`${Style.css_efect}`}>{process.env.NEXT_PUBLIC_PHONE_NUMBER}</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default Info;
