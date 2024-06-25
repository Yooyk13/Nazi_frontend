import React, { useEffect, useRef } from "react";
import axios from "axios";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Plans from "./components/Plans";
import Reviews from "./components/Reviews";
import Features from "./components/Features";

export default function App() {
  const hasTrackedView = useRef(false);

  useEffect(() => {
    if (!hasTrackedView.current) {
      hasTrackedView.current = true;
      axios
        .post("https://nazicommunity.xyz:5000/api/track-view")
        .then((response) => {
          // console.log("View tracked successfully:", response.data);
        })
        .catch((error) => {
          console.error("Error tracking view:");
        });
    }
  }, []);

  return (
    <div className="bg-black">
      <div id="home">
        <Home />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="plans">
        <Plans />
      </div>
      <div id="reviews">
        <Reviews />
      </div>
      <Footer />
    </div>
  );
}
