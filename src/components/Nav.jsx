import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

const Nav = () => {
  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <nav className="bg-purple-100 flex font-bold justify-between items-center py-2 px-2 md:px-6 h-[10vh]">
      <h3 className="text-purple-900 text-2xl">Pomodoro</h3>

      <button
        onClick={logOut}
        className="bg-purple-500 text-purple-100 px-4 py-2 font-medium rounded shadow-md flex gap-2 justify-between items-center"
      >
        Logout
      </button>
    </nav>
  );
};

export default Nav;
