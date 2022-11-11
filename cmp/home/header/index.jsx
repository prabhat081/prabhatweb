import Style from "./header.module.css";
import{
    Container,
    Row,
    Col,
    Form,
    Button
} from "react-bootstrap";

import Image from "next/image";

const Header = ()=>{
    return (
        <>
         <Container >
            <Row className={`${Style.titleBox}`} >
                <h1 className={`${Style.title}`}>Make your business easier </h1>
            </Row>

            <Row className={`${Style.titleBox2}`} >
                <Col md="6" className={`${Style.titlecont}`} >
                    <h1 className={`${Style.title2}`}>with<span> Prabhat Web  </span> Technologies</h1>
                    <p className={`${Style.subTitle}`}>As a leading software company in India. We Provide Website designing, E-commerce website, Mobile app developement & SEO Optimization & Digital Marketing.</p>
                    <div className={`${Style.formTitleCont}`}>
                        <div className={`${Style.formTitleImage}`}>
                            <Image src="/green-curve-arrow.webp" width="54" height="51" />
                        </div>                        
                        <h5 className={`${Style.formTitle}`}>Booking is open today with profitable incentives for beginners.</h5>
                    </div>
                    <Form>
                        <div className="d-flex flex-wrap justify-content-between">
                            <Form.Control type="email" className={`${Style.formInput} mb-4` } name="email" placeholder="Email *" />
                            <Form.Select className={`${Style.formInput} mb-4`}  aria-label="Default select example">
                                <option>Select Department to email</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </div>
                        <Button className="btn-block form-control py-3 mb-4" variant="primary">Get a free consultation</Button>
                    </Form>
                </Col>
                
                <Col md="6" className={`${Style.ImageBox}`}>
                    <Image 
                        src="/home-reputable-success.webp" 
                        width={630} 
                        height={740} 
                        alt="home-reputable-success"
                    />
                </Col>
            </Row>
         </Container>
        </>
    );
}
export default Header;