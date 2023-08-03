import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";
import Nav from "./components/Nav";
import Form from "./components/Form";
import Pomodoro from "./components/Pomodoro";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setUser(user);
        // ...
        console.log("uid", uid);
      } else {
        // User is signed out
        console.log("user is logged out");
        setUser(null);
      }
    });
  }, []);

  return (
    <main>
      {user && <Nav />}
      {user ? <Pomodoro /> : <Form />}
    </main>
  );
}

export default App;
