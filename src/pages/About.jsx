import aerialView from '../images/arial-view-garden.jpg';
import gardenOrchid from '../images/garden-orchid.jpg';
import sunflower from '../images/sunflower.jpeg';
import sunset from '../images/garden-sunset.jpg';

export default function About() {
  return (
    <div className="about-page">
      <section
        className="hero hero-banner"
        style={{ backgroundImage: `url(${sunset})` }}
      >
        <div className="hero-content">
          <h1>About the garden</h1>
          <p>
            A volunteer-run community garden in the heart of Yarra Bend Park, Kew.
          </p>
        </div>
        <svg
          className="hero-wave"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="about-wave-gradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#4a7a2a" />
              <stop offset="100%" stopColor="#2f4a1f" />
            </linearGradient>
          </defs>
          <path
            d="M0,64 C240,128 480,0 720,32 C960,64 1200,128 1440,80 L1440,120 L0,120 Z"
            fill="url(#about-wave-gradient)"
          />
        </svg>
      </section>

      <div className="about-sections">
        {/* Intro card: Our Roots & Vision with the aerial photo */}
        <section className="about-card about-card--intro about-card--accent-roots">
          <figure className="prose-figure">
            <img src={aerialView} alt="Aerial view of the Willsmere Kitchen Garden" />
          </figure>
          <div className="about-card-text">
            <h2>Our Roots &amp; Vision</h2>
            <p>
              Established in 2017 as a collaboration between Willsmere Estate residents
              and Parks Victoria, the WKG is a cherished space dedicated to sustainable
              food security, community connection, and the sharing of horticultural
              wisdom.
            </p>
            <p>
              While we are an open and welcoming sanctuary for all visitors, we kindly
              ask that you respect the produce grown in individual plots.
            </p>
          </div>
        </section>

        {/* A Nod to History */}
        <section className="about-card about-card--dark about-card--accent-history">
          <h2>A Nod to History</h2>
          <p>
            The garden's design pays homage to the site's heritage. Once a kitchen
            garden that provided sustenance for the staff and residents of the
            neighbouring Willsmere Asylum, our first stage mirrors the formal
            aesthetic of those original grounds.
          </p>
        </section>

        {/* What we do — text plus two photos in three equal columns */}
        <section className="about-card about-card--with-figure about-card--three about-card--accent-do">
          <div className="about-card-text">
            <h2>What we do</h2>
            <ul>
              <li>Monthly working bees — everyone welcome, no experience needed.</li>
              <li>Seed saving, composting and sustainable growing.</li>
              <li>Seasonal harvests shared between members.</li>
            </ul>
          </div>
          <figure className="prose-figure">
            <img src={gardenOrchid} alt="An orchid flowering in the garden" />
          </figure>
          <figure className="prose-figure">
            <img src={sunflower} alt="A sunflower blooming in the garden" />
          </figure>
        </section>

        {/* Two cards side by side: get involved & when/where */}
        <div className="about-row">
          <section className="about-card about-card--dark about-card--accent-involved">
            <h2>Get involved</h2>
            <p>
              New members are always welcome. Drop in during a working bee, or get in
              touch with us to find out more.
            </p>
            <p>
              Please note: all members are required to register with{' '}
              <a
                href="https://www.parks.vic.gov.au/get-into-nature/volunteering"
                target="_blank"
                rel="noopener noreferrer"
              >
                Parks Victoria
              </a>{' '}
              as a volunteer and hold a valid Working with Children Check.
            </p>
            <p>
              <a
                href={`${import.meta.env.BASE_URL}wkg-membership-form.pdf`}
                download
              >
                Download our membership form (PDF)
              </a>
            </p>
          </section>

          <section className="about-card about-card--cream about-card--accent-when">
            <h2>When &amp; where</h2>
            <ul>
              <li>
                <strong>Working bees:</strong> Monthly (check Facebook for details).
              </li>
              <li>
                <strong>Location:</strong> Willsmere, Wiltshire Drive, Kew VIC Australia
                3101.
              </li>
            </ul>
            <h2>Contact</h2>
            <p>
              The fastest way to contact us is via{' '}
              <a
                href="https://www.facebook.com/WillsmereKitchenGarden"
                target="_blank"
                rel="noopener noreferrer"
              >
                our Facebook page
              </a>{' '}
              or <a href="mailto:willsmerekitchengarden@gmail.com">email</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
