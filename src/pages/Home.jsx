import banner from '../images/city-sunset.jpeg';
import veggieBucket from '../images/veggie-bucket.jpg';

const FACEBOOK_URL = 'https://www.facebook.com/groups/willsmerekitchengarden/';

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
            your neighbours. Join the conversation on Facebook to keep up with the latest news.
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

        <section className="home-grid" aria-label="Garden highlights and community">
          <figure className="home-grid-figure">
            <img src={veggieBucket} alt="Freshly harvested vegetables in a bucket" />
          </figure>

          <div className="feed-section" aria-labelledby="connect-heading">
            <h2 id="connect-heading">Connect with us on Facebook</h2>
            <div className="fb-cta">
              <p>
                Our day-to-day news, working bee announcements and harvest updates all
                happen in our private Facebook group. Request to join to chat with other
                members and stay in the loop.
              </p>
              <a
                className="fb-cta-button"
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                  <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.3.2 2.3.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6V12h2.9l-.5 2.9h-2.4v7A10 10 0 0 0 22 12z" />
                </svg>
                Visit our Facebook group
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
