
import CommonSection from "../shared/CommonSection";

import "../styles/workVisa.css";

import SearchBar from "../shared/SearchBar";
import Newsletter from "../shared/Newsletter";
import { Container, Row } from "reactstrap";


import Work from "../components/Featured-tours/work";

const Tours = () => {
  

  return (
    <>
      <CommonSection title={"Work Visa"} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section className="pt-0">
       <div className="conti">
          
          <Work/>
       </div>
      </section>
      <Newsletter />
    </>
  );
};

export default Tours;



