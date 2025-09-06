import React from "react";
import { Card, Row, Col, Typography, Button, Badge } from "antd";
import {
  FileTextOutlined,
  ExclamationCircleOutlined,
  CalendarOutlined,
  BellOutlined,
  CameraOutlined,
  ClockCircleOutlined,
  TeamOutlined,
  BulbOutlined,
  CarOutlined,
  ToolOutlined,
  ArrowRightOutlined,
  BankOutlined,
} from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;

const Services = () => {
  const quickAccessServices = [
    {
      icon: <FileTextOutlined style={{ fontSize: "32px", color: "#1890ff" }} />,
      title: "Circular & Orders",
      description: "Access latest notifications and official orders",
      color: "#1890ff",
    },
    {
      icon: (
        <ExclamationCircleOutlined
          style={{ fontSize: "32px", color: "#ff4d4f" }}
        />
      ),
      title: "Register Complaint",
      description: "File complaints for infrastructure issues",
      color: "#ff4d4f",
    },
    {
      icon: <CalendarOutlined style={{ fontSize: "32px", color: "#52c41a" }} />,
      title: "Venue Booking",
      description: "Book government venues and facilities",
      color: "#52c41a",
    },
    {
      icon: <BellOutlined style={{ fontSize: "32px", color: "#722ed1" }} />,
      title: "Active Tenders",
      description: "View and participate in ongoing tenders",
      color: "#722ed1",
    },
    {
      icon: <CameraOutlined style={{ fontSize: "32px", color: "#fa8c16" }} />,
      title: "CCTV Regulation",
      description: "CCTV installation guidelines and approvals",
      color: "#fa8c16",
    },
    {
      icon: (
        <ClockCircleOutlined style={{ fontSize: "32px", color: "#fadb14" }} />
      ),
      title: "Awareness",
      description: "Public awareness and safety information",
      color: "#fadb14",
    },
    {
      icon: <TeamOutlined style={{ fontSize: "32px", color: "#13c2c2" }} />,
      title: "WHO / COVID-19",
      description: "Health guidelines and safety protocols",
      color: "#13c2c2",
    },
    {
      icon: <BankOutlined style={{ fontSize: "32px", color: "#722ed1" }} />,
      title: "Judiciary Works",
      description: "Courtyard serious infrastructure projects",
      color: "#722ed1",
    },
  ];

  const coreServices = [
    {
      icon: <BulbOutlined style={{ fontSize: "24px", color: "#fff" }} />,
      title: "Street Light Inspection",
      description:
        "Comprehensive street lighting solutions and maintenance services",
      badge: null,
      badgeColor: "#fa8c16",
      bgColor: "#0846aa",
    },
    {
      icon: <ToolOutlined style={{ fontSize: "24px", color: "#fff" }} />,
      title: "PWD Seva",
      description: "Comprehensive public service portal for all PWD services",
      badge: null,
      badgeColor: "#fa8c16",
      bgColor: "#0846aa",
    },
    {
      icon: (
        <ExclamationCircleOutlined
          style={{ fontSize: "24px", color: "#666" }}
        />
      ),
      title: "View Complaint",
      description: "Track status of your registered complaints",
      badge: null,
      bgColor: "#f5f5f5",
    },
    {
      icon: <FileTextOutlined style={{ fontSize: "24px", color: "#666" }} />,
      title: "Nodal Officers",
      description: "Access contact details of nodal officers",
      badge: null,
      bgColor: "#f5f5f5",
    },
    {
      icon: <CarOutlined style={{ fontSize: "24px", color: "#666" }} />,
      title: "Road Safety Matters",
      description: "Road safety initiatives and guidelines",
      badge: null,
      bgColor: "#f5f5f5",
    },
    {
      icon: <ToolOutlined style={{ fontSize: "24px", color: "#666" }} />,
      title: "Desilting of Drain",
      description: "Drainage maintenance and cleaning services",
      badge: null,
      bgColor: "#f5f5f5",
    },
  ];

  return (
    <div
      style={
        {
          // backgroundColor: '#f8f9fa'
        }
      }
    >
      {/* Header Section */}

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 24px",
        }}
      >
        <div
          style={{
            // backgroundColor: '#fff',
            padding: "60px 24px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            <Title
              level={2}
              style={{
                color: "#333",
                fontSize: "36px",
                fontWeight: "bold",
                marginBottom: "16px",
              }}
            >
              Our Services
            </Title>
            <Paragraph
              style={{
                fontSize: "16px",
                color: "#666",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Access comprehensive public works services designed to serve
              Delhi's citizens efficiently.
            </Paragraph>
          </div>
        </div>
        <div>
          <Row gutter={[24, 24]}>
            {coreServices.map((service, index) => (
              <Col xs={24} sm={12} md={12} lg={8} key={index}>
                <Card
                  hoverable
                  style={{
                    borderRadius: "12px",
                    border: "1px solid #f0f0f0",
                    height: "180px",
                    position: "relative",
                  }}
                  bodyStyle={{
                    padding: "24px",
                    height: "100%",
                    backgroundColor: service.bgColor,
                    borderRadius: "12px",
                  }}
                >
                  {service.badge && (
                    <Badge
                      count={service.badge}
                      style={{
                        backgroundColor: service.badgeColor,
                        position: "absolute",
                        top: "12px",
                        right: "12px",
                        zIndex: 1,
                      }}
                    />
                  )}

                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      marginBottom: "16px",
                    }}
                  >
                    <div
                      style={{
                        marginRight: "12px",
                        marginTop: "4px",
                      }}
                    >
                      {service.icon}
                    </div>

                    <div style={{ flex: 1 }}>
                      <Title
                        level={5}
                        style={{
                          color:
                            service.bgColor === "#f5f5f5" ? "#333" : "#fff",
                          marginBottom: "8px",
                          fontSize: "16px",
                          fontWeight: "600",
                        }}
                      >
                        {service.title}
                      </Title>

                      <Text
                        style={{
                          color:
                            service.bgColor === "#f5f5f5"
                              ? "#666"
                              : "rgba(255,255,255,0.9)",
                          fontSize: "13px",
                          lineHeight: "1.4",
                          display: "block",
                          marginBottom: "16px",
                        }}
                      >
                        {service.description}
                      </Text>
                    </div>
                  </div>

                  <Button
                    type={service.bgColor === "#f5f5f5" ? "default" : "primary"}
                    style={{
                      backgroundColor:
                        service.bgColor === "#f5f5f5"
                          ? "#fff"
                          : "rgba(255,255,255,0.2)",
                      borderColor:
                        service.bgColor === "#f5f5f5"
                          ? "#d9d9d9"
                          : "rgba(255,255,255,0.3)",
                      color: service.bgColor === "#f5f5f5" ? "#333" : "#fff",
                      fontSize: "13px",
                      fontWeight: "500",
                      borderRadius: "6px",
                    }}
                    icon={<ArrowRightOutlined />}
                    iconPosition="end"
                  >
                    Learn More
                  </Button>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        {/* Quick Access Services */}
        <div style={{ margin: "80px 0px" }}>
          <Title
            level={3}
            style={{
              textAlign: "center",
              color: "#333",
              fontSize: "28px",
              marginBottom: "50px",
            }}
          >
            Quick Access Services
          </Title>

          <Row gutter={[24, 24]}>
            {quickAccessServices.map((service, index) => (
              <Col xs={24} sm={12} md={12} lg={6} key={index}>
                <Card
                  hoverable
                  style={{
                    textAlign: "center",
                    borderRadius: "12px",
                    border: "1px solid #f0f0f0",
                    height: "220px",
                  }}
                  bodyStyle={{
                    padding: "24px 16px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div
                      style={{
                        marginBottom: "16px",
                      }}
                    >
                      {service.icon}
                    </div>

                    <Title
                      level={5}
                      style={{
                        color: "#333",
                        marginBottom: "8px",
                        fontSize: "16px",
                        fontWeight: "600",
                      }}
                    >
                      {service.title}
                    </Title>

                    <Text
                      style={{
                        color: "#666",
                        fontSize: "13px",
                        lineHeight: "1.4",
                        display: "block",
                        marginBottom: "16px",
                      }}
                    >
                      {service.description}
                    </Text>
                  </div>

                  <Button
                    type="link"
                    style={{
                      color: service.color,
                      padding: 0,
                      fontSize: "13px",
                      fontWeight: "500",
                    }}
                    icon={<ArrowRightOutlined />}
                    iconPosition="end"
                  >
                    Access Service
                  </Button>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* Core PWD Services */}
      </div>
    </div>
  );
};

export default Services;
