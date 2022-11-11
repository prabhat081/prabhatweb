import Style from "./service.module.css";
import {
    Container,
    Row,
    Col,
    Card
} from "react-bootstrap";
import MicIcon from '@mui/icons-material/Mic';
import data from "./serv.json";

const ServData = (data)=>{
    return (
        <>
        <Col md="4" className={`${Style.myCard}`}>                   
            <Card.Body className="text-center p-4">
                <div className={`${Style.iconBox} m-auto`}>
                    <Image src={data.allData.path} alt={data.allData.path} width={100} height={104} />
                </div>
                <Card.Title className={`${Style.cardTitle} py-4`}>{data.allData.title}</Card.Title>
                <Card.Text>{data.allData.desc}
                </Card.Text>
            </Card.Body>
        </Col>
        </>
    );
}

import Image from "next/image";
const Service =()=>{
    return (
        <>
            <Container className="p-5">
                <div className={`${Style.headerText} text-center py-4`} >
                    <h2>Our Software Application </h2>
                    <h2 style={{color:'#086AD8'}}>Development Services</h2>
                </div>
                <Row>
                    {
                        data.map((item,index)=><ServData allData={item} key={index} />)
                    }  
                </Row>
                <Row className={`mb-5`}>
                    <div className="col-md-7 border m-auto p-4 rounded mt-5" style={{background:'#E7EDFA'}}>
                        <div  className={`${Style.mainMsg}`}>
                            <div className={`shadow d-flex align-items-center justify-content-center ${Style.msgDiv}`}>
                                
                                <MicIcon sx={{fontSize:'30px'}} className="text-primary"/>
                            </div>
                            <div className="d-flex flex-wrap justify-content-between align-items-center">                
                                <h6 style={{fontFamily:"sans-serif", fontSize:"18px", fontWeight:"bold"}}>
                                    Cheers to the work that comes from <br />trusted service providers in time.</h6>
                                <button className="btn btn-primary px-4">Let's Talk</button>
                            </div>
                        </div>
                    </div>
                </Row>
                    <h1 className={`text-center ${Style.fonth1}`}>We stand out for some reasons.</h1>
            </Container>
        </>
    );
}

export default Service;