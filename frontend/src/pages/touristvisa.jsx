
import CommonSection from "../shared/CommonSection";

import "../styles/workVisa.css";

import SearchBar from "../shared/SearchBar";
import Newsletter from "../shared/Newsletter";
import { Container, Row, } from "reactstrap";
import Tours from "../components/Featured-tours/tour";

const TouristVisa = () => {
  

  return (
    <>
      <CommonSection title={"Tourist Visa"} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section className="pt-0">
       <div className="conti">
          
          <Tours/>
       </div>
      </section>
      <Newsletter />
    </>
  );
};

export default TouristVisa;



