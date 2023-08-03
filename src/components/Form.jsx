import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../config/firebase";

const Form = () => {
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="flex justify-center items-center min-h-screen transition-all duration-700 bg-rose-500">
      <div className="w-full max-w-xl bg-rose-200">
        <h1 className="my-6 text-3xl text-center font-semibold text-rose-900">
          Login
        </h1>

        <div className="flex justify-center my-6">
          <button
            onClick={signInWithGoogle}
            type="button"
            className="bg-rose-500 text-rose-100 px-4 py-2 font-medium rounded shadow-md flex gap-2 justify-between items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-7 h-7 fill-rose-100"
            >
              <title>ionicons-v5_logos</title>
              <path d="M473.16,221.48l-2.26-9.59H262.46v88.22H387c-12.93,61.4-72.93,93.72-121.94,93.72-35.66,0-73.25-15-98.13-39.11a140.08,140.08,0,0,1-41.8-98.88c0-37.16,16.7-74.33,41-98.78s61-38.13,97.49-38.13c41.79,0,71.74,22.19,82.94,32.31l62.69-62.36C390.86,72.72,340.34,32,261.6,32h0c-60.75,0-119,23.27-161.58,65.71C58,139.5,36.25,199.93,36.25,256S56.83,369.48,97.55,411.6C141.06,456.52,202.68,480,266.13,480c57.73,0,112.45-22.62,151.45-63.66,38.34-40.4,58.17-96.3,58.17-154.9C475.75,236.77,473.27,222.12,473.16,221.48Z" />
            </svg>
            <span className="w-full">Sign In with Google</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Form;
