import { useState } from "react";
function App() {
  const [data, setData] = useState({
    Score: 76,
    Wicket: 2,
    Ball: 50,
  });

  const addScore = (value) => {
    if (data.Score > 100) return;
    setData({ ...data, Score: data.Score + value });
  };
  const addWicket = (value) => {
    if (data.Score > 100) return;
    if (data.Wicket >= 12) return;
    setData({ ...data, Wicket: data.Wicket + value });
  };
  const addBall = (value) => {
    if (data.Score > 100) return;
    setData({ ...data, Ball: data.Ball + value });
  };

  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{" "}
          <h1 className="scoreCount">
            {
              // show "score" here
              <h1>{data.Score}</h1>
            }
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              // show wicket here
              <h1>{data.Wicket}</h1>
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
              <h1>{data.Ball / 6}</h1>
            }
          </h1>
        </div>
      </div>
      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button
          className="addScore1"
          onClick={() => {
            addScore(1);
          }}
        >
          Add 1
        </button>
        <button
          className="addScore4"
          onClick={() => {
            addScore(4);
          }}
        >
          Add 4
        </button>
        <button
          className="addScore6"
          onClick={() => {
            addScore(6);
          }}
        >
          Add 6
        </button>
      </div>
      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button
          onClick={() => {
            addWicket(1);
          }}
        >
          Add 1 wicket
        </button>
      </div>
      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button
          onClick={() => {
            addBall(1);
          }}
        >
          Add 1
        </button>
      </div>
      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}

      {data.Score > 100 ? <h1 className="status">India Won</h1> : ""}
    </div>
  );
}

export default App;
