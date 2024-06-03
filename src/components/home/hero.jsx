import "./hero.css";

const Hero = () => {
  return (
    <>
      <section>
        <div className="hero"></div>
        <div className="main">
          <h1>Murang'a Tech Club</h1>
          <p>
            Feel the surge of inspiration flow through you at Murang’a
            University Tech Club (MUTC). You are one clicking step away from
            entering the premier technology club at Murang’a University.
          </p>
          <div className="btn">
            <button className="hero-button">Get Started</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
