// Gmaps URL example: `https://www.google.com/maps/search/?api=1&query=Starbucks Meguro,Tokyo`;


import "./Cafe.css";

// pass the cafe object as a prop to the Cafe component passed in the CafeList component
const Cafe = ({cafe}) => {

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${cafe.title},${cafe.address}`;

  return (
    <div className="cafe-card">
      <img src={cafe.picture} alt="cafe" />
      <div>
        <div>
          <h5>{cafe.title}</h5>
          <p>{cafe.criteria.join(", ")}</p>
        </div>
        <a href={googleMapsUrl} target="_blank" rel="noreferrer">View on Google Maps 🚩</a>    
      </div>
    </div>
  );
};

export default Cafe;