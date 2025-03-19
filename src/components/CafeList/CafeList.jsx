import "./CafeList.css";
import Cafe from "../Cafe/Cafe";
//  rsc = React Stateless Component snippet

const CafeList = ({cafeData}) => {

  return (
    <div className="cafe-list">
      {
        // Loop through the cafeDatas array and render a Cafe component for each cafe object
        cafeData.map(cafe => <Cafe key={cafe.title} cafe={cafe} />)
      }
    </div>
  );
};

export default CafeList;