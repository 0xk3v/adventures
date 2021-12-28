import React from "react";
import { Button } from "./Button";
import { FaPlayCircle } from "react-icons/fa";
import "./Home.css";
import Cards from "./Cards";

const Home = () => {
  return (
    <>
      <div className="home-container">
        {/* <video src="/videos/video.mp4" autoPlay muted loop></video> */}
        <h1>Adventure Awaits</h1>
        <p>What are you waiting for?</p>
        <div className="home-btns">
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            GET STARTED
          </Button>
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            WATCH TRAILER <FaPlayCircle />
          </Button>
        </div>
      </div>
      <Cards />
    </>
  );
};

export default Home;
