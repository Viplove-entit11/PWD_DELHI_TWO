import React from 'react';
import { Card, Row, Col, Typography, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const OurLeaders = () => {
  const leadersData = [
    {
      id: 1,
      name: 'Shri Parvesh Verma',
      designation: 'Hon\'ble Minister, PWD',
      image: null, // Replace with actual image URL when available
    },
    {
      id: 2,
      name: 'Shri Navin Kumar Choudhary',
      designation: 'Addl. Chief Secretary, PWD',
      image: null, // Replace with actual image URL when available
    },
    {
      id: 3,
      name: 'Shri Rajesh Kumar',
      designation: 'Chief Engineer, PWD',
      image: null, // Replace with actual image URL when available
    }
  ];

  return (
    <div style={{
      backgroundColor: '#ffffff',
      padding: '80px 24px',
      minHeight: '60vh'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Header Section */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '60px'
        }}>
          <Title level={2} style={{ 
            color: '#333',
            fontSize: '36px',
            fontWeight: 'bold',
            marginBottom: '16px'
          }}>
            Our Leadership
          </Title>
        </div>

        {/* Leaders Cards */}
        <Row gutter={[32, 32]} justify="center">
          {leadersData.map((leader, index) => (
            <Col xs={24} sm={12} md={8} lg={8} key={leader.id}>
              <Card 
                hoverable
                style={{
                  textAlign: 'center',
                  borderRadius: '16px',
                  border: '1px solid #f0f0f0',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                  height: '320px',
                  transition: 'all 0.3s ease'
                }}
                bodyStyle={{
                  padding: '40px 24px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                {/* Leader Image */}
                <div style={{
                  marginBottom: '24px'
                }}>
                  {leader.image ? (
                    <Avatar
                      size={120}
                      src={leader.image}
                      style={{
                        border: '4px solid #f0f0f0'
                      }}
                    />
                  ) : (
                    <div style={{
                      width: '120px',
                      height: '120px',
                      backgroundColor: '#f5f5f5',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '4px solid #e8e8e8',
                      margin: '0 auto'
                    }}>
                      <UserOutlined style={{ 
                        fontSize: '48px', 
                        color: '#bfbfbf' 
                      }} />
                    </div>
                  )}
                </div>
                
                {/* Leader Name */}
                <Title level={4} style={{ 
                  color: '#333',
                  marginBottom: '8px',
                  fontSize: '20px',
                  fontWeight: '600',
                  lineHeight: '1.3',
                  textAlign: 'center'
                }}>
                  {leader.name}
                </Title>
                
                {/* Leader Designation */}
                <Text style={{ 
                  color: '#666',
                  fontSize: '14px',
                  fontWeight: '500',
                  textAlign: 'center',
                  lineHeight: '1.4'
                }}>
                  {leader.designation}
                </Text>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Additional Message */}
        <div style={{
          marginTop: '60px',
          textAlign: 'center',
          maxWidth: '800px',
          margin: '60px auto 0'
        }}>
          <Text style={{
            fontSize: '16px',
            color: '#666',
            lineHeight: '1.6',
            display: 'block'
          }}>
            Our leadership team brings decades of experience in public administration, 
            engineering excellence, and infrastructure development to guide PWD Delhi 
            towards a sustainable and prosperous future.
          </Text>
        </div>
      </div>
    </div>
  );
};

export default OurLeaders;