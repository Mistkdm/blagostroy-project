import "./style.css";
import Phone from "./../../img/phone-call 1.svg";
import Email from "./../../img/Email svg.svg";
import Location from "./../../img/Location svg.svg";
import Vk from "./../../img/icons8-vk-в-круге 1.svg";
import Instagram from "./../../img/instagram-svgrepo-com 1.svg";
import Telegram from "./../../img/telegram-svgrepo-com 1.svg";
import Facebook from "./../../img/facebook-logo-svgrepo-com 1.svg";
import { Col, Row, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col md={5}>
            <p>Свяжитесь с нами</p>
          </Col>
          <Col md={4}>
            <p>Покупателям</p>
          </Col>
          <Col md={3}>
            <p>Мы в соц. сетях</p>
          </Col>
        </Row>
        <Row>
          <Col md={5}>
            <div className="contact-info-phone">
              <ul>
                <li>
                  <img src={Phone} alt="Icon" className="icon" />
                  +7 (928) 412-42-42
                </li>
                <li className="right-li second-li">+7 (952) 623-23-23</li>
                <li className="right-li">+7 (952) 623-23-23</li>
              </ul>
            </div>
            <div className="email-adress">
              <ul>
                <li>
                  <img src={Email} alt="Icon" className="icon" />
                  blagostroy@gmail.com
                </li>
                <li>
                  <img src={Location} alt="Icon" className="icon" />
                  г. Батайск, улица Энгельса, дом 96
                </li>
              </ul>
            </div>
          </Col>
          <Col md={4}>
            <ul>
              <li>Плитка</li>
              <li>
                <NavLink to="/services" className="nav-link">
                  Услуги
                </NavLink>
              </li>
              <li>Галерея</li>
              <li>Калькулятор</li>
              <li>
                {" "}
                <NavLink to="/contacts" className="nav-link">
                  Контакты
                </NavLink>
              </li>
            </ul>
          </Col>
          <Col md={3} className="social">
            <ul className="social-icons">
              <li>
                <img src={Vk} alt="Icon" className="icon" />
              </li>
              <li>
                <img src={Instagram} alt="Icon" className="icon" />
              </li>
              <li>
                <img src={Telegram} alt="Icon" className="icon" />
              </li>
              <li>
                <img src={Facebook} alt="Icon" className="icon" />
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <hr></hr>
      <Container className="rights">
        <Row>
          <Col md={12} className="justify-content-center">
            <p>
              @2010-2023 ООО “Благострой” Обслуживание земельных участков. Все
              права защищены.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
