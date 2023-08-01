import AboutImage from "../../assets/profile.jpeg";
import CV from "../../assets/Prakash1.pdf";
import { HiDownload } from "react-icons/hi";
import data from "./data";
import Card from "../../components/Card";
import "./about.css";

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About Image" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p style={{textAlign:'justify'}} >
            Hello, I'm Prakash Singh, and my journey in web development has been
            nothing short of exciting. Although I hold a B.Tech degree in
            Mechanical Engineering, my true passion lies in website designing
            and coding. Embracing this newfound love, I have wholeheartedly
            delved into front-end development, and the process has been
            immensely rewarding. I am an ardent learner, constantly seeking
            opportunities to expand my skill set and keep up with the rapidly
            evolving tech landscape. With proficiency in HTML, CSS, and
            JavaScript, I've successfully completed numerous front-end projects.
            But I didn't stop there! My thirst for knowledge has led me to
            explore the realm of back-end development. Join me as I
            embark on this fulfilling and ever-evolving adventure in the world
            of web development.
          </p>
          <p style={{textAlign:'justify'}}>
            Currently, I'm immersed in learning technologies like Node.js,
            Express.js, and MongoDB, eager to build robust and dynamic
            applications. This journey has been a testament to my unwavering
            dedication and enthusiasm for web development. 
          </p>
          <a href={CV} download className="btn primary">
            Download CV <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
