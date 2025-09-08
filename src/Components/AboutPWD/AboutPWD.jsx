import React from "react";
import { Card, Row, Col, Typography } from "antd";
import {
  ApartmentOutlined,
  TeamOutlined,
  TrophyOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";

const { Title } = Typography;

const stats = [
  {
    icon: <ApartmentOutlined style={{ fontSize: 40, color: "#1890ff" }} />,
    value: "2000+",
    label: "Infrastructure Projects",
    desc: "PWD has successfully completed thousands of projects enhancing urban infrastructure.",
  },
  {
    icon: <TeamOutlined style={{ fontSize: 40, color: "#1890ff" }} />,
    value: "3.2M+",
    label: "Citizens Served",
    desc: "Dedicated to improving the lives of millions through efficient services.",
  },
  {
    icon: <TrophyOutlined style={{ fontSize: 40, color: "#1890ff" }} />,
    value: "75+",
    label: "Years of Excellence",
    desc: "A legacy of trust, innovation, and commitment to city development.",
  },
  {
    icon: <ClockCircleOutlined style={{ fontSize: 40, color: "#1890ff" }} />,
    value: "Online",
    label: "24/7 Services",
    desc: "Providing citizens with seamless digital services round the clock.",
  },
];

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
};

const PWDAbout = () => {
  return (
    <div style={{ padding: "40px 20px", background: "#fff" }}>
      {/* Section Heading */}
      <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 50px" }}>
        <Title level={2} style={{ color: "#333", marginBottom: "15px" }}>
          About Public Works Department (PWD)
        </Title>
        <p style={{ fontSize: "16px", color: "#666", lineHeight: 1.8 }}>
          The Public Works Department (PWD) is committed to delivering
          sustainable infrastructure and efficient citizen services.
          With decades of experience, we focus on innovation, reliability,
          and continuous improvement.
        </p>
      </div>

      {/* Stats Grid */}
      <Row gutter={[24, 24]} justify="center">
        {stats.map((item, index) => (
          <Col xs={24} sm={12} md={12} lg={6} key={index}>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Card
                bordered={false}
                style={{
                  textAlign: "center",
                  borderRadius: "12px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  padding: "20px",
                  height: "100%",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                hoverable
              >
                <div style={{ marginBottom: "15px" }}>{item.icon}</div>
                <h2 style={{ color: "#1890ff", marginBottom: "5px" }}>
                  {item.value}
                </h2>
                <h4 style={{ marginBottom: "10px", color: "#333" }}>
                  {item.label}
                </h4>
                <p style={{ color: "#666", fontSize: "14px", lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PWDAbout;
