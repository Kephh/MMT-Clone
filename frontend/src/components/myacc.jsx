import axios from "axios";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authcontext.jsx";
import useFetch from "../hooks/useFetch";
import { MdDelete } from "react-icons/md";
import { MdAirplanemodeActive, MdHotel } from "react-icons/md";
import "./myacc.css";

const MyAcc = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const { data, loading, error, reFetch } = useFetch(
    `/booking?person=${user.username}`
  );

  const handledelete = async (id) => {
    await axios.delete(`/booking/${id}`);
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <>
      <div className="loginn">
        <div className="Containerr">
          <div style={{ marginBottom: "30px" }}>
            &lt;&nbsp;
            <Link style={{ textDecoration: "none" }} to="/">
              Back
            </Link>
          </div>
          <span style={{ textAlign: "center", fontSize: "30px" }}>
            My Bookings
          </span>
          {loading ? (
            "Loading Booking Details..."
          ) : (
            <>
              {data &&
                data.map((bookdetails, index) => (
                  <div className="bookingdetail" key={index}>
                    {bookdetails.type === "H" && (
                      <>
                        <span>Booking ID: {bookdetails._id}</span>
                        <br />
                        <br />
                        <span id="details">Booking Type(H/F): </span>
                        <span id="info">
                          &nbsp;
                          <MdHotel />
                        </span>
                        <br />
                        <span id="details">Hotel Name and City: </span>
                        <span id="info">
                          &nbsp;{bookdetails.hotelname},&nbsp;
                          {bookdetails.hotelcity}.
                        </span>
                        <br />
                      </>
                    )}
                    {bookdetails.type === "F" && (
                      <>
                        <span>Booking ID: {bookdetails._id}</span>
                        <br />
                        <br />
                        <span id="details">Booking Type(H/F): </span>
                        <span id="info">
                          &nbsp;
                          <MdAirplanemodeActive />
                        </span>
                        <br />
                        <br />
                        <span id="details">Airline: </span>
                        <span id="info">&nbsp;{bookdetails.airline}</span>
                        <br />
                        <span id="details">From </span>
                        <span id="info">{bookdetails.flightfrom}&emsp;</span>
                        <span id="details">To </span>
                        <span id="info">{bookdetails.flightto}</span>
                        <br />
                      </>
                    )}

                    <div
                      id="entity"
                      style={{
                        border: "none",
                        marginTop: "30px",
                        padding: "10px",
                        backgroundColor: "rgba(248, 149, 149, 0.514)",
                        borderRadius: "8px",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>Amount: &#8377;&nbsp;{bookdetails.amount}</span>
                      <button
                        className="deletebtn"
                        onClick={() => handledelete(bookdetails._id)}
                        title="Delete this Booking"
                      >
                        <MdDelete />
                      </button>
                    </div>
                  </div>
                ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default MyAcc;
