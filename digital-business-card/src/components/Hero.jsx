import headshot from "../assets/Headshot.jpg";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <img className="hero-img" src={headshot} alt="picture of me" />
      <h2>Software Engineer</h2>
    </div>
  );
}

export default Hero;
