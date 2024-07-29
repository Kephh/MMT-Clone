import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import Header from "../../components/header";
import { useLocation, Link } from "react-router-dom";
import FlightItem from "../../components/FlightBooking/FlightItem";
import { TbFaceIdError } from "react-icons/tb";
import MailList from "../../components/mail";
import Footer from "../../components/footer";
import "./flightlist.css";

const Flightlist = () => {
  const location = useLocation();
  const [departure, setDeparture] = useState(location.state.departure);
  const [travellers, setTravellers] = useState(location.state.travellers);
  const [classType, setClassType] = useState(location.state.classType);

  const { data, loading, error } = useFetch(
    `/air/flights?from=${location.state.fromairports}&to=${location.state.toairports}`
  );

  const datetype = {
    takeoffdate: departure,
    ftype: classType,
    people: travellers,
  };

  return (
    <div>
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listResult">
            {loading ? (
              "Loading Flights..."
            ) : (
              <>
                {data.length !== 0 ? (
                  data.map((item) => (
                    <FlightItem
                      datetype={datetype}
                      item={item}
                      key={item._id}
                    />
                  ))
                ) : (
                  <>
                    <TbFaceIdError style={{ fontSize: "30px" }} />
                    <h3>No Flights available at this moment.</h3>
                    <span>
                      Please try again later. Go to&nbsp;
                      <Link
                        to="/"
                        style={{ textDecoration: "none", color: "#eb2226" }}
                      >
                        Homepage.
                      </Link>
                    </span>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <MailList />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Flightlist;
