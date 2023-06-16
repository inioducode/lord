import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";

import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";


const servicesData = [
  {
    imgUrl: weatherImg,
    title: "Visas",
    desc: "Smooth visa services for seamless travel. Apply now!",
    book: "Apply Now",
    href: "https://wa.me/+2347064845593?text=i%20want%20to%20apply%20for%20visa",
  },
  {
    imgUrl: guideImg,
    title: "Translation of Document ",
    desc: " Accurate document translation and legalization",
    book: "Apply Now",
    href: "https://wa.me/+2347064845593?text=i%20want%20to%20translate%20and%20legalize%20my%20document",
   
  },
  {
    imgUrl: customizationImg,
    title: "Medical Visa",
    desc: "Personalized assistance for medical travel.",
    book: "Apply Now",
    href: "https://wa.me/+2347064845593?text=i%20want%20to%20apply%20for%20medical%20visa",
  },
];

const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg="3" md="6" sm="12" className="mb-4" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
