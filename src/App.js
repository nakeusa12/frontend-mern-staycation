import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "assets/scss/style.scss";
// import LandingPage from "pages/LandingPage";
// import DetailsPage from "pages/DetailsPage";
// import Checkout from "pages/Checkout";
import Example from "pages/Example";
const LandingPage = React.lazy(() => import("pages/LandingPage"));
const DetailsPage = React.lazy(() => import("pages/DetailsPage"));
const Checkout = React.lazy(() => import("pages/Checkout"));
import Dual from "assets/images/dual-ball.gif";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, {});

  return (
    <div className="App">
      {loading && (
        <div
          className="fixed-top flex"
          style={{
            height: "100vh",
            width: "100%",
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={Dual} alt="Loading" />
        </div>
      )}
      <Router>
        <Suspense fallback={<div></div>}>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/properties/:id" component={DetailsPage} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/example" component={Example} />
          </Switch>
        </Suspense>
      </Router>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
