import { Link } from "react-router-dom";
import Gap from "./Gap";
import "./Home.css";
import WordFlick from "./WordFlick";

function Home() {
  return (
    <div className="home-container">
      <div className="header-content">
        <div className="logo-container">
          <img src="src/component/img/112.png" className="logo-main" alt="Logo 1" />
          <Gap x={20} />
          <WordFlick/>
          {/* <img src="src/component/img/name.png" className="logo-sub" alt="Logo 2" /> */}
          <Gap x={14} />
          <h2 className="main-text">
            This project demonstrates high technical feasibility owing to the advanced capabilities of sensor technology, which efficiently captures diverse student gestures within the classroom environment. This project demonstrates high technical feasibility owing to the advanced capabilities of sensor technology, which efficiently captures diverse student gestures within the classroom environment.
          </h2>
          <h6 className="sub-text">Discover a new way of learning!</h6>
        </div>
      </div>
      <div className="action-buttons">
        <img src="src/component/img/g1.gif" className="action-image" alt="Animated Action" />
        <div className="button-container">
          <Link
            to="/signin"
            className="button sign-in"
          >
            Log in
          </Link>
          <Link
            to="/signup"
            className="button sign-up"
          >
            Get started
          </Link>
        </div>
        
      </div>
    </div>
  );
}

export default Home;
