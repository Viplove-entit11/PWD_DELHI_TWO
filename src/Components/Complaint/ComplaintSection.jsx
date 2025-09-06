import React from "react";
import { Card, Row, Col, Typography } from "antd";
import {
  PhoneOutlined,
  WhatsAppOutlined,
  MobileOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { div } from "framer-motion/client";

const { Title, Text } = Typography;

const ComplaintSection = () => {
  const options = [
    {
      title: "Toll Free Number",
      value: "1800 123 8000",
      icon: <PhoneOutlined style={{ fontSize: "36px", color: "#1677ff" }} />,
    },
    {
      title: "WhatsApp",
      value: "63599 30020",
      icon: <WhatsAppOutlined style={{ fontSize: "36px", color: "#25D366" }} />,
    },
    {
      title: "Surat Municipal Corporation Mobile App",
      value: "",
      icon: <MobileOutlined style={{ fontSize: "36px", color: "#555" }} />,
    },
    {
      title: "Surat Municipal Corporation Website",
      value: "",
      icon: <GlobalOutlined style={{ fontSize: "36px", color: "#1677ff" }} />,
    },
  ];

  return (
    <div  style={{
         
          background: "#f9f9f9",
        }}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 24px",
        //   background: "#f9f9f9",
        }}
      >
        <Title
          level={3}
          style={{
            textAlign: "center",
            marginBottom: "50px",
            fontWeight: "bold",
          }}
        >
          REGISTER YOUR COMPLAINT WITH EASE
        </Title>

        <Row gutter={[24, 24]} justify="center">
          {options.map((item, index) => (
            <Col xs={24} sm={12} md={6} key={index}>
              <Card
                hoverable
                bordered={false}
                style={{
                  borderRadius: "12px",
                  textAlign: "center",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  height: "100%",
                }}
              >
                <div style={{ marginBottom: "15px" }}>{item.icon}</div>
                <Text strong style={{ fontSize: "16px", display: "block" }}>
                  {item.title}
                </Text>
                {item.value && (
                  <Text style={{ fontSize: "15px", color: "#333" }}>
                    {item.value}
                  </Text>
                )}
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default ComplaintSection;
