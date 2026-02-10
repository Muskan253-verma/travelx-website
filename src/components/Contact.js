import "./Contact.css"


function Contact() {
    return (
        <section className="contact-section" id="contact">
  <div className="contact-container">
    <div className="contact-heading">
      <h2 className="contact-title">Let’s talk</h2>
      <p className="contact-subtitle">
        Send a message and we’ll get back to you soon.
      </p>

      <div className="contact-highlights">
        <div>• Fast response (within 24–48 hours)</div>
        <div>• Project inquiries & partnerships</div>
        <div>• Support questions welcome</div>
      </div>
    </div>

    <div className="contact-panel">
      <form className="contact-form">
        <div className="form-row">
          <label>Name</label>
          <input placeholder="Your name" />
        </div>

        <div className="form-row">
          <label>Email</label>
          <input type="email" placeholder="you@example.com" />
        </div>

        <div className="form-row">
          <label>Message</label>
          <textarea placeholder="Tell us what you need..." />
        </div>

        <div className="contact-actions">
          <button className="btn-primary" type="submit">Send Message</button>
          <button className="btn-secondary" type="button">Reset</button>
        </div>

        <p className="contact-note">
          By sending this message, you agree to be contacted about your inquiry.
        </p>
      </form>
    </div>
  </div>
</section>

    );
}

export default Contact;


