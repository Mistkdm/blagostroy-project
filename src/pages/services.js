import Service from "../components/service/service";
import services from "../helper/servicesList";
import "./../components/service/style.css";
const Servicec = () => {
  return (
    <>
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12">
            <h1>Предоставляемые нами услуги</h1>
          </div>
        </div>
      </div>
      {services.map((service, index) => {
        return (
          <Service
            title={service.title}
            img={service.img}
            text={service.text}
            index={index}
          />
        );
      })}
    </>
  );
};

export default Servicec;
