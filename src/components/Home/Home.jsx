
import { useLoaderData } from "react-router-dom";

import Header from "./Header";
import Container from "../Container/Container";
import Banner from "./Banner";
import Testimonial from "./Testimonial";
const Home = () => {
    const brandData = useLoaderData();
    console.log(brandData);
    return (
        <>
        <Container>
        <Header/>
     <Banner/>
     <Testimonial/>
      </Container>
            </>
       
    );
};

export default Home;