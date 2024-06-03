// import { officials } from "../assets/officialsData";
import "./leadership.css";

const Leadership = () => {
  return (
    <>
      <section className="leadership-section">
        <br />
        <br />
        <br />
        <br />
        <h1 className="leadership-heading">CTRL FREAKS</h1>
        <div className="big_three">
          <div className="card0">
            <img
              className="img-leadership"
              src="../public/officials/student1.jpeg"
              alt=""
            />
            <h3>Dr John</h3>
            <p>Patron</p>
          </div>
          <div className="card0">
            <img
              className="img-leadership"
              src="../public/officials/student1.jpeg"
              alt=""
            />
            <h3>Victory</h3>
            <p>Chairperson</p>
          </div>
          <div className="card0">
            <img
              className="img-leadership"
              src="../public/officials/student1.jpeg"
              alt=""
            />
            <h3>Allan</h3>
            <p>Vice Chairperson</p>
          </div>
        </div>
        <h3 className="leadership-title">Executive Officers</h3>
        <p>Meet the operational ninjas canvassing the future of tech.</p>

        <div className="executives">
          <div className="executive-cards">
            <div className="card1">
              <img
                className="img-leadership"
                src="../public/officials/student1.jpeg"
                alt=""
              />
              <h3>Bridget</h3>
              <p>Secretary</p>
            </div>
            <div className="card2">
              <img
                className="img-leadership"
                src="../public/officials/student1.jpeg"
                alt=""
              />
              <h3>Ruth</h3>
              <p>Treasurer</p>
            </div>
          </div>
        </div>

        <h3 className="leadership-title">Tech Leads</h3>
        <p>
          The maestros dictating the rhythm and pacing of technological
          innovation.
        </p>
        <div className="techleads">
          <div className="techleads-cards">
            <div className="card1">
              <img
                className="img-leadership"
                src="../public/officials/student1.jpeg"
                alt=""
              />
              <h3>Webster</h3>
              <p>Cyber Security lead</p>
            </div>
            <div className="card2">
              <img
                className="img-leadership"
                src="../public/officials/student1.jpeg"
                alt=""
              />
              <h3>Manase</h3>
              <p>UI/UX Lead</p>
            </div>
          </div>
          <div className="techleads-cards">
            <div className="card3">
              <img
                className="img-leadership"
                src="../public/officials/student1.jpeg"
                alt=""
              />
              <h3>Carolyne</h3>
              <p>Web Dev Lead</p>
            </div>
            <div className="card4">
              <img
                className="img-leadership"
                src="../public/officials/student1.jpeg"
                alt=""
              />
              <h3>Stanley</h3>
              <p>Mobile App Dev Lead</p>
            </div>
          </div>
        </div>
        <h3 className="leadership-title">Cloud Computers</h3>
        <p>Meet the rainmakers of the digital storm.</p>
        <div className="cloud">
          <div className="cloud-cards">
            <div className="card">
              <img
                className="img-leadership"
                src="../public/officials/student1.jpeg"
                alt=""
              />
              <h3>Paul</h3>
              <p>Cloud Engineering Lead</p>
            </div>
            <div className="card">
              <img
                className="img-leadership"
                src="../public/officials/student1.jpeg"
                alt=""
              />
              <h3>Evyonn</h3>
              <p>Power Platform Lead</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Leadership;
