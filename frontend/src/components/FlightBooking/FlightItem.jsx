import { AuthContext } from "../../context/authcontext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdFlightLand, MdFlightTakeoff } from "react-icons/md";
import { AiOutlineThunderbolt } from "react-icons/ai";
import "./FlightItem.css";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const FlightItem = ({ item, datetype }) => {
  const [open, setOpen] = useState(false);
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handlebook = async (e) => {
    if (user) {
      e.preventDefault();
      let bookinginfo = {
        personname: user.username,
        type: "F",
        airline: item.flightName,
        flightfrom: item.from,
        flightto: item.to,
        amount: datetype.people * item.price,
      };

      try {
        if (datetype.people * item.price !== 0) {
          await axios.post("/booking", bookinginfo);
          setOpen(true);
          setTimeout(() => {
            navigate("/");
          }, 2000);
        }
      } catch (error) {
        throw new Error(error);
      }
    } else {
      navigate("/login");
    }
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div className="searchItem">
      <img
        src="https://images.indianexpress.com/2023/11/pune-airport-flights.jpg?w=640"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{item.flightName}</h1>
        <span className="siDistance">
          <MdFlightTakeoff />
          &emsp;{item.from}
        </span>
        <span className="siDistance">
          <MdFlightLand />
          &emsp;{item.to}
        </span>
        <span className="siTaxiOp">Free taxi</span>
        <span className="siSubtitle">Estimated Duration: {item.duration}</span>
        <span className="siCancelOp">Cancellation available</span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span></span>
          <button
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AiOutlineThunderbolt />
            &nbsp; Fastest
          </button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">&#8377;{item.price}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button onClick={handlebook} className="siCheckButton">
            Book Flight
          </button>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              variant="filled"
              sx={{ width: "100%" }}
              style={{ fontFamily: "inherit", fontWeight: "bolder" }}
            >
              Booked! Let's fly in {item.flightName}!
            </Alert>
          </Snackbar>
        </div>
      </div>
    </div>
  );
};

export default FlightItem;
