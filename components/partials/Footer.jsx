import { FaHeart } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';
const Year = new Date().getFullYear();
function Footer() {
  return (
    <footer className="site-footer">
      <p>Copyright &copy; {Year} Dave Hill</p>
      <p>created with <span aria-label="love" className="heart"><FaHeart /></span> using <span aria-hidden="true"><SiNextdotjs /></span> Next.js</p>
    </footer>
    );
}

export default Footer;