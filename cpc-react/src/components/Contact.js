import React from 'react';

const Contact = () => {
  const socialMedia = [
    {
      name: 'Facebook',
      link: 'https://www.facebook.com/groups/diucsecpc/',
      icon: 'fab fa-facebook-f',
      color: '#1877f2',
      description: 'Join our community'
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/company/diucsecpc',
      icon: 'fab fa-linkedin-in',
      color: '#0077b5',
      description: 'Professional network'
    },
    {
      name: 'YouTube',
      link: 'https://www.youtube.com/@diucsecpc',
      icon: 'fab fa-youtube',
      color: '#ff0000',
      description: 'Tutorials & talks'
    }
  ];

  const contactInfo = [
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      content: 'Dhaka International University, Dhaka, Bangladesh',
      color: '#87CEEB'
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      content: 'info@diu-cpc.com',
      color: '#10b981'
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      content: '+880 123 456 7890',
      color: '#f59e0b'
    }
  ];

  return (
    <section className="container my-5">
      <h1 className="section-title" style={{ color: '#fff', textAlign: 'center', marginBottom: '60px' }}>Contact Us</h1>

      <div className="row">
        <div className="col-lg-8 mb-5">
          <div className="contact-form-card" style={{
            background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(135, 206, 235, 0.1) 100%)',
            backdropFilter: 'blur(15px)',
            border: '1px solid rgba(135, 206, 235, 0.3)',
            borderRadius: '20px',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3)',
            padding: '40px'
          }}>
            <h2 style={{ color: '#87CEEB', marginBottom: '30px', textAlign: 'center' }}>Send us a Message</h2>
            <form action="https://formspree.io/f/your-form-id" method="POST">
              <div className="row">
                <div className="col-md-6 mb-4">
                  <label htmlFor="name" style={{ color: '#fff', fontWeight: '600', marginBottom: '8px', display: 'block' }}>
                    <i className="fas fa-user" style={{ marginRight: '8px', color: '#87CEEB' }}></i>
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    required
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(135, 206, 235, 0.3)',
                      borderRadius: '10px',
                      color: '#fff',
                      padding: '12px 15px',
                      fontSize: '1rem'
                    }}
                  />
                </div>
                <div className="col-md-6 mb-4">
                  <label htmlFor="email" style={{ color: '#fff', fontWeight: '600', marginBottom: '8px', display: 'block' }}>
                    <i className="fas fa-envelope" style={{ marginRight: '8px', color: '#87CEEB' }}></i>
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    required
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(135, 206, 235, 0.3)',
                      borderRadius: '10px',
                      color: '#fff',
                      padding: '12px 15px',
                      fontSize: '1rem'
                    }}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="message" style={{ color: '#fff', fontWeight: '600', marginBottom: '8px', display: 'block' }}>
                  <i className="fas fa-comment" style={{ marginRight: '8px', color: '#87CEEB' }}></i>
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="5"
                  required
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(135, 206, 235, 0.3)',
                    borderRadius: '10px',
                    color: '#fff',
                    padding: '12px 15px',
                    fontSize: '1rem',
                    resize: 'vertical'
                  }}
                ></textarea>
              </div>
              <div style={{ textAlign: 'center' }}>
                <button
                  type="submit"
                  className="btn"
                  style={{
                    background: 'linear-gradient(135deg, #87CEEB 0%, #4682B4 100%)',
                    border: 'none',
                    borderRadius: '30px',
                    color: '#fff',
                    padding: '15px 40px',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    boxShadow: '0 8px 25px rgba(135, 206, 235, 0.4)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <i className="fas fa-paper-plane" style={{ marginRight: '10px' }}></i>
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="contact-info-section">
            <h2 style={{ color: '#87CEEB', marginBottom: '30px', textAlign: 'center' }}>Get in Touch</h2>

            {contactInfo.map((info, index) => (
              <div key={index} className="contact-info-card" style={{
                background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(102, 126, 234, 0.1) 100%)',
                backdropFilter: 'blur(15px)',
                border: '1px solid rgba(102, 126, 234, 0.3)',
                borderRadius: '15px',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
                padding: '20px',
                marginBottom: '20px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${info.color} 0%, #667eea 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '15px',
                    flexShrink: 0
                  }}>
                    <i className={info.icon} style={{ color: '#fff', fontSize: '1.2rem' }}></i>
                  </div>
                  <div>
                    <h6 style={{ color: '#fff', fontWeight: '600', marginBottom: '5px' }}>{info.title}</h6>
                    <p style={{ color: '#ccc', margin: 0, fontSize: '0.9rem' }}>{info.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <h2 style={{ color: '#87CEEB', textAlign: 'center', margin: '80px 0 40px', fontSize: '2rem' }}>Follow Us</h2>
      <div className="row">
        {socialMedia.map((social, index) => (
          <div key={index} className="col-md-4 mb-4">
            <a href={social.link} style={{ textDecoration: 'none' }}>
              <div className="social-card" style={{
                background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(245, 101, 101, 0.1) 100%)',
                backdropFilter: 'blur(15px)',
                border: '1px solid rgba(245, 101, 101, 0.3)',
                borderRadius: '20px',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.3s ease',
                padding: '30px',
                textAlign: 'center',
                height: '100%',
                display: 'block'
              }}>
                <div style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${social.color} 0%, #e53e3e 100%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  boxShadow: `0 8px 25px rgba(${social.color === '#1877f2' ? '24, 119, 242' : social.color === '#0077b5' ? '0, 119, 181' : '255, 0, 0'}, 0.3)`
                }}>
                  <i className={social.icon} style={{ fontSize: '1.8rem', color: '#fff' }}></i>
                </div>
                <h5 style={{ color: '#fff', fontSize: '1.3rem', fontWeight: '700', marginBottom: '10px' }}>
                  {social.name}
                </h5>
                <p style={{ color: '#ccc', fontSize: '1rem', margin: 0 }}>
                  {social.description}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>

      <h2 style={{ color: '#87CEEB', textAlign: 'center', margin: '80px 0 40px', fontSize: '2rem' }}>Our Location</h2>
      <div style={{
        background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(135, 206, 235, 0.1) 100%)',
        backdropFilter: 'blur(15px)',
        border: '1px solid rgba(135, 206, 235, 0.3)',
        borderRadius: '20px',
        boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3)',
        padding: '20px',
        marginBottom: '40px'
      }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902!2d90.4471447!3d23.7937364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c775164bf631:0x97f48a5be913a9fc!2sDhaka+International+University!5e0!3m2!1sen!2sbd!4v1638360000000!5m2!1sen!2sbd"
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: '15px' }}
          allowFullScreen=""
          loading="lazy"
          title="DIU Location"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;