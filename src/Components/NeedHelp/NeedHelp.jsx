import React from 'react';
import { Button, Typography, Row, Col } from 'antd';
import { PhoneOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const NeedHelp = () => {
  return (
    <div style={{
      padding: '80px 24px',
      backgroundColor: '#f8f9fa'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          backgroundColor: '#0846aa',
          borderRadius: '16px',
          padding: '48px 40px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Background Pattern */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M20 20c0-11.046-8.954-20-20-20v20h20z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            opacity: 0.1
          }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <Row justify="center">
              <Col xs={24} md={16} lg={12}>
                {/* Main Title */}
                <Title level={2} style={{
                  color: 'white',
                  fontSize: '28px',
                  fontWeight: 'bold',
                  marginBottom: '16px',
                  lineHeight: '1.3'
                }}>
                  Need Help with PWD Services?
                </Title>

                {/* Description */}
                <Text style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: '16px',
                  lineHeight: '1.6',
                  display: 'block',
                  marginBottom: '32px',
                  maxWidth: '500px',
                  margin: '0 auto 32px'
                }}>
                  Our dedicated support team is available to assist you with any queries regarding PWD services
                  and infrastructure projects.
                </Text>

                {/* Action Button */}
                <Button 
                  type="primary"
                  size="large"
                  icon={<PhoneOutlined />}
                  style={{
                    backgroundColor: 'white',
                    borderColor: 'white',
                    color: '#0846aa',
                    fontWeight: '600',
                    height: '48px',
                    paddingLeft: '32px',
                    paddingRight: '32px',
                    fontSize: '16px',
                    borderRadius: '24px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                  }}
                >
                  Contact Support
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeedHelp;