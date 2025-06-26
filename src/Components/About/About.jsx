import './About.css';
import handimg from "../../assets/abothand.png";
import vector1 from "../../assets/Vector 1.png";
import vector3 from "../../assets/Vector 3.png";
import vector4 from "../../assets/Vector 4.png";
import vector5 from "../../assets/Vector 5.png";

const About = () => {
  return (
    <section id="about" className="about">
      <div className='about_section'>
        <div className='left_Setion' style={{ backgroundImage: `url(${vector1})` }}>
          <img className='leftImg' src={handimg} alt="left img" />
        </div>
        <div className='middele_setion'>
          <div className='top_heading'>
            <h1><span>T</span>his is it. ;)</h1>
            <span className='topl_line'></span>
          </div>
          <p>
            Anish Kr. Sinha is an Indian <span> UI/UX Designer & Front End Developer </span>with a passion for designing beautiful and functional user experiences. Typically, he's driven & permanently curious. He's obsessed with designing things and even more obsessed with designing cool & clean stuff for the web and mobile. He has been in the business of creating since he hung his first painting on the wall when he was 11.
          </p>
          <p>
            He holds a  <span>bachelor degree in Computer Applications</span>. During his graduation, he has been actively involved in the web design community for the last 3 years. He has designed websites for small businesses, events, nonprofits and more. Currently he's based in Bihar, India. Where he's working as an independent creative.
          </p>
          <p>
            His interests, however, extend beyond the web and he loves helping people with branding and print design. He even loves designing <span>3D floor plan</span>.
          </p>
          <p>
            When he's not designing, he's probably hanging out with his girlfriend, watching series, sketching or messing around on something inspired by YouTube tutorials.
          </p>
          <br  className='bottom_line'/>
        </div>
        <div className='middeleANDleft_setion'>
          <img src={vector4} alt="midle and left img" />
        </div>
        <div className='middeleAndright_setion'>
          <img src={vector5} alt="midle and right img" />
        </div>
        <div className='right_setion'>
          <img src={vector3} alt="about left img" />
        </div>
      </div>
    </section>
  );
};

export default About;