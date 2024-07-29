import { AuthContext } from "../context/authcontext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./search.css";

const Search = ({ item }) => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleclick = async () => {
    if (user) {
      navigate(`/hotels/${item._id}`);
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">
          {item.distance} from {item.city}
        </span>
        <span className="siTaxiOp">Free taxi</span>
        <span className="siSubtitle">{item.desc}</span>
        <span className="siCancelOp">Cancellation available</span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">&#8377;{item.price}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button onClick={handleclick} className="siCheckButton">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
