import React, { useEffect, useState } from "react";
import { auth } from "../Firebase_auth";
import { onAuthStateChanged, signOut } from "firebase/auth";


const Auth_Details = () => {
  
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    console.log("Auth Details");
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return() => {
        listen();
          }

  }, []);
  
const userSignOut = () => {
    signOut(auth).then(() => {
        console.log('sign out succesfully')
    })
    .catch(error => console.log(error))
}

  return (
    <div>
      <div>Auth_Details</div>
      <div> {authUser ? <><p>{`Signed In as ${authUser.email}`}</p> <button className="sign_up" onClick={userSignOut}>Sign Out</button></>: <p>Signed Out</p>}</div>
    </div>
  );
};

export default Auth_Details;
