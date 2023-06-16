import React from "react";
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";

import experienceImg from "../assets/images/pic2.png";

import Subtitle from "../shared/Subtitle";

import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";
import Certification from "../components/certification/certification";

const Home = () => {
  return (
    <>
      {/* ========== hero section start =========== */}
      <section className="section">
        <Container className="wrapper">
          <Row className="bg">
            <Col className="hero__text" lg="9">
              <div className="hero__content">
                <h1>
                  Discover Your Path: Your Trusted{" "}
                  <span className="highlight__home"> Travel </span>Partner
                </h1>
                <p>
                  Unlock your potential with study, work, and tourist visas.
                  Explore the world, broaden your horizons, and create lifelong
                  memories. Contact us today and let us be your guide to
                  extraordinary experiences.
                </p>
              </div>
            </Col>

            <SearchBar />
          </Row>
        </Container>
      </section>
      {/* ========== hero section start =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="services__title">We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* ============ featured tour section start ============ */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">Our featured Services</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      <section>
        <Certification></Certification>
      </section>
      {/* ============ featured tour section end ============ */}

      {/* ============ experience section start ============= */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
        
                <div className="experience__content">
                  <Subtitle subtitle={"Experience"} />

                  <h2>
                    With Our Expertise and Vast Experience We Will Serve You
                  </h2>
                  <p>
                    At Legacy Lody CS, we combine our extensive expertise and
                    years of experience to deliver exceptional service. With a
                    deep understanding of the intricacies of visa applications
                    and a commitment to personalized assistance, we are here to
                    serve you. Let us handle the complexities while you focus on
                    the excitement of your upcoming travel plans.
                  </p>
                </div>

                <div className="counter__wrapper align-items-center gap-5 ">
                  <div className="counter__box">
                    <span>312+</span>
                    <h6>Successful Applications</h6>
                  </div>
                  <div className="counter__box">
                    <span>20</span>
                    <h6>Regular clients</h6>
                  </div>
                  <div className="counter__box">
                    <span>3</span>
                    <h6>Years experience</h6>
                  </div>
                </div>
              
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img className="expimg" src={experienceImg} alt="" />
              </div>
            </Col>
           
          </Row>
        </Container>
      </section>
      {/* ============ experience section end ============= */}

      {/* ============ gallery section start =============== */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery__title">
                Visit our customers tour gallery
              </h2>
            </Col>
            <Col lg="12">
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ============ gallery section end =============== */}

      {/* ============ testimonial section start ========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Fans Love"} />
              <h2 className="testimonial__title">
                What our Customers Say about us
              </h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ============ testimonial section end ========== */}
      <Newsletter />
    </>
  );
};

export default Home;
