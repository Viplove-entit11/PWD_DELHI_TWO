import React from 'react';
import { Row, Col, Typography, Space, Divider } from 'antd';
import { 
  FacebookOutlined,
  YoutubeOutlined,
  TwitterOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  ClockCircleOutlined
} from '@ant-design/icons';

const { Title, Text, Link } = Typography;

const Footer = () => {
  const quickLinks = [
    'About Us',
    'Services', 
    'Tenders',
    'Projects',
    'Careers',
    'Contact'
  ];

  const ourServices = [
    'Street Light Maintenance',
    'Road Construction',
    'Building Projects',
    'Bridge Development',
    'Public Facilities',
    'Emergency Services'
  ];

  const governmentLinks = [
    'Delhi Government',
    'Chief Minister Office',
    'RTI Portal',
    'Citizen Charter',
    'Grievance Portal',
    'Transparency'
  ];

  const footerLinks = [
    'Privacy Policy',
    'Terms of Use',
    'Accessibility',
    'Sitemap'
  ];

  return (
    <footer style={{
      // backgroundColor: '#0846aa',
      backgroundColor: 'black',
      color: 'white',
      padding: '60px 0 0 0'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px'
      }}>
        <Row gutter={[32, 32]}>
          {/* PWD Delhi Section */}
          <Col xs={24} sm={12} md={6} lg={6}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '12px'
                }}>
                  <Text style={{ 
                    color: '#0846aa', 
                    fontWeight: 'bold', 
                    fontSize: '16px' 
                  }}>PWD</Text>
                </div>
                <div>
                  <Title level={4} style={{ 
                    color: 'white', 
                    margin: 0,
                    fontSize: '18px',
                    fontWeight: 'bold'
                  }}>
                    PWD Delhi
                  </Title>
                  <Text style={{ 
                    color: 'rgba(255,255,255,0.8)', 
                    fontSize: '12px',
                    display: 'block'
                  }}>
                    Govt. of NCT of Delhi
                  </Text>
                </div>
              </div>
              
              <Text style={{ 
                color: 'rgba(255,255,255,0.9)', 
                fontSize: '14px',
                lineHeight: '1.6',
                display: 'block',
                marginBottom: '20px'
              }}>
                Public Works Department is Delhi's premier agency 
                for infrastructure development, committed to 
                building a better tomorrow for all citizens.
              </Text>

              <Space size={16}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}>
                  <FacebookOutlined style={{ color: 'white', fontSize: '16px' }} />
                </div>
                <div style={{
                  width: '36px',
                  height: '36px',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}>
                  <YoutubeOutlined style={{ color: 'white', fontSize: '16px' }} />
                </div>
                <div style={{
                  width: '36px',
                  height: '36px',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}>
                  <TwitterOutlined style={{ color: 'white', fontSize: '16px' }} />
                </div>
              </Space>
            </div>
          </Col>

          {/* Quick Links */}
          <Col xs={24} sm={12} md={6} lg={6}>
            <Title level={4} style={{ 
              color: 'white', 
              fontSize: '18px',
              fontWeight: 'bold',
              marginBottom: '20px'
            }}>
              Quick Links
            </Title>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {quickLinks.map((link, index) => (
                <Link 
                  key={index}
                  style={{ 
                    color: 'rgba(255,255,255,0.9)', 
                    fontSize: '14px',
                    textDecoration: 'none'
                  }}
                  hover={{ color: 'white' }}
                >
                  {link}
                </Link>
              ))}
            </div>
          </Col>

          {/* Our Services */}
          <Col xs={24} sm={12} md={6} lg={6}>
            <Title level={4} style={{ 
              color: 'white', 
              fontSize: '18px',
              fontWeight: 'bold',
              marginBottom: '20px'
            }}>
              Our Services
            </Title>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {ourServices.map((service, index) => (
                <Link 
                  key={index}
                  style={{ 
                    color: 'rgba(255,255,255,0.9)', 
                    fontSize: '14px',
                    textDecoration: 'none'
                  }}
                  hover={{ color: 'white' }}
                >
                  {service}
                </Link>
              ))}
            </div>
          </Col>

          {/* Contact Information */}
          <Col xs={24} sm={12} md={6} lg={6}>
            <Title level={4} style={{ 
              color: 'white', 
              fontSize: '18px',
              fontWeight: 'bold',
              marginBottom: '20px'
            }}>
              Contact Information
            </Title>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <EnvironmentOutlined style={{ color: 'white', fontSize: '16px', marginTop: '2px' }} />
                <div>
                  <Text style={{ 
                    color: 'rgba(255,255,255,0.9)', 
                    fontSize: '14px',
                    lineHeight: '1.5'
                  }}>
                    Public Works Department<br/>
                    Government of NCT of Delhi<br/>
                    New Delhi, India
                  </Text>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <PhoneOutlined style={{ color: 'white', fontSize: '16px' }} />
                <Text style={{ 
                  color: 'rgba(255,255,255,0.9)', 
                  fontSize: '14px'
                }}>
                  1908 (Toll Free)<br/>
                  24/7 Helpline
                </Text>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <MailOutlined style={{ color: 'white', fontSize: '16px' }} />
                <Link style={{ 
                  color: 'rgba(255,255,255,0.9)', 
                  fontSize: '14px'
                }}>
                  info@pwddelhi.gov.in
                </Link>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <ClockCircleOutlined style={{ color: 'white', fontSize: '16px', marginTop: '2px' }} />
                <Text style={{ 
                  color: 'rgba(255,255,255,0.9)', 
                  fontSize: '14px',
                  lineHeight: '1.5'
                }}>
                  Mon - Fri: 9:00 AM - 6:00 PM<br/>
                  Sat: 9:00 AM - 1:00 PM
                </Text>
              </div>
            </div>
          </Col>
        </Row>

        {/* Important Government Links */}
        <div style={{ 
          marginTop: '50px',
          paddingTop: '30px',
          borderTop: '1px solid rgba(255,255,255,0.2)'
        }}>
          <Title level={4} style={{ 
            color: 'white', 
            fontSize: '18px',
            fontWeight: 'bold',
            marginBottom: '20px',
            textAlign: 'center'
          }}>
            Important Government Links
          </Title>
          
          <Row gutter={[24, 16]} justify="center">
            {governmentLinks.map((link, index) => (
              <Col key={index} xs={12} sm={8} md={4} lg={4}>
                <div style={{ textAlign: 'center' }}>
                  <Link style={{ 
                    color: 'rgba(255,255,255,0.9)', 
                    fontSize: '14px',
                    textDecoration: 'none'
                  }}>
                    {link}
                  </Link>
                </div>
              </Col>
            ))}
          </Row>
        </div>

        {/* Bottom Footer */}
        <div style={{
          marginTop: '40px',
          paddingTop: '20px',
          paddingBottom: '20px',
          borderTop: '1px solid rgba(255,255,255,0.2)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <Text style={{ 
            color: 'rgba(255,255,255,0.8)', 
            fontSize: '13px'
          }}>
            © 2024 Public Works Department, Government of NCT of Delhi. All rights reserved.
          </Text>
          
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {footerLinks.map((link, index) => (
              <Link 
                key={index}
                style={{ 
                  color: 'rgba(255,255,255,0.8)', 
                  fontSize: '13px',
                  textDecoration: 'none'
                }}
              >
                {link}
              </Link>
            ))}
            {/* <div style={{
              backgroundColor: '#ff4d4f',
              color: 'white',
              padding: '4px 8px',
              borderRadius: '4px',
              fontSize: '11px',
              fontWeight: 'bold'
            }}>
              Get on NJ Lifestyle
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;