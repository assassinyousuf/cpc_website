import { useState } from 'react';

const socialLinks = [
  { 
    name: 'Facebook', 
    url: 'https://www.facebook.com/groups/diucsecpc/', 
    icon: 'fab fa-facebook',
    color: 'bg-blue-600 hover:bg-blue-700'
  },
  { 
    name: 'LinkedIn', 
    url: 'https://www.linkedin.com/company/diucsecpc', 
    icon: 'fab fa-linkedin',
    color: 'bg-blue-700 hover:bg-blue-800'
  },
  { 
    name: 'YouTube', 
    url: 'https://www.youtube.com/@diucsecpc', 
    icon: 'fab fa-youtube',
    color: 'bg-red-600 hover:bg-red-700'
  },
];

const faqs = [
  {
    q: 'How do I become a CPC member?',
    a: 'Register through our platform and attend our orientation sessions. Membership is open to all DIU CSE students.'
  },
  {
    q: 'How can I participate in contests?',
    a: 'Check the Events section regularly and register for upcoming programming contests and competitions.'
  },
  {
    q: 'Are workshops free for members?',
    a: 'Yes! All workshops, training sessions, and seminars are completely free for CPC members.'
  },
  {
    q: 'How can I contact the committee?',
    a: 'Use this contact form, reach out via social media, or visit our office at DIU campus.'
  }
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent">
          Get In Touch
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Have questions or want to get involved? We'd love to hear from you!
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Contact Form */}
        <div className="card bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/30 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl text-blue-300 mb-6">
              <i className="fas fa-envelope mr-2"></i>
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Subject</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  placeholder="What is this about?"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Message</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="textarea textarea-bordered h-32"
                  placeholder="Tell us more..."
                  required
                />
              </div>

              <button 
                type="submit" 
                className="btn w-full bg-gradient-to-r from-blue-800 to-purple-600 text-white border-none hover:from-blue-700 hover:to-purple-500"
              >
                <i className="fas fa-paper-plane mr-2"></i>
                Send Message
              </button>

              {submitted && (
                <div className="alert alert-success">
                  <i className="fas fa-check-circle"></i>
                  <span>Thank you! We'll get back to you soon at {form.email}</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <div className="card bg-gray-800/50 border border-purple-500/30 shadow-xl mb-6">
            <div className="card-body">
              <h2 className="card-title text-2xl text-purple-300 mb-6">
                <i className="fas fa-question-circle mr-2"></i>
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="collapse collapse-arrow bg-gray-700/50 rounded-lg">
                    <input type="radio" name="faq-accordion" defaultChecked={idx === 0} />
                    <div className="collapse-title font-semibold text-gray-100">
                      {faq.q}
                    </div>
                    <div className="collapse-content">
                      <p className="text-gray-300">{faq.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Contact Info */}
          <div className="card bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-500/30 shadow-xl">
            <div className="card-body">
              <h3 className="card-title text-xl text-blue-300 mb-4">
                <i className="fas fa-info-circle mr-2"></i>
                Quick Contact
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">📍</div>
                  <div>
                    <p className="font-semibold text-gray-100">Location</p>
                    <p className="text-sm text-gray-300">Dhaka International University<br/>Dhaka, Bangladesh</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-2xl">📧</div>
                  <div>
                    <p className="font-semibold text-gray-100">Email</p>
                    <p className="text-sm text-gray-300">contact@diu-cpc.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="text-center mb-12 bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-blue-900/30 border border-blue-500/30 rounded-2xl p-8 shadow-xl">
        <h2 className="text-3xl font-bold text-gray-100 mb-4">
          <i className="fas fa-users mr-3"></i>
          Connect With Us
        </h2>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          Follow us on social media for the latest updates, event announcements, and programming tips
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          {socialLinks.map(link => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn ${link.color} text-white border-none`}
            >
              <i className={`${link.icon} mr-2`}></i>
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {/* Map Section */}
      <div className="card bg-gray-800/50 border border-red-500/30 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl text-gray-100 mb-4">
            <i className="fas fa-map-marker-alt mr-2 text-red-400"></i>
            Find Us on Campus
          </h2>
          <div className="rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902!2d90.4471447!3d23.7937364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c775164bf631:0x97f48a5be913a9fc!2sDhaka+International+University!5e0!3m2!1sen!2sbd!4v1638360000000!5m2!1sen!2sbd"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="DIU Location"
            ></iframe>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Contact;
