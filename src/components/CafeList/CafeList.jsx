import "./CafeList.css";
import Cafe from "../Cafe/Cafe";
//  rsc = React Stateless Component snippet

const CafeList = () => {

  const cafeData = [
    {
        "picture": "https://laptopfriendly.co/images/places/tokyo/ddsk-saigon-kitchen/ddsk-saigon-kitchen--tokyo.jpg",
        "title": "DDSK SAIGON KITCHEN",
        "address": "ss, 135-0061, Tokyo",
        "criteria": []
    },
    {
        "picture": "https://laptopfriendly.co/images/places/tokyo/common/common--tokyo.jpg",
        "title": "COMMON",
        "address": "106-0032, Tokyo",
        "criteria": [
            "Stable Wi-Fi",
            "Power sockets",
            "Quiet",
            "Coffee",
            "Food"
        ]
    },
    {
        "picture": "https://laptopfriendly.co/images/places/tokyo/brooklyn-parlor-shinjuku/brooklyn-parlor-shinjuku%20shinjuku-city%20brooklyn-parlor-shinjuku-shinjuku-city%20.jpg",
        "title": "BROOKLYN PARLOR SHINJUKU",
        "address": "Shinjuku Marui Annex B1F, 3-1-26 Shinjuku, Shinjuku-ku, Tokyo, 160-0022, Tokyo",
        "criteria": [
            "Stable Wi-Fi",
            "Power sockets",
            "Quiet",
            "Coffee",
            "Food"
        ]
    }
];

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