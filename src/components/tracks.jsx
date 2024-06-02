import "./tracks.css";
import React, { useState } from "react";

const Tracks = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    courseOfStudy: "",
    yearOfStudy: "",
    selectedTrack: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
  };
  return (
    <section className="tracks-section">
      <br />
      <br />
      <br />
      <br />
      <h1>Tracks</h1>
      <h3>Tracks Madness: Choices Galore!</h3>
      <div className="intros">
        <p>
          Ever dreamed of being a Cyber security whiz, or maybe a Cloud
          engineering extraordinaire? How about thrilling the world with your
          UI/UX designs, or exploring the realms of the Power Platform? We’ve
          got it all in our customized learning tracks! Just select your
          favorite discipline, sit back and let the knowledge sink in!
        </p>
        <p>
          Our tracks offer specialized learning to sharpen your skills in your
          chosen area. Web Development, Mobile Apps Development, you name it,
          we’ve got it covered! Each track comes with fun projects and
          real-world scenarios you can sink your teeth into. It’s never a dull
          moment at MUTC.
        </p>
      </div>
      <div className="sneakpeeks">
        <h4>Track Sneak Peeks</h4>
        <div className="imgs">
          <img className="tracks-img" src="../public/code.jpeg" alt="" />
          <img
            className="tracks-img"
            src="../public/cybersecurity.jpeg"
            alt=""
          />
        </div>
      </div>
      <h3>Dynamic Learning Tracks</h3>
      <div className="tracks">
        <div className="programs">
          <div className="info">
            <h6>Cyber Security</h6>
            <p>
              Unleash your inner cyber knight and protect virtual kingdoms with
              cutting edge security protocols.
            </p>
          </div>
          <div className="info">
            <h6>Cloud Engineering</h6>
            <p>
              Unleash your inner cyber knight and protect virtual kingdoms with
              cutting edge security protocols.
            </p>
          </div>
          <div className="info">
            <h6>Web Development</h6>
            <p>
              Unleash your inner cyber knight and protect virtual kingdoms with
              cutting edge security protocols.
            </p>
          </div>
          <div className="info">
            <h6>Mobile Apps Development</h6>
            <p>
              Unleash your inner cyber knight and protect virtual kingdoms with
              cutting edge security protocols.
            </p>
          </div>
          <div className="info">
            <h6>UI/UX design</h6>
            <p>
              Unleash your inner cyber knight and protect virtual kingdoms with
              cutting edge security protocols.
            </p>
          </div>
          <div className="info">
            <h6>Power Platform</h6>
            <p>
              Unleash your inner cyber knight and protect virtual kingdoms with
              cutting edge security protocols.
            </p>
          </div>
        </div>
        <img src="./assets/code.jpeg" alt="" />
      </div>
      <div className="encouragement">
        <div className="enroll">
          <p>
            So you’ve made it this far, impressed, intrigued, or downright
            hooked? Great, that’s exactly what we were aiming for! Now don’t
            hold back, take a leap into the world of fun learning, Step right
            up, and make your choice. Register for your specialized track now!
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="courseOfStudy"
            placeholder="Current Course of Study"
            value={formData.courseOfStudy}
            onChange={handleChange}
          />
          <input
            type="text"
            name="yearOfStudy"
            placeholder="Year of Study"
            value={formData.yearOfStudy}
            onChange={handleChange}
          />
          <select
            name="selectedTrack"
            placeholder="Select Track"
            value={formData.selectedTrack}
            onChange={handleChange}
          >
            <option value="Cyber Security">Cyber Security</option>
            <option value="Cloud Engineering">Cloud Engineering</option>
            <option value="Web Development">Web Development</option>
            <option value="Mobile Apps Development">
              Mobile Apps Development
            </option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Power Platform">Power Platform</option>
            <option value="All Tracks">All Tracks</option>
          </select>
          <button type="submit">Enroll Now</button>
        </form>
      </div>
    </section>
  );
};

export default Tracks;
