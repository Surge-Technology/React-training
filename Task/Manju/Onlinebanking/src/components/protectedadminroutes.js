// import React from "react";
// import { Route, Redirect } from "react-router-dom";
// import auth from "../service/adminauth";

// export const ProtectedAdminRoute = ({ component: Component, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={props => {
//         if (auth.isAuthenticated()) {
//           return <Component {...props} />;
//         } else {
//           return (
//             <Redirect
//               to={{
//                 pathname: "/admin/login",
//                 state: {
//                   from: props.location
//                 }
//               }}
//             />
//           );
//         }
//       }}
//     />
//   );
// };
