import "./style.css";
import drop from "./../../img/vector.svg";

const Header = () => {
  return (
    <div className="short-info">
      <div className="container">
        <div className="col text-center justify-content-center py-5">
          <p className="offset-md-2 col-md-8 short-info__text">
            Оказываем комплексные услуги по расчистке и подготовке участков к
            укладке тротуарной плитки
          </p>
          <p className="short-info__more">УЗНАТЬ БОЛЬШЕ О НАШИХ УСЛУГАХ</p>
          <img src={drop} alt="drop" id="arrow" />
        </div>
      </div>
    </div>
  );
};

export default Header;
