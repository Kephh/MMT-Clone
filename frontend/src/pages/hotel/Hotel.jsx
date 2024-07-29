import Header from "../../components/header";
import MailList from "../../components/mail";
import Footer from "../../components/footer";
import { useState, useContext } from "react";
import useFetch from "../../hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/searchcontext";
import { AuthContext } from "../../context/authcontext";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import "./hotel.css";

const Hotel = () => {
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  const navigate = useNavigate();
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  //console.log("===", location, "===");
  const { data, loading, error } = useFetch(`/hotels/find/${id}`);
  const { user } = useContext(AuthContext);
  const { dates, options } = useContext(SearchContext);
  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;

  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }
  const days = dayDifference(dates[0]?.endDate, dates[0].startDate);

  let bookinginfo = {
    personname: user.username,
    type: "H",
    hotelname: data.name,
    hotelcity: data.city,
    amount: days * data.price,
  };

  const handleClick = async (e) => {
    if (user) {
      e.preventDefault();
      try {
        if (days * data.price !== 0) {
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
    <div>
      <Header type="list" />
      {loading ? (
        <h1 className="hotelTitle">Loading...</h1>
      ) : (
        <div className="hotelContainer">
          <div className="hotelWrapper">
            <button onClick={handleClick} className="bookNow">
              Grab This Hotel!
            </button>
            <h1 className="hotelTitle">{data.name}</h1>
            <span className="hotelDistance">
              Located – {data.distance} from {data.city}
            </span>
            <span className="hotelPriceHighlight">
              Book a stay over &#8377;{data.price} at this property and get a
              Free Airport Taxi
            </span>
            <div className="hotelImages">
              {photos?.map((photo, i) => (
                <div className="hotelImgWrapper" key={i}>
                  <img src={photo.src} alt="" className="hotelImg" />
                </div>
              ))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                <h4 className="hotelTitle">{data.desc}</h4>
                <p className="hotelDesc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  nobis similique a facilis? Voluptatem, et? Inventore, cumque
                  consectetur tempore doloremque ratione itaque id earum eum
                  facere in velit, quaerat amet! Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Itaque earum provident commodi
                  dolores, nam error iure ea quo labore maiores dolor reiciendis
                  nostrum omnis explicabo mollitia esse qui ipsam eum!
                </p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Perfect for a {days} Days stay!</h1>
                <span>
                  Located in the real heart of {data.city}, this property has an
                  excellent location score of 9.8!
                </span>
                <h2>
                  <b>&#8377;{days * data.price}</b> (for {days} Days)
                </h2>
                <button onClick={handleClick}>Grab This Hotel!</button>
                <Snackbar
                  open={open}
                  autoHideDuration={6000}
                  onClose={handleClose}
                >
                  <Alert
                    onClose={handleClose}
                    severity="success"
                    variant="filled"
                    sx={{ width: "100%" }}
                    style={{ fontFamily: "inherit", fontWeight: "bolder" }}
                  >
                    Great! See you at {data.name}.
                  </Alert>
                </Snackbar>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Hotel;
