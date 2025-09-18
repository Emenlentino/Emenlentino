function Contact() {
  return (
    <section id="contact" className="bg-white py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h2 className="text-center text-primary fw-bold mb-4">Contact Me</h2>
            <form className="row g-4 bg-light p-4 rounded-4 shadow-sm">
              <div className="col-md-6">
                <input type="text" className="form-control form-control-lg" placeholder="Your Name" />
              </div>
              <div className="col-md-6">
                <input type="email" className="form-control form-control-lg" placeholder="Your Email" />
              </div>
              <div className="col-12">
                <textarea className="form-control form-control-lg" rows="5" placeholder="Your Message"></textarea>
              </div>
              <div className="col-12 text-center">
                <button type="submit" className="btn btn-primary px-5 py-2 rounded-pill fw-semibold">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
