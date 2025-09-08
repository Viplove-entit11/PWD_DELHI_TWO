import React from "react";
import { Menu, Dropdown, Row, Col, Space } from "antd";
import { Link } from "react-router-dom";
import { Typography, Button } from "antd";
import {
  WhatsAppOutlined,
  GlobalOutlined,
  DownOutlined,
  HomeOutlined,
  ApartmentOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

const menuData = [
  {
    key: "Home",
    label: "Home",
    icon: <GlobalOutlined />,
    path: "/", // simple parent without dropdown
  },
  {
    key: "about-us",
    label: "About Us",
    icon: <HomeOutlined />,
    image: "image.png",
    children: [
      { key: "about-us", label: "About Us", path: "/city/intro" },
      {
        key: "Organisation-Structure",
        label: "Organisation Structure",
        path: "/city/awards",
      },
      {
        key: "address-phone",
        label: "Address and Phone",
        path: "/city/holidays",
      },
    ],
  },
  {
    key: "work",
    label: "Work",
    icon: <ApartmentOutlined />,
    image: "image2.jpg",
    children: [
      {
        key: "Construction-Work",
        label: "Construction Work",
        children: [
          {
            key: "roads",
            label: "Roads Construction",
            path: "/work/roads-construction",
          },
          {
            key: "building",
            label: "Building Construction",
            path: "/work/building-construction",
          },
        ],
      },
      {
        key: "Maintanence-Work",
        label: "Maintanence Work",
        children: [
          { key: "setup", label: "Setup (PDF)", path: "/corp/setup" },
          {
            key: "roads-maintanence",
            label: "Roads Work",
            path: "/maintanence/roads-maintanence",
          },
          {
            key: "building-maintanence",
            label: "Building Work",
            path: "/maintanence/building-maintanence",
          },
        ],
      },
    ],
  },
  {
    key: "litigation",
    label: "Litigation",
    icon: <HomeOutlined />,
    image: "image.png",
    children: [
      {
        key: "aarbitration-cases",
        label: "Arbitration Cases",
        path: "/city/intro",
      },
      { key: "court-cases", label: "Court Cases", path: "/city/awards" },
      {
        key: "search-any-litigation-case",
        label: "Search Any Litigation Cases",
        path: "/city/holidays",
      },
      {
        key: "list-of-nhrc-cases",
        label: "List of NHRC Cases",
        path: "/city/holidays",
      },
    ],
  },
  {
    key: "maintenance-inventory",
    label: "Maintenance / Inventory",
    icon: <HomeOutlined />,
    image: "image.png",
    children: [
      {
        key: "roads-with-pwd",
        label: "Roads with PWD",
        path: "/maintenance/roads-with-pwd",
      },
      {
        key: "roads-temp-handed",
        label: "Roads temp handed over to other",
        path: "/maintenance/roads-temp-handed",
      },
      {
        key: "unnamed-pwd-roads",
        label: "Unnamed PWD Roads",
        path: "/maintenance/unnamed-pwd-roads",
      },
      { key: "buildings", label: "Buildings", path: "/maintenance/buildings" },
      { key: "flyovers", label: "Flyovers", path: "/maintenance/flyovers" },
      {
        key: "foot-over-bridges",
        label: "Foot Over Bridges",
        path: "/maintenance/foot-over-bridges",
      },
      { key: "subway", label: "Subway", path: "/maintenance/subway" },
      {
        key: "search-any-inventory",
        label: "Search any Inventory",
        path: "/maintenance/search-any-inventory",
      },
      {
        key: "road-on-map-1",
        label: "Road on Map - 1",
        path: "/maintenance/road-on-map-1",
      },
      {
        key: "road-on-map-2",
        label: "Road on Map - 2",
        path: "/maintenance/road-on-map-2",
      },
      {
        key: "pwd-urban-roads-manual",
        label: "PWD - Urban Roads Manual",
        path: "/maintenance/pwd-urban-roads-manual",
      },
    ],
  },
  {
    key: "civic-services",
    label: "Civic Services",
    icon: <HomeOutlined />,
    image: "image.png",
    children: [
      {
        key: "pwd-sewa-complaint",
        label: "PWD Sewa - Complaint System",
        path: "/civic/pwd-sewa-complaint",
      },
      {
        key: "community-centre-park",
        label: "Community Centre / Park",
        path: "/civic/community-centre-park",
      },
    ],
  },
  {
    key: "acts-publication",
    label: "Acts / Publication",
    icon: <HomeOutlined />,
    image: "image.png",
    children: [
      {
        key: "delhi-govt-acts-rules",
        label: "Delhi Govt. - Acts and Rules",
        path: "/acts/delhi-govt-acts-rules",
      },
      {
        key: "delhi-govt-gazette",
        label: "Delhi Govt. - Gazette Notification",
        path: "/acts/delhi-govt-gazette",
      },
      {
        key: "delhi-govt-orders",
        label: "Delhi Govt. - Orders",
        path: "/acts/delhi-govt-orders",
      },
      {
        key: "cpwd-publication",
        label: "CPWD Publication",
        path: "/acts/cpwd-publication",
      },
      {
        key: "pwd-urban-roads-manual",
        label: "PWD - Urban Roads Manual",
        path: "/acts/pwd-urban-roads-manual",
      },
      {
        key: "handbook-rehabilitation",
        label: "Handbook on Rehabilitation Works of Flyovers & Underpasses",
        path: "/acts/handbook-rehabilitation",
      },
      {
        key: "modified-policy-pdm",
        label:
          "Modified Policy for grant of Online permission through PDM Software",
        path: "/acts/modified-policy-pdm",
      },
    ],
  },
];

// Create dropdown menu content
const createDropdownMenu = (menu) => {
  const hasNested = menu.children?.some((c) => c.children);

  const menuContent = (
    <div style={{ 
      minWidth: "600px", 
      background: "#fff", 
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)"
    }}>
      <Row gutter={24}>
        <Col span={16}>
          <Row gutter={16}>
            {menu.children.map((sub) => (
              <Col span={12} key={sub.key}>
                {hasNested && sub.children ? (
                  <>
                    <h4 style={{ 
                      fontWeight: 600, 
                      marginBottom: 8,
                      color: "#1890ff"
                    }}>
                      {sub.label}
                    </h4>
                    {sub.children.map((child) => (
                      <p key={child.key} style={{ 
                        marginBottom: 6,
                        fontSize: "14px"
                      }}>
                        <Link 
                          to={child.path || "#"}
                          style={{ color: "#666", textDecoration: "none" }}
                        >
                          {child.label}
                        </Link>
                      </p>
                    ))}
                  </>
                ) : (
                  <p style={{ marginBottom: 6, fontSize: "14px" }}>
                    <Link 
                      to={sub.path || "#"}
                      style={{ color: "#666", textDecoration: "none" }}
                    >
                      {sub.label}
                    </Link>
                  </p>
                )}
              </Col>
            ))}
          </Row>
        </Col>
        <Col span={8} style={{ textAlign: "right" }}>
          {menu.image && (
            <img
              src={menu.image}
              alt="menu"
              style={{ 
                width: "100%", 
                borderRadius: "8px",
                height:"200px",
                maxHeight: "400px",
                objectFit: "cover"
              }}
            />
          )}
        </Col>
      </Row>
    </div>
  );

  return <Menu selectable={false}>{menuContent}</Menu>;
};

