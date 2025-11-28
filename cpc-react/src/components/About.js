import React from 'react';

const About = () => {
  const advisors = [
    {
      name: 'Prof. Md. Abdul Based',
      role: 'Advisor',
      department: 'Computer Science & Engineering',
      university: 'Dhaka International University'
    },
    {
      name: 'Prof. Md. Mahabubur Rahman',
      role: 'Advisor',
      department: 'Computer Science & Engineering',
      university: 'Dhaka International University'
    }
  ];

  return (
    <section className="container my-5">
      <h1 className="section-title" style={{ color: '#fff' }}>About DIU CPC</h1>
      <p style={{ color: '#fff', fontSize: '1.1rem', lineHeight: '1.6' }}>
        The Dhaka International University Computer Programming Club (DIU CPC) is an official student organization affiliated with the Department of Computer Science and Engineering (CSE) at Dhaka International University (DIU), established in 1995 in Dhaka, Bangladesh. The CSE department itself began in 1996, making it one of the university's foundational units.
      </p>
      <p style={{ color: '#fff', fontSize: '1.1rem', lineHeight: '1.6' }}>
        DIU CPC operates as a "family" unit, emphasizing collaborative learning in programming, problem-solving, and innovation. Its mission includes providing free seminars, workshops, and training to all CSE students, inspiring young innovators.
      </p>
      <h2 style={{ color: '#87CEEB', marginTop: '50px' }}>Mission</h2>
      <p style={{ color: '#fff', fontSize: '1.2rem', fontWeight: '500', textAlign: 'center', background: 'rgba(135, 206, 235, 0.1)', padding: '20px', borderRadius: '10px', border: '1px solid rgba(135, 206, 235, 0.3)' }}>
        Foster skills, inspire innovation, and build a community of programmers.
      </p>
      <h2 style={{ color: '#87CEEB', marginTop: '50px' }}>History Timeline</h2>
      <div style={{ background: 'rgba(0, 0, 0, 0.6)', padding: '30px', borderRadius: '15px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <ul style={{ color: '#fff', fontSize: '1.1rem', listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '15px', padding: '10px', background: 'rgba(135, 206, 235, 0.1)', borderRadius: '8px', borderLeft: '4px solid #87CEEB' }}>
            <strong>1996:</strong> CSE Department founded
          </li>
          <li style={{ marginBottom: '15px', padding: '10px', background: 'rgba(135, 206, 235, 0.1)', borderRadius: '8px', borderLeft: '4px solid #87CEEB' }}>
            <strong>2024:</strong> Ramp up in activities, Fall Fest sponsorship
          </li>
          <li style={{ marginBottom: '15px', padding: '10px', background: 'rgba(135, 206, 235, 0.1)', borderRadius: '8px', borderLeft: '4px solid #87CEEB' }}>
            <strong>2025:</strong> NASA Space Apps Challenge wins, new committee
          </li>
        </ul>
      </div>
      <h2 style={{ color: '#87CEEB', marginTop: '50px' }}>Advisors</h2>
      <div className="row">
        {advisors.map((advisor, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="card advisor-card" style={{
              background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(135, 206, 235, 0.1) 100%)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(135, 206, 235, 0.3)',
              borderRadius: '20px',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3)',
              transition: 'all 0.3s ease',
              overflow: 'hidden',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #87CEEB, #4682B4, #87CEEB)',
                backgroundSize: '200% 100%',
                animation: 'shimmer 3s ease-in-out infinite'
              }}></div>
              <div className="card-body" style={{ padding: '30px' }}>
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #87CEEB, #4682B4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 15px',
                    boxShadow: '0 8px 25px rgba(135, 206, 235, 0.3)'
                  }}>
                    <i className="fas fa-user-graduate" style={{ fontSize: '2rem', color: '#fff' }}></i>
                  </div>
                  <h5 className="card-title" style={{ color: '#fff', fontSize: '1.4rem', fontWeight: '700', marginBottom: '5px' }}>
                    {advisor.name}
                  </h5>
                  <span style={{
                    background: 'rgba(135, 206, 235, 0.2)',
                    color: '#87CEEB',
                    padding: '5px 15px',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    display: 'inline-block',
                    marginBottom: '15px'
                  }}>
                    {advisor.role}
                  </span>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ color: '#ccc', marginBottom: '5px', fontSize: '0.95rem' }}>
                    <i className="fas fa-building" style={{ marginRight: '8px', color: '#87CEEB' }}></i>
                    {advisor.department}
                  </p>
                  <p style={{ color: '#ccc', marginBottom: '0', fontSize: '0.95rem' }}>
                    <i className="fas fa-university" style={{ marginRight: '8px', color: '#87CEEB' }}></i>
                    {advisor.university}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h2 style={{ color: '#87CEEB', marginTop: '50px' }}>Membership Benefits</h2>
      <div className="row">
        <div className="col-md-4 mb-3">
          <div className="membership-benefit" style={{
            background: 'rgba(0, 0, 0, 0.6)',
            padding: '25px',
            borderRadius: '15px',
            border: '1px solid rgba(135, 206, 235, 0.3)',
            textAlign: 'center',
            height: '100%',
            transition: 'transform 0.3s ease'
          }}>
            <i className="fas fa-chalkboard-teacher" style={{ fontSize: '3rem', color: '#87CEEB', marginBottom: '15px' }}></i>
            <h5 style={{ color: '#fff', marginBottom: '10px' }}>Free Training</h5>
            <p style={{ color: '#ccc', margin: 0 }}>Access to workshops and seminars</p>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="membership-benefit" style={{
            background: 'rgba(0, 0, 0, 0.6)',
            padding: '25px',
            borderRadius: '15px',
            border: '1px solid rgba(135, 206, 235, 0.3)',
            textAlign: 'center',
            height: '100%',
            transition: 'transform 0.3s ease'
          }}>
            <i className="fas fa-users" style={{ fontSize: '3rem', color: '#87CEEB', marginBottom: '15px' }}></i>
            <h5 style={{ color: '#fff', marginBottom: '10px' }}>Networking</h5>
            <p style={{ color: '#ccc', margin: 0 }}>Connect with industry professionals</p>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="membership-benefit" style={{
            background: 'rgba(0, 0, 0, 0.6)',
            padding: '25px',
            borderRadius: '15px',
            border: '1px solid rgba(135, 206, 235, 0.3)',
            textAlign: 'center',
            height: '100%',
            transition: 'transform 0.3s ease'
          }}>
            <i className="fas fa-file-alt" style={{ fontSize: '3rem', color: '#87CEEB', marginBottom: '15px' }}></i>
            <h5 style={{ color: '#fff', marginBottom: '10px' }}>Resume Building</h5>
            <p style={{ color: '#ccc', margin: 0 }}>Enhance your profile through events</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;