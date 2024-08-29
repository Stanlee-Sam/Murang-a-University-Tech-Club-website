import "./events.css";

import cyberSecurity from '/public/Cybersecurity.jpeg'
import UIUX from '/public/UIUX.jpeg'
import WebDev from '/public/Web Development.jpeg'
import MobileDev from '/public/Mobile dev.jpeg'
import Cloud from '/public/Cloud Computing.jpeg'
import Power from '/public/Power platform.jpeg'

const Events = () => {
  return (
    <section className="events-section">
     
    

      <h1>Events</h1>

      <div className="container">
        <div className="item-container">
          <div className="img-container">
            <img src= {cyberSecurity }alt="" />
          </div>
          <div className="body-container">
            <div className="overlay"></div>
            <div className="event-info">
              <p className="title">Cyber Security</p>
              <div className="separator"></div>

              <div className="additional-info">
                <p className="info">
                  <i className="fas fa-map-marker-alt"></i>
                  Venue : F04 Lab
                </p>
                <p className="info">
                  <i className="fas fa-map-calender-alt"></i>
                  Every Monday 4pm to 7pm
                </p>
                <p className="info-description">
                  Battle for Digital Supremacy
                  <p>Webster Ifedha</p>
                </p>
              </div>
            </div>
            <button className="action">Explore</button>
          </div>
        </div>
        <div className="item-container">
          <div className="img-container">
            <img src={UIUX} alt="" />
          </div>
          <div className="body-container">
            <div className="overlay"></div>
            <div className="event-info">
              <p className="title">UI/UX </p>
              <div className="separator"></div>

              <div className="additional-info">
                <p className="info">
                  <i className="fas fa-map-marker-alt"></i>
                  Venue : F04 Lab
                </p>
                <p className="info">
                  <i className="fas fa-map-calender-alt"></i>
                  Every Tuesday 5pm to 8pm
                </p>
                <p className="info-description">
                  Crafting Digital Addiction
                  <p>Manase Gunga</p>
                </p>
              </div>
            </div>
            <button className="action">Explore</button>
          </div>
        </div>
        <div className="item-container">
          <div className="img-container">
            <img src={WebDev} alt="" />
          </div>
          <div className="body-container">
            <div className="overlay"></div>
            <div className="event-info">
              <p className="title">Web Development </p>
              <div className="separator"></div>

              <div className="additional-info">
                <p className="info">
                  <i className="fas fa-map-marker-alt"></i>
                  Venue : F04 Lab
                </p>
                <p className="info">
                  <i className="fas fa-map-calender-alt"></i>
                  Every Wednesday 6pm to 9pm
                </p>
                <p className="info-description">
                  Spinning the Web of Wonder
                  <p>Carolyne Githenduka</p>
                </p>
              </div>
            </div>
            <button className="action">Explore</button>
          </div>
        </div>
        <div className="item-container">
          <div className="img-container">
            <img src={MobileDev} alt="" />
          </div>
          <div className="body-container">
            <div className="overlay"></div>
            <div className="event-info">
              <p className="title">Mobile App Development </p>
              <div className="separator"></div>

              <div className="additional-info">
                <p className="info">
                  <i className="fas fa-map-marker-alt"></i>
                  Venue : F04 Lab
                </p>
                <p className="info">
                  <i className="fas fa-map-calender-alt"></i>
                  Every Thursday 4pm to 7pm
                </p>
                <p className="info-description">
                  Power in your Palms
                  <p>Stanley Amunze</p>
                </p>
              </div>
            </div>
            <button className="action">Explore</button>
          </div>
        </div>
        <div className="item-container">
          <div className="img-container">
            <img src={Cloud} alt="" />
          </div>
          <div className="body-container">
            <div className="overlay"></div>
            <div className="event-info">
              <p className="title">Cloud Engineering </p>
              <div className="separator"></div>

              <div className="additional-info">
                <p className="info">
                  <i className="fas fa-map-marker-alt"></i>
                  Venue : F04 Lab
                </p>
                <p className="info">
                  <i className="fas fa-map-calender-alt"></i>
                  Every Friday 3pm to 6pm
                </p>
                <p className="info-description">
                  Up in the Air with Binary
                  <p>Paul Karanja;</p>
                </p>
              </div>
            </div>
            <button className="action">Explore</button>
          </div>
        </div>
        <div className="item-container">
          <div className="img-container">
            <img src={Power} alt="" />
          </div>
          <div className="body-container">
            <div className="overlay"></div>
            <div className="event-info">
              <p className="title">Power Platform</p>
              <div className="separator"></div>

              <div className="additional-info">
                <p className="info">
                  <i className="fas fa-map-marker-alt"></i>
                  Venue : F04 Lab
                </p>
                <p className="info">
                  <i className="fas fa-map-calender-alt"></i>
                  Every Saturday 1pm to 4pm
                </p>
                <p className="info-description">
                  Harness the Force
                  <p>Evyonn Mbithe</p>
                </p>
              </div>
            </div>
            <button className="action">Explore</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
