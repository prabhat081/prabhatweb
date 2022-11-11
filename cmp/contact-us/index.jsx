import Navbar from "../layout/navbar";
import Footer from "../layout/footer";
import Title from "./title/index";
import Section from "./section/index";
import Info from "./info/index";
import Action from "./action/index";
const Contact = () =>{
  return (
    <>
      <Navbar />
        <Title />
        <Section />
        <Info />
        <Action />
      <Footer />
    </>
  );
}
export default Contact;
