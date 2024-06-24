import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { BsFillPersonFill, BsClockFill, BsQuestionCircleFill, BsMap, BsMapFill } from "react-icons/bs";
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div>
            <div className="dashboard-content">
                <h1 className="text-center mt-4 dashboard-heading">Dashboard</h1>

                <Row className="card-container">
                    <Col sm={6} md={3}>
                        <CustomCard icon={<BsFillPersonFill className="card-icon" />} title="Visitor Registration" route='/visitor-registration'>
                            Register new visitors to the system.
                        </CustomCard>
                    </Col>
                    <Col sm={6} md={3}>
                        <CustomCard icon={<BsClockFill className="card-icon" />} title="Visitor History" route="/visitor-history">
                            View past visitor records.
                        </CustomCard>
                    </Col>
                    <Col sm={6} md={3}>
                        <CustomCard icon={<BsQuestionCircleFill className="card-icon" />} title="How to Use" route="/how-to-use">
                            Learn how to use the system.
                        </CustomCard>
                    </Col>
                    <Col sm={6} md={3}>
                        <CustomCard icon={<BsMapFill className="card-icon" />} title="Add a Map" route="/add-map">
                            Add and manage maps.
                        </CustomCard>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

const CustomCard = ({ icon, title, route, children }) => {
    return (
        <Card className="custom-card">
            <Card.Body className="d-flex flex-column align-items-center justify-content-between">
                <div className="text-center">
                    {icon}
                    <Card.Title className="mt-3">{title}</Card.Title>
                    <Card.Text>{children}</Card.Text>
                </div>
                <Link to={route} className="btn btn-purple mt-2"><div className="dashboard-btn-text">Go to {title}</div></Link>
            </Card.Body>
        </Card>
    );
}

export default Dashboard;
