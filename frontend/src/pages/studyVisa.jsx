import React, { useState, useEffect } from "react";
import CommonSection from "../shared/CommonSection";

import "../styles/tour.css";
import TourCard from "../shared/TourCard";
import SearchBar from "../shared/SearchBar";
import Newsletter from "../shared/Newsletter";
import { Container, Row, Col } from "reactstrap";

import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";
import Study from "../components/Featured-tours/study";

const StudyVisa = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const {
    data: tours,
    loading,
    error,
  } = useFetch(`${BASE_URL}/tours?page=${page}`);
  const { data: tourCount } = useFetch(`${BASE_URL}/tours/search/studyvisa`);

  useEffect(() => {
    const pages = Math.ceil(tourCount / 8);
    setPageCount(pages);
    window.scrollTo(0, 0);
  }, [page, tourCount, tours]);

  return (
    <>
      <CommonSection title={"Study Visas"} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section className="pt-0">
       
          <div className="conti">
            <Study/>
            </div>
            
        
      </section>
      <Newsletter />
    </>
  );
};

export default StudyVisa;
