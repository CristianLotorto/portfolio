import "./about.css";

const codingImg = `${import.meta.env.VITE_PUBLIC_URL}/img/coding.png`

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
         <br /> <span className="info-name">Cristian Lotorto</span>
         <br /> <span className="full-stack">Full-Stack developer</span>
        </div>
        <div className="about-photo">
          <img
            src={codingImg}
            className="picture"
          />
        </div>
      </div>
    </div>
  );
}

export default About;