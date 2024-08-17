import "./TechStack.css";
import c from '../assets/c.png'
import js from '../assets/js.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import python from '../assets/python.png'

function TechStack() {
  return (
    <div className="techstack-container">
      <h1>TechStack</h1>
      <div className="tech-logos">
        <img className='logo' src={c} alt="" />
        <img className='logo' src={js} alt="" />
        <img className='logo' src={html} alt="" />
        <img className='logo' src={css} alt="" />
        <img className='logo' src={python} alt="" />
      </div>
    </div>
  );
}

export default TechStack;
