import "./airlineproperties.css";

const Airlineproperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQncwoOPvq3xvZOItTj8f3fbNwTTixOykv4Tg&s"
          alt=""
          className="fpImg"
        />
        <span className="fpName">SpiceJet SG-302</span>
        <span className="fpPrice">Starting from &#8377;2k</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://staticimg.amarujala.com/assets/images/2022/02/22/vistara-airline_1645531474.jpeg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Vistara UK-507</span>
        <span className="fpPrice">Starting from &#8377;1k</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFofnWjZxKU8-99hrW9dcHZ2IPIn_vWlgD-g&s"
          alt=""
          className="fpImg"
        />
        <span className="fpName">IndiGo 6E-789</span>
        <span className="fpPrice">Starting from &#8377;3k</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://aeroinside.com/img/aircrafts/aircraft-boeing-787-8-dreamliner-registration-VT-ANR-c2d9f130b4_z.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Air India AI-315</span>
        <span className="fpPrice">Starting from &#8377;0.2k</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default Airlineproperties;
