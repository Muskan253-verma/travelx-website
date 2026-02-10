import "./Features.css";

function Features() {
  return (
<section id="features" className="features">

      <h2 className="features-title">Our Features</h2>

      <div className="features-container">
        <div className="feature-card">
          <h3>Fast Booking</h3>
          <p>Book your trips in just a few clicks.</p>
        </div>

        <div className="feature-card">
          <h3>Secure Payments</h3>
          <p>Your payments are protected and safe.</p>
        </div>

        <div className="feature-card">
          <h3>Best Destinations</h3>
          <p>Explore hand-picked destinations.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
