import "./featuredflight.css";

const Featuredflight = () => {
  return (
    <div className="featuredflight">
      <div className="featuredItemf">
        <img
          src="https://image.cnbcfm.com/api/v1/image/107176170-1673300772388-gettyimages-1072714948-cpmh-141020g07w.jpeg?v=1673366484"
          alt=""
          className="featuredImgf"
        />
        <div className="featuredTitlesf">
          <h1>Safe</h1>
        </div>
      </div>

      <div className="featuredItemf">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG3mvImKLAWAjHfPNqWNd-rs06E0eg86prUQ&s"
          alt=""
          className="featuredImgf"
        />
        <div className="featuredTitlesf">
          <h1>Reliable</h1>
        </div>
      </div>
      <div className="featuredItemf">
        <img
          src="https://im.idiva.com/content/2016/Jun/low_cost_carriers_idiva.jpg?w=450&h=338&cc=1"
          alt=""
          className="featuredImgf"
        />
        <div className="featuredTitlesf">
          <h1>Affordable</h1>
        </div>
      </div>
    </div>
  );
};

export default Featuredflight;
