import { useState, useContext } from "react";
import useFetch from "../../hooks/useFetch";
import { LuArrowLeftRight } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { FlightContext } from "../../context/flightcontext.jsx";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./Flight.css";

const Flight = () => {
  const [fromairports, setFromAirports] = useState("");
  const [toairports, setToAirports] = useState("");

  const fromChange = (event) => {
    setFromAirports(event.target.value);
  };
  const toChange = (event) => {
    setToAirports(event.target.value);
  };

  const [departure, setDeparture] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [travellers, setTravellers] = useState(1);
  const [classType, setClassType] = useState();

  const { data, loading, error } = useFetch("/air/airports");
  const { dispatch } = useContext(FlightContext);
  const navigate = useNavigate();

  const handleseearch = () => {
    if (fromairports !== "" && toairports !== "") {
      dispatch({
        type: "NEW_FSEARCH",
        payload: {
          fromairports,
          toairports,
          departure,
          returnDate,
          travellers,
          classType,
        },
      });
      navigate("/flights", {
        state: {
          fromairports,
          toairports,
          departure,
          returnDate,
          travellers,
          classType,
        },
      });
    }
  };

  return (
    <>
      <div className="search-container">
        <div className="search-box">
          <div className="search-box-content">
            <div className="search-form">
              <div className="search-form-group">
                <FormControl
                  variant="standard"
                  sx={{ m: 1, minWidth: 120 }}
                  className="search-form-select"
                >
                  <InputLabel id="demo-simple-select-standard-label">
                    From
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={fromairports}
                    onChange={fromChange}
                    label="From"
                  >
                    <MenuItem value="">
                      <em>-None-</em>
                    </MenuItem>
                    {data.map((airport) => (
                      <MenuItem key={airport.code} value={airport.code}>
                        {airport.name}&nbsp;&bull;&nbsp;{airport.code}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div className="search-form-group-center">
                <div className="search-form-icon">
                  <LuArrowLeftRight />
                </div>
              </div>
              <div className="search-form-group">
                <FormControl
                  variant="standard"
                  sx={{ m: 1, minWidth: 120 }}
                  className="search-form-select"
                >
                  <InputLabel id="demo-simple-select-standard-label">
                    To
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={toairports}
                    onChange={toChange}
                    label="To"
                  >
                    <MenuItem value="">
                      <em>-None-</em>
                    </MenuItem>
                    {data.map((airport) => (
                      <MenuItem key={airport.code} value={airport.code}>
                        {airport.name}&nbsp;&bull;&nbsp;{airport.code}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div className="search-form-group">
                <label className="search-form-label">Departure</label>
                <input
                  type="date"
                  className="search-form-input"
                  value={departure}
                  onChange={(e) => setDeparture(e.target.value)}
                />
                <div className="search-form-date-info">
                  {new Date(departure).toLocaleDateString("en-IN", {
                    weekday: "long",
                  })}
                </div>
              </div>
              <div className="search-form-group">
                <label className="search-form-label">Return</label>
                <input
                  type="date"
                  className="search-form-input"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                />
              </div>
              <div className="search-form-group">
                <label className="search-form-label">Travellers & Class</label>
                <div className="search-form-travellers-class">
                  <input
                    type="number"
                    className="search-form-travellers-input"
                    value={travellers}
                    onChange={(e) => setTravellers(e.target.value)}
                    min="1"
                  />
                  <select
                    className="search-form-class-select"
                    value={classType}
                    onChange={(e) => setClassType(e.target.value)}
                  >
                    <option value="Economy">Economy</option>
                    <option value="PremiumEconomy">Premium Economy</option>
                    <option value="Business">Business</option>
                    <option value="FirstClass">First Class</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="search-button-container">
        <button className="search-button" onClick={handleseearch}>
          Search Flight
        </button>
      </div>
    </>
  );
};

export default Flight;
