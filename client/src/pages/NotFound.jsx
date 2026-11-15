import { Link } from 'react-router';

export default function NotFound() {
  return (
    <section className="page-intro not-found">
      <h1>This page has wandered off</h1>
      <p className="lead">The page you’re after doesn’t exist, or it’s moved.</p>
      <p>
        <Link to="/" className="button">
          Go to the home page
        </Link>
      </p>
    </section>
  );
}
