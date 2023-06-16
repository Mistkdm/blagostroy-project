import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { useState } from "react";
import Modal from "../modal/modal";

const Service = ({ title, img, text, index }) => {
  const isEven = index % 2 === 0;
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className={`${isEven ? "even" : "odd"}`}>
      <Container className="service-card center d-flex">
        <Row>
          <Col md={5}>
            <img src={img} alt="Logo" className="responsive-img" />
          </Col>
          <Col md={7}>
            <h2>{title}</h2>
            <p>{text}</p>
            <button onClick={() => setModalActive(true)}>Заказать</button>
          </Col>
        </Row>
      </Container>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        className="order-form"
      >
        <h2>Оформить заказ</h2>
        <p className="fill">
          Заполните эту простую форму – менеджер перезвонит для подтверждения
          деталей заказа: время и место доставки, способ разгрузки, оптимальный
          способ оплаты.
        </p>
        <input placeholder="Ваше имя" className="order-form__input"></input>
        <input placeholder="Ваш телефон" className="order-form__input"></input>
        <input placeholder="Ваш e-mail" className="order-form__input"></input>
        <ul className="order-form__pdata">
          <li>
            <input type="checkbox"></input>
          </li>
          <li>
            <p className="pdata-text">
              *нажимая на кнопку, вы соглашаетесь на обработку персональных
              данных
            </p>
          </li>
        </ul>
        <button className="btn">ЗАКАЗАТЬ</button>
      </Modal>
    </div>
  );
};

export default Service;
