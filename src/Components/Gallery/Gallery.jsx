import React from "react";
import { Row, Col, Card, Typography, Button } from "antd";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // for navigation

const { Title, Text } = Typography;

const images = [
  "cons1.jpg",
  "cons2.jpg",
  "cons3.jpg",
  "cons4.jpg",
  "cons2.jpg",
  "cons1.jpg",
];

const Gallery = () => {
  return (
    <div style={{ padding: "60px 20px", background: "#fff" }}>
      {/* Section Header */}
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <Title level={2} style={{ marginBottom: 8 }}>
          Photo Gallery
        </Title>
        <Text type="secondary">
          Explore our latest moments and important events captured
        </Text>
      </div>

      {/* Image Grid */}
      <Row gutter={[24, 24]} justify="center">
        {images.slice(0, 6).map((img, index) => (
          <Col key={index} xs={24} sm={12} md={8}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
             <Card
  hoverable
  bodyStyle={{ padding: 0 }} // 🔑 removes default padding/extra space
  cover={
    <img
      src={img}
      alt={`Gallery ${index + 1}`}
      style={{
        height: "220px",
        objectFit: "cover",
        borderRadius: 12,
      }}
    />
  }
  style={{
    borderRadius: 12,
    overflow: "hidden",
    boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
  }}
/>

            </motion.div>
          </Col>
        ))}
      </Row>

      {/* View Full Gallery Button */}
      <div style={{ textAlign: "center", marginTop: 40 }}>
        <Link to="/gallery">
          <Button type="primary" size="large">
            View Full Gallery
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Gallery;
