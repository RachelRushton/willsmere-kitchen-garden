import FacebookFeed from '../components/FacebookFeed.jsx';
import banner from '../images/city-sunset.jpeg';
import veggieBucket from '../images/veggie-bucket.jpg';

export default function Home() {
  return (
    <div className="home-page">
      <section
        className="hero hero-banner"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="hero-content">
          <h1>Welcome to our community garden</h1>
          <p>
            Willsmere Kitchen Garden is a place to grow food, share knowledge and meet
            your neighbours. Follow our latest news straight from Facebook below.
          </p>
        </div>
        <svg
          className="hero-wave"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="hero-wave-gradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#4a7a2a" />
              <stop offset="100%" stopColor="#2f4a1f" />
            </linearGradient>
          </defs>
          <path
            d="M0,64 C240,128 480,0 720,32 C960,64 1200,128 1440,80 L1440,120 L0,120 Z"
            fill="url(#hero-wave-gradient)"
          />
        </svg>
      </section>

      <div className="home-sections">
        <section className="home-intro" aria-label="About the Willsmere Kitchen Garden">
          <p>
            The Willsmere Kitchen Garden (WKG) is a vibrant community hub nestled within
            Yarra Bend Park in Kew—the largest expanse of natural bushland near Melbourne's
            city center. Situated at the historic confluence of the Yarra River and Merri
            Creek, the park holds deep significance for the Wurundjeri people, a heritage
            honored today by the nearby Koori Garden and Dights Falls.
          </p>
        </section>

        <section className="home-grid" aria-label="Garden highlights and latest updates">
          <figure className="home-grid-figure">
            <img src={veggieBucket} alt="Freshly harvested vegetables in a bucket" />
          </figure>

          <div className="feed-section" aria-labelledby="feed-heading">
            <h2 id="feed-heading">Latest from Facebook</h2>
            <FacebookFeed />
            {/* <p className="feed-fallback">
              Can't see the feed? View our page directly on{' '}
              <a
                href="https://www.facebook.com/WillsmereKitchenGarden"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>.
            </p> */}
          </div>
        </section>
      </div>
    </div>
  );
}
