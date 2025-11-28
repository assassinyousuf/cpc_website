import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    // News ticker effect
    const ticker = document.querySelector('.news-ticker');
    if (ticker) {
      ticker.innerHTML = '<marquee style="color: #fff; font-weight: 500;">🎉 Upcoming ICPC Regional 2025 | 🏆 Codeforces Contests Weekly | 📚 Free Programming Workshops | 🚀 Join DIU CPC Today!</marquee>';
    }
  }, []);

  const features = [
    {
      icon: 'fas fa-code',
      title: 'Skill Development',
      description: 'Master programming languages, algorithms, and data structures through hands-on practice.',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      icon: 'fas fa-trophy',
      title: 'Competitions',
      description: 'Participate in national and international programming contests like ICPC, Codeforces, and more.',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      icon: 'fas fa-users',
      title: 'Community',
      description: 'Join a vibrant community of passionate programmers and learn from experienced mentors.',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    }
  ];

  return (
    <div>
      <section className="hero text-center py-5" style={{
        background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
        color: '#fff',
        padding: '80px 0',
        borderRadius: '0',
        margin: '0',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 80%, rgba(135, 206, 235, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(135, 206, 235, 0.1) 0%, transparent 50%)',
          animation: 'pulse 4s ease-in-out infinite alternate'
        }}></div>
        <div className="floating-icons">
          <i className="fab fa-python icon1" style={{ color: 'rgba(255,255,255,0.3)' }}></i>
          <i className="fab fa-js icon2" style={{ color: 'rgba(255,255,255,0.3)' }}></i>
          <i className="fab fa-java icon3" style={{ color: 'rgba(255,255,255,0.3)' }}></i>
          <i className="fas fa-code icon4" style={{ color: 'rgba(255,255,255,0.3)' }}></i>
          <i className="fab fa-cuttlefish icon5" style={{ color: 'rgba(255,255,255,0.3)' }}></i>
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #fff 0%, #87CEEB 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '20px',
            textShadow: '0 0 30px rgba(135, 206, 235, 0.5)'
          }}>
            Welcome to DIU CPC
          </h1>
          <p className="lead" style={{
            fontSize: '1.5rem',
            color: '#87CEEB',
            fontWeight: '500',
            marginBottom: '15px',
            textShadow: '0 0 20px rgba(135, 206, 235, 0.3)'
          }}>
            Empowering Future Coders at Dhaka International University!
          </p>
          <p style={{
            fontSize: '1.2rem',
            color: '#ccc',
            marginBottom: '30px',
            maxWidth: '600px',
            margin: '0 auto 30px'
          }}>
            Learn programming, solve real-world problems, and compete globally.
          </p>
          <div className="news-ticker" style={{
            background: 'rgba(0, 0, 0, 0.6)',
            padding: '15px',
            borderRadius: '25px',
            marginBottom: '40px',
            border: '1px solid rgba(135, 206, 235, 0.3)',
            backdropFilter: 'blur(10px)'
          }}></div>
          <a href="/events" className="btn btn-primary btn-lg pulse" style={{
            background: 'linear-gradient(135deg, #87CEEB 0%, #4682B4 100%)',
            border: 'none',
            padding: '15px 40px',
            borderRadius: '30px',
            fontSize: '1.2rem',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            boxShadow: '0 8px 25px rgba(135, 206, 235, 0.4)',
            transition: 'all 0.3s ease'
          }}>
            <i className="fas fa-rocket" style={{ marginRight: '10px' }}></i>
            Join Events
          </a>
        </div>
      </section>

      <section className="container my-5">
        <h2 className="section-title" style={{ color: '#fff', textAlign: 'center', marginBottom: '60px' }}>
          Why Join DIU CPC?
        </h2>
        <div className="row">
          {features.map((feature, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="feature-card" style={{
                background: 'rgba(0, 0, 0, 0.8)',
                backdropFilter: 'blur(15px)',
                border: '1px solid rgba(135, 206, 235, 0.3)',
                borderRadius: '20px',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.3s ease',
                overflow: 'hidden',
                height: '100%',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: feature.gradient,
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 3s ease-in-out infinite'
                }}></div>
                <div className="card-body" style={{ padding: '40px 30px', textAlign: 'center' }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: feature.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 25px',
                    boxShadow: '0 8px 25px rgba(135, 206, 235, 0.3)',
                    fontSize: '2rem',
                    color: '#fff'
                  }}>
                    <i className={feature.icon}></i>
                  </div>
                  <h5 className="card-title" style={{
                    color: '#fff',
                    fontSize: '1.4rem',
                    fontWeight: '700',
                    marginBottom: '15px'
                  }}>
                    {feature.title}
                  </h5>
                  <p className="card-text" style={{
                    color: '#ccc',
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    margin: 0
                  }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;