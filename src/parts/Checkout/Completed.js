import React from "react";
import Fade from "react-reveal/Fade";
import completedImg from "assets/images/completed.jpg";

export default function Completed() {
  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-4">
            <img src={completedImg} alt="Complete Img" className="img-fluid" />
            <p className="text-gray-500">
              We will inform you via email later once the transation has been
              accepted
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
}