const Navbar = () => {
  return (
    <div
      style={{
        background: "#fff",
        borderBottom: "1px solid #eee",
        width: "100%",
      }}
    >
      {/* Top Row */}
      <Row
        align="middle"
        justify="space-between"
        style={{
          background: "#fff",
          padding: "10px 40px",
          borderBottom: "1px solid #eee",
        }}
      >
        <Col>
          <Space align="center" size="large">
            <img src="Logo.png" alt="Logo" style={{ height: "100px" }} />
            <div>
              <Title level={1} style={{ margin: 0 }}>
                Public Works Department
              </Title>
              <Text
                type="secondary"
                style={{
                  display: "block",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                Govt. of NCT of Delhi
              </Text>
              <Text
                style={{
                  display: "block",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                लोक निर्माण विभाग, दिल्ली सरकार
              </Text>
            </div>
          </Space>
        </Col>

        <Col>
          <Space direction="vertical" align="end" size="small">
            <Button
              type="primary"
              style={{ background: "#0056a3", borderRadius: "4px" }}
            >
              Helpline : 1908 (Toll Free)
            </Button>
            <Button
              type="default"
              icon={<WhatsAppOutlined />}
              style={{
                background: "#25D366",
                color: "#fff",
                fontWeight: 500,
                borderRadius: "4px",
              }}
            >
              Chat on WhatsApp
            </Button>
          </Space>
        </Col>
      </Row>

      {/* Menu Row - Fixed Layout */}
      <div style={{ 
        width: "100%", 
        overflow: "hidden",
        background: "#fff"
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
          minHeight: "50px"
        }}>
          {menuData.map((menu, index) => {
            // Simple menu item without dropdown
            if (!menu.children) {
              return (
                <div 
                  key={menu.key}
                  style={{
                    padding: "12px 16px",
                    cursor: "pointer",
                    borderRadius: "4px",
                    transition: "background-color 0.2s",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#f0f0f0";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  {menu.icon}
                  <Link 
                    to={menu.path || "#"} 
                    style={{ 
                      color: "#333", 
                      textDecoration: "none",
                      fontWeight: 500
                    }}
                  >
                    {menu.label}
                  </Link>
                </div>
              );
            }

            // Menu item with dropdown
            return (
              <Dropdown
                key={menu.key}
                overlay={createDropdownMenu(menu)}
                placement="bottomLeft"
                trigger={["hover"]}
                overlayClassName="custom-dropdown"
              >
                <div 
                  style={{
                    padding: "12px 16px",
                    cursor: "pointer",
                    borderRadius: "4px",
                    transition: "background-color 0.2s",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#f0f0f0";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  {menu.icon}
                  <span style={{ 
                    color: "#333", 
                    fontWeight: 500,
                    marginRight: "4px"
                  }}>
                    {menu.label}
                  </span>
                  <DownOutlined style={{ fontSize: "12px", color: "#666" }} />
                </div>
              </Dropdown>
            );
          })}
        </div>
      </div>

      <style jsx global>{`
        .custom-dropdown .ant-dropdown-menu {
          padding: 0;
          border: none;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        
        .custom-dropdown .ant-dropdown-menu-item:hover {
          background: transparent;
        }
      `}</style>
    </div>
  );
};

export default Navbar;