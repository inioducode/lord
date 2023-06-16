
import CommonSection from "../shared/CommonSection";

import "../styles/tour.css";

import SearchBar from "../shared/SearchBar";
import Newsletter from "../shared/Newsletter";
import { Container, Row} from "reactstrap";


import Work from "../components/Featured-tours/work";

const OtherServices = () => {
  

  return (
    <>
      <CommonSection title={"Other Services"} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          
          <Work/>
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default OtherServices;



