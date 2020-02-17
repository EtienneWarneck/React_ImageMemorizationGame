import React from "react";
import "./card.css";


//Stateless component rendering images
const Card = props => (
  <div className="card">
    <div className="img-container">
      <img src={props.image} id={props.id} alt={props.name}
        onClick={() => props.shuffleImg(props.id)} className='shuffleScore' />
    </div>
  </div>
);

export default Card;


// function FriendCard(props) {
//   return (
//     <div className="card">
//       <div className="img-container">
//         <img alt={props.name} src={props.image} />
//       </div>
//       <div className="content">
//         <ul>
//           <li>
//             <strong>Name:</strong> {props.name}
//           </li>
//           <li>
//             <strong>Occupation:</strong> {props.occupation}
//           </li>
//           <li>
//             <strong>Location:</strong> {props.location}
//           </li>
//         </ul>
//       </div>
//       <span onClick={() => props.removeFriend(props.id)} className="remove">
//         𝘅
//       </span>
//     </div>
//   );
// }
