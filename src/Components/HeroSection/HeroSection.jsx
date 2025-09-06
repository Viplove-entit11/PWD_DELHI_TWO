import React from "react";
import { Carousel, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const HeroSection = () => {
  const carouselRef = React.useRef();

  const images = [
    {
      src: "image.png",
      title: "Welcome to Surat Municipal Corporation",
      subtitle: "Empowering Citizens, Enabling Growth",
    },
    {
      src: "image2.jpg",
      title: "Smart City Initiatives",
      subtitle: "Building a sustainable future",
    },
    {
      src: "image3.jpg",
      title: "Digital Transformation",
      subtitle: "Services at your fingertips",
    },
  ];

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      {/* Carousel */}
      <Carousel
        autoplay
        dots
        infinite
        ref={carouselRef}
        effect="fade"
        autoplaySpeed={4000}
        style={{ height: "500px" }}
      >
        {images.map((item, index) => (
          <div key={index}>
            <div
              style={{
                height: "500px",
                backgroundImage: `url(${item.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
                color: "#fff",
              }}
            >
              {/* Overlay */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: "rgba(0,0,0,0.4)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 20px",
                }}
              >
                <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
                  {item.title}
                </h1>
                <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>
                  {item.subtitle}
                </p>
                <Button type="primary" size="large">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      {/* Custom Arrows */}
      <Button
        shape="circle"
        icon={<LeftOutlined />}
        onClick={() => carouselRef.current.prev()}
        style={{
          position: "absolute",
          top: "50%",
          left: "20px",
          transform: "translateY(-50%)",
          zIndex: 10,
        }}
      />
      <Button
        shape="circle"
        icon={<RightOutlined />}
        onClick={() => carouselRef.current.next()}
        style={{
          position: "absolute",
          top: "50%",
          right: "20px",
          transform: "translateY(-50%)",
          zIndex: 10,
        }}
      />
    </div>
  );
};

export default HeroSection;
