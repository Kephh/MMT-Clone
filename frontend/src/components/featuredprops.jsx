import "./featuredprops.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Sofitel Mumbai BKC</span>
        <span className="fpCity">BKC, Munbai</span>
        <span className="fpPrice">Starting from &#8377;12k</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/19/b3/0f/the-sea-hotel-by-grupotel.jpg?w=700&h=-1&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Hotel Sea Princess</span>
        <span className="fpCity">Juhu, Mumbai</span>
        <span className="fpPrice">Starting from &#8377;14k</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://i.pinimg.com/736x/8f/67/32/8f6732ca0da7173c8b6ec37618faf523.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Courtyard Nashik</span>
        <span className="fpCity">Nashik</span>
        <span className="fpPrice">Starting from &#8377;9k</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://static.wixstatic.com/media/c2a0df_c66d1c8397c24a469ef095728b746edd~mv2.webp"
          alt=""
          className="fpImg"
        />
        <span className="fpName">JW Marriott Hotel</span>
        <span className="fpCity">Pune</span>
        <span className="fpPrice">Starting from &#8377;10k</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
