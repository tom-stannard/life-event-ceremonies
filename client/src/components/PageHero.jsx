import Photo from './Photo.jsx';

// Heading and lead beside a photo in the signature arch frame.
export default function PageHero({ heading, lead, image, children }) {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>{heading}</h1>
        {lead && <p className="lead">{lead}</p>}
        {children}
      </div>
      <div className="hero-photo">
        <div className="arch arch-outlined">
          <Photo name={image} eager box={0.8} sizes="(min-width: 860px) 30rem, (min-width: 480px) 26rem, 82vw" />
        </div>
      </div>
    </section>
  );
}
