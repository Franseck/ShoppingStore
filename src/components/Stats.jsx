import React from "react";
import bg from "../assets/aaa.gif"

const Stats = () => {
  return (
    <div
  className="hero min-h-screen"
  style={{
    backgroundImage:"url("+bg+")",
backgroundSize:"20rem",

       
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Seckin's Store</h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Products</button>
    </div>
  </div>
</div>
  );
};

export default Stats;