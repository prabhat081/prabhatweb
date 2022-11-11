import Style from "./client.module.css";
import {
    Col,
    Row,
    Container 
} from "react-bootstrap";
import Image from "next/image";
import Person2Icon from '@mui/icons-material/Person2';
import PersonIcon from '@mui/icons-material/Person';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
const Client =()=>{
    return (
        <>
            <Container className="my-5">
                <div className="col-md-7 m-auto text-center py-4">
                    <h5 className={`${Style.title}`}>
                    Step forward to become one of <span>49,494</span> successful clients of nodewap and get in the front line for the most wonderful presentation.
                    </h5>
                </div>
            </Container>

            <Container className="px-4 mb-4">
                <Row>
                    <Col md="6">
                        <Image src="/home-reputable-success-about-image.webp" alt="home-reputable-success-about-image" height={420} width={650} />
                    </Col>
                    <Col md="6">
                        <p className={`${Style.desc}`}>
                        Prabhat Web Technolgoy transform businesses with adaptable and powerful digital solutions that meet today’s needs and open up new opportunities for tomorrow.
                        </p>
                        <h6>Prabhat Web Technolgoy</h6>
                        <small className="text-info">/ Web design </small>
                    </Col>
                </Row>
            </Container>

            <Container fluid>
                <Row style={{backgroundColor:'#F8F8F8'}} className="py-5 px-md-5 ">
                    <Col md="4" className="my-3">
                        <div className="d-flex">
                            <div className={`${Style.iconBox} d-flex justify-content-center align-items-center shadow`} style={{marginRight:"20px"}}>
                                <Person2Icon className={Style.myIcon} />
                            </div>
                            <div className={`${Style.iconBoxText}`}>
                                <div><h2>1790</h2></div>
                                <div><p>HAPPY CLIENTS</p></div>
                            </div>
                        </div>
                    </Col>

                    <Col md="4" className="my-3">
                        <div className="d-flex">
                            <div className={`${Style.iconBox} d-flex justify-content-center align-items-center shadow`} style={{marginRight:"20px"}}>
                            <FolderOpenIcon className={Style.myIcon} />
                            </div>
                            <div className={`${Style.iconBoxText}`}>
                                <div><h2>920</h2></div>
                                <div><p>FINISHED PROJECTS</p></div>
                            </div>
                        </div>
                    </Col>

                    <Col md="4" className="my-3">
                        <div className="d-flex">
                            <div className={`${Style.iconBox} d-flex justify-content-center align-items-center shadow`} style={{marginRight:"20px"}}>
                                <PersonIcon className={Style.myIcon} />
                            </div>
                            <div className={`${Style.iconBoxText}`}>
                                <div><h2>245</h2></div>
                                <div><p>EXPERIENCED EXPERTS</p></div>
                            </div>
                        </div>
                    </Col>
                    
                </Row>
            </Container>
        </>
    );
}
export default Client;