import Header from "../components/header/header";
import QuestionAndAnswer from "../components/question-and-answer/questionAndAnswer";
import image4_2 from "./../img/image 4-2.jpg";
import image4 from "./../img/image 4.jpg";
import image4_1 from "./../img/image 4-1.jpg";
import vectorOff from "./../img/Vector_off.svg";
import vectorSales from "./../img/Vector sales.svg";
import vectorDelivery from "./../img/Vector delivery.svg";
import vectorWorker from "./../img/Vector worker.svg";
import vectorTiles from "./../img/Vector tiles.svg";
import vectorGuarantees from "./../img/Vector guarantees.svg";
import i1 from "./../img/image 7.jpg";
import i2 from "./../img/image 10.jpg";
import i3 from "./../img/image 9.jpg";
import i4 from "./../img/image 10.jpg";
import i5 from "./../img/image 11.jpg";

import Slider from "./../components/slider/slider";

const Home = () => {
  return (
    <>
      <Header />
      <div
        div
        className="container justify-content-center text-center py-5 about"
      >
        <div className="row">
          <h2 className="line offset-md-4 col-md-4">Что мы делаем?</h2>
        </div>
        <div className="row" style={{ marginTop: "2.5rem" }}>
          <div className="justify-content-end col-md-2">
            <div className="vertical-line"></div>
          </div>
          <p className="col-md-8 justify-content-start">
            На новых неосвоенных или старых, но запущенных территориях мы
            выполняем удаление ненужной растительности, снос построек и
            подготовку земли для укладки тротуарной плитки, бордюров или
            асфальта.
          </p>
        </div>
        <div className="row">
          <div className="justify-content-end col-md-2">
            <div className="vertical-line"></div>
          </div>
          <p className="col-md-8 justify-content-start">
            Нас можно вызвать на разовые работы, например, уборку после зимы или
            копку земли, а можно заказать комплекс ландшафтных работ по смете.
            Мы одинаково бережно и внимательно относимся ко всем клиентам и
            всегда проводим земельные работы вручную или с использованием
            профессионального инструмента.
          </p>
        </div>
      </div>
      <div className="offer">
        <div className="container justify-content-center text-center py-5">
          <div className="row">
            <h2 className="line offset-md-4 col-md-4">Наши услуги</h2>
          </div>
          <div
            className="row row-cols-md-2 row-cols-lg-3 g-3"
            style={{ marginTop: "0.625rem" }}
          >
            <div className="col">
              <div className="offer__card">
                <img src={image4_2} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Аренда спецтехники</h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="offer__card">
                <img src={image4} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Укладка тротуарной плитки</h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="offer__card">
                <img src={image4_1} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Снос и демонтаж</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <button className="offer__btn btn">
              Посмотреть все услуги
              <img
                src={vectorOff}
                style={{ marginBottom: "14px", marginLeft: "13px" }}
                alt="..."
              />
            </button>
          </div>
        </div>
      </div>
      <div className="advantages">
        <div className="container">
          <div className="row advantages__title text-center">
            <h2 className="line offset-md-4 offset-lg-4 col-md-4">
              Наши преимущества
            </h2>
          </div>
          <div
            className="row row-cols-md-2 row-cols-lg-5 g-3"
            style={{ marginTop: "0.625rem" }}
          >
            <div className="col">
              <div className="advantages__card">
                <img src={vectorSales} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text advantages__text">
                    Минимальные цены на наши материалы
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="advantages__card">
                <img src={vectorDelivery} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text advantages__text">
                    Доставка в любую точку города и области
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="advantages__card">
                <img src={vectorWorker} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text advantages__text">
                    Бесплатный выезд на замер и составление сметы
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="advantages__card">
                <img src={vectorTiles} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text advantages__text">
                    Разработка эксклюзивного проекта и оперативная укладка
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="advantages__card">
                <img
                  src={vectorGuarantees}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text advantages__text">
                    Гарантия качества выполненных работ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="our-works">
        <div className="container text-center">
          <div className="row">
            <h2 className="line offset-md-4 offset-lg-4 col-md-4">
              Наши работы
            </h2>
          </div>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <Slider images={[i1, i2, i3, i4, i5]} autoScrollInterval={3000} />
            </div>
          </div>
          <div className="row"></div>
        </div>
      </div>
      <div className="question-answer">
        <QuestionAndAnswer />
      </div>
    </>
  );
};

export default Home;
