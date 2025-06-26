import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaGithub, 
  FaLinkedinIn, 
  FaTelegramPlane 
} from 'react-icons/fa';
import './SocialMedia.css';

const SocialMedia = () => {
  const socialLinks = [
    { icon: <FaFacebookF />, url: 'https://facebook.com', label: 'Facebook' },
    { icon: <FaInstagram />, url: 'https://instagram.com', label: 'Instagram' },
    { icon: <FaTwitter />, url: 'https://twitter.com', label: 'Twitter' },
    { icon: <FaGithub />, url: 'https://github.com', label: 'GitHub' },
    { icon: <FaLinkedinIn />, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <FaTelegramPlane />, url: 'https://telegram.org', label: 'Telegram' },
  ];

  return (
    <div className="social-media">
      <div className="social-icons">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label={social.label}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;