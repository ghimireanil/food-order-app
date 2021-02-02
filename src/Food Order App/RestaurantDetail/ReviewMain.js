// import React, { useState, useEffect } from "react";
// import { axios } from "../Api/axios";
// import { Image } from "./Image";
// import { MenuList } from "./MenuList";
// import { RestaurantDetail } from "./RestaurantDetail";
// import { ReviewList } from "./ReviewList";
// import { Routing } from "../Route/Routing";

// export function ReviewMain({ match }) {
//   const [review, setReview] = useState([]);

//   useEffect(async () => {
//     const response = await axios.get(`/restaurant/review/${match.params.id}`);
//     console.log(response.data.data);
//     setReview(response.data.data);
//   }, []);
//   return (
//     <div className="App">
//       <div>
//         <Review
//           reviewUser={review.map((user) => (
//             <ul>
//               <li
//                 style={{
//                   color: "chocolate",
//                   fontWeight: "bolder",
//                   marginLeft: "1rem",
//                   fontSize: "25px",
//                 }}
//               >
//                 🦹🏼 {user.userId.username}:
//               </li>

//               {/* {(user.food + user.environment + user.service + user.price) /
//                     4} */}
//             </ul>
//           ))}
//           reviewAverage={review.map((user) => (
//             <ul>
//               <li>
//                 {(user.food + user.environment + user.service + user.price) / 4}
//               </li>
//             </ul>
//           ))}
//           reviewComment={review.map((comm) => (
//             <ul>
//               <li
//                 style={{
//                   fontStyle: "italic",
//                   marginLeft: "2rem",
//                   alignItems: "center",
//                 }}
//               >
//                 ✍🏼 {comm.comment}
//               </li>
//             </ul>
//           ))}
//         />
//       </div>
//     </div>
//   );
// }
