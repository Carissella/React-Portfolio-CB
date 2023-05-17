import React from "react";
import "../assets/css/home.css";
import myPhoto from "../assets/images/IMG_6742.jpg";

function Home() {
  return (
    <div className="home-container">
      <img src={myPhoto} alt="Me" className="profile-photo" />
      <div>
        <h1 className="title">Carisse's Portfolio</h1>
        </div>
            <section class="grid grid-40">
                <div class="grid__item">
                    <h2>Hi, I'm Carisse and I'm a Full Stack Software Engineer.</h2>
                </div>
                <div class="grid__item card">                    <div class="grid grid-50">
                    </div>
                </div>
                
            </section>
    </div>
  );
}
export default Home;