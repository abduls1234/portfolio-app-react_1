import SocialMedia from '../SocialMedia/SocialMedia';
import EmailComponent from '../EmailComponent/EmailComponent';
import img from "../../assets/Hero Image.png"
import helloimg from "../../assets/Wave.svg"
import './Home.css';

const Home = () => {
  const handleDownloadCV = () => {
    // Add your CV download logic here
    console.log('Download CV clicked');
  };

  const handleGetInTouch = () => {
    // Add your get in touch logic here
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="home section">
      <div className="container">
        <div className="home-grid">
          <div className="home-social">
            <SocialMedia />
          </div>
          
          <div className="home-content">
            <div className="home-text">
              <h1 className="hello-heading">Hello!</h1>
              <h2 className="name-heading">
                I'm <span className="name-underline">Anish</span> <span><img src={helloimg} alt="helloimg" /></span>
              </h2>
              <p className="description">
                UI/UX Designer, Front-End Developer & Thinker. Based in India.
              </p>
              <div className="home-buttons">
                <button className="btn btn-download" onClick={handleDownloadCV}>
                  Download CV
                </button>
                <button className="btn btn-contact" onClick={handleGetInTouch}>
                  Get in Touch!
                </button>
              </div>
            </div>
          </div>
          
          <div className="home-image">
            <div className="image-placeholder">
              <img 
                src={img}
                alt="Anish Kumar Sinha" 
                className="profile-image"
              />
            </div>
            <div className="home-email">
              <EmailComponent />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;