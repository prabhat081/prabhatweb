import Client from "./client";
import Header from "./header";
import Service from "./service";
import PicCarosel from "./picCarosel";
import Contact from "./contact";
import Work from "./work";
import Story from "./story";


const Home = ()=>{
    const design=(
        <>
            <Header />
            <Client />
            <Service />
            <PicCarosel />
            <Contact />
            <Work />
            <Story />
        </>
    );
    return design;
}
export default Home;