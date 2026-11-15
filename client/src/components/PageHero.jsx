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
          <Photo name={image} eager sizes="(min-width: 860px) 42vw, 92vw" />
        </div>
      </div>
    </section>
  );
}
