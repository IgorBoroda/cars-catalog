import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";

// export const withAuth = (Component)=>(props)=>{
// const {user} = useContext(AuthContext)
// if (!user) return <p>You are not authorized to view this page</p>
//   return <Component {...props}/>;
// } ;



export function withAuth(Component) {
  function WithAuth(props) {
    var context = useContext(AuthContext);
    var user = context.user;

    if (!user) {
      return <p>You are not authorized to view this page</p>;
    }
    console.log("WithAuth props:", props);
    return <Component {...props} />;
  }

  return WithAuth;
}







 