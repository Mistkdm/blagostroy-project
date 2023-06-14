import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
const Service = ({ title, img, text, index }) => {
  const isEven = index % 2 === 0;
  return (
    <div className={`${isEven ? "even" : "odd"}`}>
      <Container className="service-card center">
        <Row>
          <Col md={5}>
            <img src={img} alt="Logo" />
          </Col>
          <Col md={7}>
            <h2>{title}</h2>
            <p>{text}</p>
            <button>Подробнее</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Service;
