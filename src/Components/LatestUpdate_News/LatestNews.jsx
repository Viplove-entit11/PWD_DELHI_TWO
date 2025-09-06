import React from "react";
import { Carousel, Card, Button, Tag } from "antd";
import { motion } from "framer-motion";

const newsData = [
  {
    id: 1,
    type: "Tender",
    description:
      "Tender for IHBT department printing & stationary supply at SMIMER Hospital.",
    link: "#",
  },
  {
    id: 2,
    type: "Notice",
    description: "Notice for urgent maintenance work in North Zone (Katargam).",
    link: "#",
  },
  {
    id: 3,
    type: "Quotation",
    description:
      "Quotation for repairing/replacement of Multiparamonitor & ECG Machine for Medicine, Emergency & Anaesthesia department of SMIMER Hospital.",
    link: "#",
  },
  {
    id: 4,
    type: "Quotation",
    description:
      "Quotation for replacement of O2 Sensor of Ventilator Model: SLE4000 of Pediatric department of SMIMER Hospital.",
    link: "#",
  },
];

const typeColors = {
  Tender: "volcano",
  Notice: "green",
  Quotation: "blue",
};

const LatestNews = () => {
  return (
    <div style={{ padding: "40px 80px", background: "#fafafa", textAlign: "center" }}>
      <h2 style={{ fontWeight: "700", fontSize: "24px", marginBottom: "4px" }}>
        NEWS AND UPDATES
      </h2>
      <p style={{ color: "#666", marginBottom: "50px", fontSize: "15px" }}>
        News, Updates, Recruitment and Quotations
      </p>

      <Carousel
        autoplay
        autoplaySpeed={4000}
        dots
        slidesToShow={3}
        slidesToScroll={1}
        adaptiveHeight
        arrows={false}
        responsive={[
          { breakpoint: 1024, settings: { slidesToShow: 2 } },
          { breakpoint: 768, settings: { slidesToShow: 1 } },
        ]}
      >
        {newsData.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            style={{ padding: "10px",}}
          >
            <Card
              bordered={false}
              style={{
                borderRadius: "12px",
                minHeight: "200px",
                padding: "16px",
                background: "#fff",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                margin:"0px 20px"
              }}
              hoverable
            >
              <Tag
                color={typeColors[item.type] || "default"}
                style={{
                  marginBottom: "12px",
                  borderRadius: "6px",
                  fontWeight: "500",
                  fontSize: "13px",
                }}
              >
                {item.type}
              </Tag>
              <p
                style={{
                  minHeight: "80px",
                  color: "#333",
                  fontSize: "15px",
                  lineHeight: "1.6",
                  marginBottom: "12px",
                }}
              >
                {item.description}
              </p>
              <Button type="link" href={item.link} style={{ padding: 0 }}>
                View in detail &gt;
              </Button>
            </Card>
          </motion.div>
        ))}
      </Carousel>
    </div>
  );
};

export default LatestNews;
