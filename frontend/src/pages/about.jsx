import React from "react";
import "../styles/about.css";
import { Container, Row, Col } from "reactstrap";

function About() {
  return (
    <section>
      <Container>
        <Row>
          <div className="first__page">
            <div className="textf">
              <div className="foundersname">
                <div className="Name">
                  {" "}
                  <h3>Melody Anthony </h3>
                </div>
                <div className="title">
                  {" "}
                  <h1> The Founder</h1>{" "}
                </div>
              </div>
            </div>

            <div className="picsf">
              <div className="founderspics"></div>
            </div>
          </div>

          <Row>
            <Col lg="6" className="yellowbox">
              <Col lg="6">
                <div className="yellow__text">
                  <p>
                    {" "}
                    About Me - CEO of Legacy Agency Welcome to Legacy Agency!
                    I'm Melody Anthony, the CEO of our company. We specialize in
                    visa services for tourism, study, and work.{" "}
                  </p>{" "}
                  <p>
                    {" "}
                    At Legacy Agency, we simplify the visa application process,
                    helping individuals pursue their dreams of exploring new
                    destinations, studying abroad, or finding work
                    opportunities.{" "}
                  </p>{" "}
                  <p>
                    {" "}
                    Our experienced team stays up-to-date with immigration
                    policies to provide accurate guidance. We offer personalized
                    service, tailoring our support to your unique needs and
                    aspirations. Transparency, professionalism, and integrity
                    are our core values.{" "}
                  </p>
                </div>
              </Col>
              <Col className="th" lg="6">
                <div className="yellow__text">
                  <p>
                    <p>
                      We aim to build long-lasting relationships and create a
                      positive experience for every client. Whether you're
                      planning a vacation, studying abroad, or seeking work
                      opportunities, Legacy Agency is here to make your visa
                      application smooth and successful.{" "}
                    </p>
                    <p>
                      Thank you for considering Legacy Agency for your visa
                      needs. We look forward to being a part of your journey.
                      Best regards, Melody Anthony CEO, Legacy Agency
                    </p>
                  </p>
                </div>
              </Col>
            </Col>
          </Row>
          <div className="follow__us"></div>
          <div className="FAQ">
            <div>
              <h2>
                <div id="line"></div>
                FAQ<div id="line"></div>
              </h2>
              <p>
                <span> What services does your company provide? </span> Our
                company offers a range of services including visa assistance for
                tourism, study, and work purposes. We specialize in helping
                individuals navigate the visa application process and provide
                guidance on documentation, requirements, and immigration
                policies.
              </p>
              <p>
                {" "}
                <span>
                  {" "}
                  How long does it take to process a visa application?
                </span>{" "}
                The processing time for a visa application can vary depending on
                various factors such as the type of visa, the country of
                application, and the specific requirements involved. It is
                recommended to check with our team or refer to the respective
                embassy or consulate for estimated processing times.
              </p>
              <p>
                {" "}
                <span>
                  {" "}
                  What documents are required for a visa application?
                </span>{" "}
                The required documents for a visa application can vary based on
                the type of visa and the destination country. Generally, common
                documents include a valid passport, completed application forms,
                proof of travel or study/work plans, financial statements, and
                sometimes medical or background check reports. Our team will
                guide you through the specific document requirements for your
                visa application.{" "}
              </p>

              <p>
                <span>
                  {" "}
                  Can you assist with visa applications for multiple countries?
                </span>
                Yes, we can assist with visa applications for multiple
                countries. Our team is knowledgeable about various immigration
                procedures and requirements worldwide. We will provide guidance
                and support based on your specific travel or study/work plans.{" "}
              </p>

              <p>
                <span>
                  Q: How much does your visa assistance service cost?{" "}
                </span>{" "}
                A: Our service fees vary depending on the type of visa and the
                complexity of the application. We offer competitive pricing and
                transparent fee structures. For detailed information about the
                costs involved, please reach out to our team who will provide
                you with a tailored quote.{" "}
              </p>

              <p>
                <span>What if my visa application is rejected?</span> Visa
                rejections can happen for various reasons, including incomplete
                documentation or not meeting specific requirements. In such
                cases, our team will work closely with you to identify the
                reason for rejection and provide guidance on how to rectify the
                situation. We will assist you in preparing a strong application
                for reconsideration, if applicable.{" "}
              </p>

              <p>
                <span>
                  Can you provide assistance with travel arrangements and
                  accommodations?
                </span>{" "}
                While our primary focus is on visa assistance, we can offer
                recommendations and general guidance regarding travel
                arrangements and accommodations. However, for detailed travel
                arrangements and bookings, we recommend consulting with travel
                agencies or specialized booking platforms.{" "}
              </p>

              <p>
                If you have any further questions or need additional
                information, please feel free to reach out to our team. We are
                here to help you throughout the visa application process.
              </p>
            </div>
          </div>
          <div className="pics">
            <div className="space__one">
              <div className="pic__one"></div>
              <div className="pic__two"></div>
            </div>
            <div className="space__two">
              <div className="pic__one"></div>
              <div className="pic__two"></div>
            </div>
          </div>
          <div className="design"></div>
        </Row>
      </Container>
    </section>
  );
}

export default About;
