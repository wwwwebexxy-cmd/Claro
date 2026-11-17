import { FaStar, FaDiamond } from 'react-icons/fa6';
import './Marqueebar.css';

const LOGO = '/assets/claro-logo.png';

const items = [
  { icon: 'diamond', text: 'Painting Works' },
  { icon: 'star', text: 'Texture Paint' },
  { icon: 'diamond', text: 'Gold Plating' },
  { icon: 'star', text: 'Chrome Finishing' },
  { icon: 'diamond', text: 'Dipping & Spray Painting' },
  { icon: 'star', text: 'Bathtub Refinishing' },
  { icon: 'diamond', text: 'Epoxy Floor Coating' },
  { icon: 'star', text: 'Water Tank Cleaning' },
  { icon: 'diamond', text: 'Technical Services' },
  { icon: 'star', text: 'Building Cleaning' },
];

function MarqueeLap({ suffix = '' }) {
  return (
    <>
      <span className="marquee-logo-wrap">
        <img src={LOGO} alt="CLARO Umm Al Quwain" className="marquee-logo" />
      </span>

      {items.map(({ icon, text }, i) => (
        <span key={`${suffix}-${i}`} className="marquee-item">
          {icon === 'star'
            ? <FaStar className="marquee-icon" />
            : <FaDiamond className="marquee-icon" />}
          {text}
        </span>
      ))}
    </>
  );
}

function MarqueeBar() {
  return (
    <div className="marquee-bar" aria-label="Promotions ticker">
      <div className="marquee-track">
        <MarqueeLap suffix="a" />
        <MarqueeLap suffix="b" />
      </div>
    </div>
  );
}

export default MarqueeBar;
