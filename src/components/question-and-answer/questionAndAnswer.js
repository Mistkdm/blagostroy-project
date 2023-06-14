import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import DropdownContainer from "../dropdown/dropdown";
import "./style.css";

const QuestionAndAnswer = () => {
  return (
    <Container>
      <Row>
        <Col md={6} className="d-flex">
          <div className="qa-box h-100">
            <h2 className="text-center">Частые вопросы</h2>
            <DropdownContainer title={"Вы работаете в выходные и праздники?"}>
              <p>123321312132132123</p>
            </DropdownContainer>
            <DropdownContainer title={"Кто закупает и завозит материалы?"}>
              <p>123321312132132123</p>
            </DropdownContainer>
            <DropdownContainer title={"Какое гражданство у ваших рабочих?"}>
              <p>123321312132132123</p>
            </DropdownContainer>
          </div>
        </Col>
        <Col md={2}></Col>
        <Col md={4} sm={12} className="d-flex">
          <div className="qa-box h-100">
            <h2 className="text-center">Оставьте заявку</h2>
            <p className="p1 text-center">
              И наши менеджеры свяжутся с Вами в ближайшее время
            </p>
            <p className="p2">Ваш телефон</p>
            <input placeholder="+7 (999) 999-99-99"></input>
            <button className="btn">Отправить</button>
            <p className=" p3">
              *нажимая на кнопку, вы согласшаетесь на обработку персональных
              данных
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default QuestionAndAnswer;
