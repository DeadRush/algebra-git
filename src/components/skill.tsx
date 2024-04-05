import htmlIcon from "../assets/icons8-html-100.png";
import cssIcon from "../assets/icons8-css-100.png";
import jsIcon from "../assets/icons8-javascript-100.png";
import guitarIcon from "../assets/icons8-guitar-100.png";

const Skill = () => {
  return (
    <>
      <h1 className="skills__heading">Skills</h1>
      <div className="skills">
        <div className="skills__item">
          <img src={htmlIcon} alt="Html Icon" />
          <p>HTML</p>
        </div>
        <div className="skills__item">
          <img src={cssIcon} alt="CSS Icon" />
          <p>CSS and SCSS</p>
        </div>
        <div className="skills__item">
          <img src={jsIcon} alt="JS Icon" />
          <p>JavaScript</p>
        </div>
        <div className="skills__item">
          <img src={guitarIcon} alt="JS Icon" />
          <p>Playing Guitar</p>
        </div>
      </div>
    </>
  );
};
export default Skill;
