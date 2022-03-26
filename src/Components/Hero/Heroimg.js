import React from "react";
import "./Heroimg.css";
function Hero() {
  return (
    <div>
      <div>
        <div
          className="hero-img"
          style={{
            background: `linear-gradient(190deg, #ffffff , rgba(0, 0, 1, 0)), url('https://flo.health/uploads/media/sulu-1200x630/09/2349-A%20baby%20sleeping%20in%20a%20crib%20that%E2%80%99s%20free%20of%20pillows.jpg?v=1-0&inline=1')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          
        >
          
          
          <div className="content">
          <h1 id="animate" class="animate__animated animate__bounce">Care about your baby</h1>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Hero;
