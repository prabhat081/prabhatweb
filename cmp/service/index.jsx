import NavbarCont from '../layout/navbar';
import ItService from './itservice';
import Work from './work';
import Rating from './rating';
import Footer from '../layout/footer';

const Service = ()=>{
    const design = (
        <>
          <NavbarCont  />
          <ItService />
          <Work />
          <Rating />
          <Footer />
        </>
    );
    return design;
}
export default Service;
