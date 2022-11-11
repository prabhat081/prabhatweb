import Style from "./title.module.css";
import {
  Container
}from "react-bootstrap";
import Link from "next/link";
const Title =()=>{
  return(
    <>
      <Container fluid className={`${Style.title_con}`}>
        <div>
          <h2 className={`${Style.title}`}>Contact us</h2>
          <ul className={`${Style.ul_con}`}>
            <li className={`${Style.li_con}`}><Link href="/" className={`${Style.a_home}`}>HOME</Link></li>
            <li className={`${Style.li_con}`}><Link href="/contact-us" className={` text-dark ${Style.a_contact}`}><span>/ CONTACT US</span></Link></li>
          </ul>
        </div>
      </Container>
    </>
  );
}
export default Title;
