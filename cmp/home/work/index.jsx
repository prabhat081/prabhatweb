import { Container,Row } from "react-bootstrap";
import Style from "./work.module.css";

import data from "./workData.json";

const AllData=(data)=>{

    const bgcolor = {
        background : data.allItems.bgColor         
    }

    const idcolor ={
        color : data.allItems.idColor
    }

    const design=(
        <>
        <div className="col-md-3 px-3 mb-2" >
            <div className={`px-4 py-3 rounded ${Style.content}`} style={bgcolor}>
                <h6 style={idcolor}>{data.allItems.id}</h6>
                <h5>{data.allItems.title}</h5>
                <p>{data.allItems.desc}</p>
            </div>
        </div>
        </>
    );
    return design;
}

const CmpWork =()=>{
    return (
        <>
            <Container fluid className="my-md-5 px-md-5">
                <h1 className={`${Style.title} text-center`}>what company can do?</h1>
                <Row className="d-flex justify-content-between">
                    {
                        data.map((item,index)=><AllData key={index} allItems={item} />)
                    }                     
                </Row>
            </Container>
        </>
    );
}

export default CmpWork;