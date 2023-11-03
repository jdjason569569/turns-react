import Turns from "../createTurns/turns.componen";
import "../home/home.css"

function Home() {
  return (
    <div className="container">
      <div className="turns-container">
        <Turns></Turns>
      </div>
      <div className="search-container"></div>
      <div className="panel-container"></div>
      <div className="statics-container"></div>
    </div>
  );
}

export default Home;
