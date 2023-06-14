import { Col, Container, Row } from "react-bootstrap";
import YandexMap from "../components/map/yandexMap";
import "./../styles/styles.css";
import ContactImg from "./../img/contactimg.jpg";
const Contacts = () => {
  return (
    <>
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12">
            <h1>Где нас найти?</h1>
          </div>
        </div>
      </div>
      <div className="contacts container">
        <Container>
          <Row>
            <Col md="4">
              <h2>Адрес</h2>
              <p>г. Батайск, Речная улица, дом 51</p>
              <h2>Режим работы</h2>
              <p>с 9:00 до 20:00 без перерывов и выходных</p>
              <h2>Телефон</h2>
              <ul>
                <li>с 9:00 до 20:00</li>
                <li>+7 (928) 412-42-42</li>
                <li>+7 (952) 623-23-23</li>
                <li>+7 (929) 265-65-65</li>
              </ul>
            </Col>
            <Col md="1"></Col>
            <Col md="7">
              <YandexMap className="contacts__map" />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="write-us container">
        <Container>
          <Row className="justify-content-center">
            <Col md="5">
              <img
                src={ContactImg}
                alt="contact logo"
                className="responsive-img"
              />
            </Col>
            <Col md="7">
              <h2>Напишите нам</h2>
              <input placeholder="Ваше имя" className="input-1"></input>
              <input placeholder="Ваше e-mail" className="input-2"></input>
              <input placeholder="Ваш вопрос" className="input-3"></input>
              <button>Отправить</button>
              <p>
                *нажимая на кнопку, вы согласшаетесь на обработку персональных
                данных
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Contacts;
