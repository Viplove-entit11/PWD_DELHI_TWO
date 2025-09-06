import React, { useState } from 'react';
import { 
  Table, 
  Select, 
  Button, 
  Space, 
  Card, 
  Tag, 
  Progress,
  Tooltip,
  Typography,
  Row,
  Col,
  Badge
} from 'antd';
import { 
  SearchOutlined, 
  EnvironmentOutlined, 
  EyeOutlined,
  FileTextOutlined,
  CameraOutlined 
} from '@ant-design/icons';

const { Option } = Select;
const { Text } = Typography;

const RoadConstructions = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({
    zone: 'All',
    division: 'All',
    category: 'All',
    workType: 'All'
  });

  // Dummy data matching your table structure
  const dummyData = [
    {
      key: 1,
      sNo: 1,
      nameOfWork: 'Elevated Road, Extradosed Bridge, Flyover, Clover Leaves, Loops, Ramps, Footpath, Cycle Track, Road Work including Signages, Street Light Works & Allied Works at Rao Tula Ram Cap, Pier, well foundation and casting of segment',
      dateOfStart: '2015-04-18',
      dateOfCompletion: '2017-10-17',
      cost: '96400.00',
      expenditure: '74832.97 (Oct\'23)',
      progress: 6.69,
      progressMonth: 'Jul\'24',
      agency: 'Larson & Toubro Limited',
      status: 'RMP 21D - 31E G1 girder reinforcement chucking in progress',
      zone: 'Zone 1',
      division: 'Central',
      category: 'Bridge',
      workType: 'Construction'
    },
    {
      key: 2,
      sNo: 2,
      nameOfWork: 'Underground Tunnel, Underpass, FOB, Loops, Ramps, Footpath, Road Work including Road Signage, Road/Street Lighting works, Tunnel furnishing etc.) landscaping work at multi junctions & allied bridge works.',
      dateOfStart: '2017-11-08',
      dateOfCompletion: '2019-08-29',
      cost: '77700.00',
      expenditure: '56199.25 (Jun\'23)',
      progress: 0.00,
      progressMonth: 'May\'24',
      agency: 'M/s LST Ltd.',
      status: 'Work in progress, transformer already installed',
      zone: 'Zone 2',
      division: 'North',
      category: 'Road',
      workType: 'Maintenance'
    },
    {
      key: 3,
      sNo: 3,
      nameOfWork: 'Construction of Flyover at Rani Kapur and Gagan Cinema Junction at Mangal Paday Marg including Elevated Corridor Footpath Road Work and Road Signages Electrical Works Drainage Rain Water Harvesting and Allied works on EPC Mode.',
      dateOfStart: '2021-02-03',
      dateOfCompletion: '2024-07-31',
      cost: '15785.00',
      expenditure: '32.95 (Jul\'23)',
      progress: 0.00,
      progressMonth: 'Jan\'25',
      agency: 'Ram Kumar Contractor',
      status: 'Piling completed / pier cap / PSC girder is in progress. Rs 14 lacs of PSC girders have been erected out of 4 of 132 Nos. 12 No. of deck slab has been casted. BSES shifting in progress. Tree cutting permission awaited. Work getting delayed due to non availability of tree cutting permission.',
      zone: 'Zone 3',
      division: 'South',
      category: 'Flyover',
      workType: 'Construction'
    },
    {
      key: 4,
      sNo: 4,
      nameOfWork: 'Construction of Bridge on Najafgarh Drain at Tri Nagar/Inderlok, Karanpura and Ramipura. Delhi to cover the complete Right of Way (ROW) excluding area of already constructed bridge alongwith road improvement on either side of bridge including making.',
      dateOfStart: '2019-03-16',
      dateOfCompletion: '2021-06-30',
      cost: '5388.53',
      expenditure: '5800.90 (Mar\'23)',
      progress: 0.00,
      progressMonth: 'Mar\'24',
      agency: 'Ram Kumar Contractor',
      status: 'Final bill is yet to be paid.',
      zone: 'Zone 4',
      division: 'West',
      category: 'Bridge',
      workType: 'Construction'
    },
    {
      key: 5,
      sNo: 5,
      nameOfWork: 'Construction of Multi-level Parking at Connaught Place with underground commercial complex and allied facilities including road connectivity.',
      dateOfStart: '2020-01-15',
      dateOfCompletion: '2023-12-31',
      cost: '45000.00',
      expenditure: '38500.75 (Dec\'24)',
      progress: 85.50,
      progressMonth: 'Dec\'24',
      agency: 'Delhi Metro Rail Corporation',
      status: 'Work nearing completion, final inspections in progress',
      zone: 'Zone 1',
      division: 'Central',
      category: 'Building',
      workType: 'Construction'
    },
    {
      key: 6,
      sNo: 6,
      nameOfWork: 'Widening and strengthening of Ring Road from ITO to IP Extension including construction of underpass and improvement of junction.',
      dateOfStart: '2018-08-20',
      dateOfCompletion: '2022-03-15',
      cost: '25600.00',
      expenditure: '24890.30 (Nov\'24)',
      progress: 95.20,
      progressMonth: 'Nov\'24',
      agency: 'Infrastructure Leasing & Financial Services',
      status: 'Final phase of work in progress, traffic diversions being managed',
      zone: 'Zone 2',
      division: 'East',
      category: 'Road',
      workType: 'Construction'
    }
  ];

  const [tableData, setTableData] = useState(dummyData);

  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);
    
    // Apply filters (basic implementation)
    let filtered = dummyData;
    if (newFilters.zone !== 'All') {
      filtered = filtered.filter(item => item.zone === newFilters.zone);
    }
    if (newFilters.division !== 'All') {
      filtered = filtered.filter(item => item.division === newFilters.division);
    }
    if (newFilters.category !== 'All') {
      filtered = filtered.filter(item => item.category === newFilters.category);
    }
    if (newFilters.workType !== 'All') {
      filtered = filtered.filter(item => item.workType === newFilters.workType);
    }
    
    setTableData(filtered);
  };

  const handleSearch = () => {
    console.log('Search with filters:', filters);
  };

  const handleViewMap = () => {
    console.log('View Map clicked');
  };

  const columns = [
    {
      title: 'S. No.',
      dataIndex: 'sNo',
      key: 'sNo',
      width: 60,
      align: 'center',
      fixed: 'left'
    },
    {
      title: 'Name of Work',
      dataIndex: 'nameOfWork',
      key: 'nameOfWork',
      width: 260,
      render: (text) => (
        <Tooltip title={text}>
          <Text ellipsis style={{ display: 'block', maxWidth: '280px' }}>
            {text}
          </Text>
        </Tooltip>
      )
    },
    {
      title: (
        <div style={{ textAlign: 'center' }}>
          Date of Start
        </div>
      ),
      dataIndex: 'dateOfStart',
      key: 'dateOfStart',
      width: 150,
      align: 'center',
      sorter: (a, b) => new Date(a.dateOfStart) - new Date(b.dateOfStart)
    },
    {
      title: (
        <div style={{ textAlign: 'center' }}>
          Date of Completion
        </div>
      ),
      dataIndex: 'dateOfCompletion',
      key: 'dateOfCompletion',
      width: 200,
      align: 'center',
      sorter: (a, b) => new Date(a.dateOfCompletion) - new Date(b.dateOfCompletion)
    },
    {
      title: 'Cost (In Lac)',
      dataIndex: 'cost',
      key: 'cost',
      width: 200,
      align: 'right',
      render: (value) => `₹${parseFloat(value).toLocaleString()}`
    },
    {
      title: (
        <div style={{ textAlign: 'center' }}>
          Expenditure (In Lac)
        </div>
      ),
      dataIndex: 'expenditure',
      key: 'expenditure',
      width: 200,
      align: 'center'
    },
    {
      title: (
        <div style={{ textAlign: 'center' }}>
          Progress
        </div>
      ),
      dataIndex: 'progress',
      key: 'progress',
      width: 200,
      align: 'center',
      render: (value, record) => (
        <div>
          <Progress 
            percent={value} 
            size="small" 
            strokeColor={value > 80 ? '#52c41a' : value > 50 ? '#faad14' : '#ff4d4f'}
            showInfo={false}
          />
          <Text style={{ fontSize: '12px' }}>
            {value}% ({record.progressMonth})
          </Text>
        </div>
      )
    },
    {
      title: 'Agency',
      dataIndex: 'agency',
      key: 'agency',
      width: 180,
      render: (text) => (
        <Tooltip title={text}>
          <Text ellipsis style={{ display: 'block', maxWidth: '160px' }}>
            {text}
          </Text>
        </Tooltip>
      )
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: 250,
      render: (text) => (
        <Tooltip title={text}>
          <Text ellipsis style={{ display: 'block', maxWidth: '230px' }}>
            {text}
          </Text>
        </Tooltip>
      )
    },
    {
      title: 'View',
      key: 'view',
      width: 120,
      align: 'center',
      fixed: 'right',
      render: (_, record) => (
        <Space>
          <Tooltip title="Detail Report">
            <Button 
              type="link" 
              size="small" 
              icon={<FileTextOutlined />}
              onClick={() => console.log('Detail Report for:', record.sNo)}
            >
              Detail Report
            </Button>
          </Tooltip>
        </Space>
      )
    }
  ];

  return (
    <div style={{ padding: '24px', backgroundColor: 'white', margin:"20px 0px" }}>
      <Card style={{ marginBottom: '16px' }}>
        <Row gutter={[16, 16]} align="middle">
          <Col xs={24} sm={12} md={4}>
            <div>
              <Text strong style={{ display: 'block', marginBottom: '4px' }}>Zone</Text>
              <Select 
                value={filters.zone}
                onChange={(value) => handleFilterChange('zone', value)}
                style={{ width: '100%' }}
                placeholder="--All--"
              >
                <Option value="All">--All--</Option>
                <Option value="Zone 1">Zone 1</Option>
                <Option value="Zone 2">Zone 2</Option>
                <Option value="Zone 3">Zone 3</Option>
                <Option value="Zone 4">Zone 4</Option>
              </Select>
            </div>
          </Col>
          
          <Col xs={24} sm={12} md={4}>
            <div>
              <Text strong style={{ display: 'block', marginBottom: '4px' }}>Division</Text>
              <Select 
                value={filters.division}
                onChange={(value) => handleFilterChange('division', value)}
                style={{ width: '100%' }}
                placeholder="--All--"
              >
                <Option value="All">--All--</Option>
                <Option value="Central">Central</Option>
                <Option value="North">North</Option>
                <Option value="South">South</Option>
                <Option value="East">East</Option>
                <Option value="West">West</Option>
              </Select>
            </div>
          </Col>
          
          <Col xs={24} sm={12} md={4}>
            <div>
              <Text strong style={{ display: 'block', marginBottom: '4px' }}>Category</Text>
              <Select 
                value={filters.category}
                onChange={(value) => handleFilterChange('category', value)}
                style={{ width: '100%' }}
                placeholder="--All--"
              >
                <Option value="All">--All--</Option>
                <Option value="Bridge">Bridge</Option>
                <Option value="Road">Road</Option>
                <Option value="Flyover">Flyover</Option>
                <Option value="Building">Building</Option>
              </Select>
            </div>
          </Col>
          
          <Col xs={24} sm={12} md={4}>
            <div>
              <Text strong style={{ display: 'block', marginBottom: '4px' }}>Work Type</Text>
              <Select 
                value={filters.workType}
                onChange={(value) => handleFilterChange('workType', value)}
                style={{ width: '100%' }}
                placeholder="--All--"
              >
                <Option value="All">--All--</Option>
                <Option value="Construction">Construction</Option>
                <Option value="Maintenance">Maintenance</Option>
                <Option value="Repair">Repair</Option>
              </Select>
            </div>
          </Col>
          
          <Col xs={24} sm={12} md={4}>
            <Space>
              <Button 
                type="primary" 
                icon={<SearchOutlined />}
                onClick={handleSearch}
                style={{ 
                  backgroundColor: '#1890ff',
                  borderColor: '#1890ff',
                  fontWeight: '500'
                }}
              >
                Search
              </Button>
              <Button 
                type="primary"
                icon={<EnvironmentOutlined />}
                onClick={handleViewMap}
                style={{ 
                  backgroundColor: '#52c41a',
                  borderColor: '#52c41a',
                  fontWeight: '500'
                }}
              >
                View Map
              </Button>
            </Space>
          </Col>
        </Row>
      </Card>

      <Card>
        <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
           
              <Text strong style={{ fontSize: '16px' }}>PWD Works Report</Text>
          </div>
          <div>
            <Text type="secondary">
              Total Records: {tableData.length} | 
              Showing: {tableData.length} results
            </Text>
          </div>
        </div>
        
        <Table 
          columns={columns}
          dataSource={tableData}
          scroll={{ x: 1500, y: 600 }}
          pagination={{
            total: tableData.length,
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total, range) => 
              `${range[0]}-${range[1]} of ${total} items`,
            pageSizeOptions: ['10', '25', '50', '100']
          }}
          size="middle"
          bordered
          rowClassName={(record, index) => 
            index % 2 === 0 ? 'table-row-light' : 'table-row-dark'
          }
          style={{
            '.ant-table-thead > tr > th': {
              backgroundColor: '#1890ff',
              color: 'white',
              fontWeight: '600'
            }
          }}
        />
      </Card>

      <style jsx global>{`
        .ant-table-thead > tr > th {
          background-color: #1890ff !important;
          color: white !important;
          font-weight: 600 !important;
          text-align: center !important;
        }
        
        .table-row-light {
          background-color: #fafafa;
        }
        
        .table-row-dark {
          background-color: white;
        }
        
        .ant-table-tbody > tr:hover > td {
          background-color: #e6f7ff !important;
        }
        
        .ant-progress-inner {
          background-color: #f0f0f0 !important;
        }
        
        .ant-table-cell {
          padding: 12px 8px !important;
        }
      `}</style>
    </div>
  );
};

export default RoadConstructions;