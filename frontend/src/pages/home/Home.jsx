import Featured from "../../components/featured";
import FeaturedProperties from "../../components/featuredprops";
import Airlineproperties from "../../components/FlightBooking/airlineproperties";
import Featuredflight from "../../components/FlightBooking/featuredflight";
import Flight from "../../components/FlightBooking/Flight";
import Footer from "../../components/footer";
import Header from "../../components/header";
import MailList from "../../components/mail";
import Properties from "../../components/properties";
import "./home.css";
import { useState } from "react";

const Home = () => {
  const [activeClass, setActiveClass] = useState(1);
  const handleCallback = (childData) => {
    setActiveClass(childData);
  };
  return (
    <div>
      <Header mode={handleCallback} />
      <div className="homeContainer">
        {activeClass === 1 ? (
          <>
            <Featured />
            <h1 className="homeTitle">Browse by property type</h1>
            <Properties />
            <h1 className="homeTitle">Homes guests love</h1>
            <FeaturedProperties />
            <MailList />
            <Footer />
          </>
        ) : (
          <>
            <Flight />
            <Featuredflight />
            <h1 className="homeTitlef">Go! Fly in the best!</h1>
            <Airlineproperties />
            <MailList />
            <Footer />
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
