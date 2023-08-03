import { useEffect, useState } from "react";

const Pomodoro = () => {
  const [time, setTime] = useState(25 * 60);
  const [timer, setTimer] = useState(null);
  const [resting, setResting] = useState(false);
  const [isTimerActive, setIsTimerActive] = useState(false);

  // setInterval(() => {
  //   setTime((prev) => prev - 1);
  // }, 1000);

  const start = () => {
    setIsTimerActive(true);

    const timer = setInterval(() => {
      setTime((prev) => prev - 1);
      if (time === 0) {
        clearInterval(timer);
      }
    }, 1000);
    setTimer(timer);
  };
  const reset = () => {
    if (!timer) return;
    setIsTimerActive(false);
    setResting(false);
    clearInterval(timer);
    setTime(25 * 60);
  };
  const pause = () => {
    if (!timer) return;
    setIsTimerActive(false);
    clearInterval(timer);
  };

  useEffect(() => {
    if (time === 0) {
      clearInterval(timer);
      setIsTimerActive(false);
      if (resting) {
        setResting(false);
        setTime(25 * 60);
      } else {
        setResting(true);
        setTime(5 * 60);
      }
    }
  }, [time, timer, resting]);

  useEffect(() => {
    return () => clearInterval(timer);
  }, [timer]);

  return (
    <section
      className={`flex justify-center items-center min-h-[90vh] transition-all duration-700 ${
        resting ? "bg-blue-500" : "bg-rose-500"
      }`}
    >
      <div
        className={`w-full max-w-xl ${resting ? "bg-blue-200" : "bg-rose-200"}`}
      >
        <h1
          className={`my-6 text-3xl text-center font-semibold ${
            resting ? "text-blue-900" : "text-rose-900"
          }`}
        >
          Pomodoro Timer
        </h1>
        {isTimerActive && (
          <h2
            className={`my-6 text-xl text-center font-semibold ${
              resting ? "text-blue-900" : "text-rose-900"
            }`}
          >
            Status: {resting ? "Resting" : "Working"}
          </h2>
        )}
        <div>
          <h2
            className={`my-6 text-7xl text-center font-extrabold ${
              resting ? "text-blue-900" : "text-rose-900"
            }`}
          >
            {new Date(time * 1000).toISOString().slice(14, 19)}
          </h2>

          <div className="p-4 flex justify-center gap-3">
            {!isTimerActive ? (
              <button
                onClick={start}
                className={`px-4 py-2 font-medium rounded shadow-md ${
                  resting
                    ? "bg-blue-500 text-blue-100"
                    : "bg-rose-500 text-rose-100"
                }`}
              >
                Start
              </button>
            ) : (
              <button
                onClick={pause}
                className={`px-4 py-2 font-medium rounded shadow-md ${
                  resting
                    ? "bg-blue-500 text-blue-100"
                    : "bg-rose-500 text-rose-100"
                }`}
              >
                Pause
              </button>
            )}
            <button
              onClick={reset}
              className={`px-4 py-2 font-medium rounded shadow-md ${
                resting
                  ? "bg-blue-500 text-blue-100"
                  : "bg-rose-500 text-rose-100"
              }`}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pomodoro;
