import React from 'react';

const Resources = () => {
  const tutorials = [
    { name: 'Programming Basics', icon: 'fas fa-code', description: 'Learn fundamental programming concepts', color: '#87CEEB' },
    { name: 'Web Development Guide', icon: 'fas fa-globe', description: 'Complete guide to modern web development', color: '#10b981' }
  ];

  const tools = [
    {
      name: 'VS Code',
      description: 'Powerful code editor with extensions',
      link: 'https://code.visualstudio.com/',
      linkText: 'Download',
      icon: 'fas fa-code',
      color: '#007acc'
    },
    {
      name: 'GitHub',
      description: 'Version control and collaboration platform',
      link: 'https://github.com/',
      linkText: 'Visit',
      icon: 'fab fa-github',
      color: '#333'
    }
  ];

  const contests = [
    { name: 'ICPC Regionals', icon: 'fas fa-trophy', description: 'International Collegiate Programming Contest', color: '#f59e0b' },
    { name: 'NASA Space Apps', icon: 'fas fa-rocket', description: 'Global hackathon for space exploration', color: '#ef4444' }
  ];

  return (
    <section className="container my-5">
      <h1 className="section-title" style={{ color: '#fff', textAlign: 'center', marginBottom: '60px' }}>Resources</h1>

      <h2 style={{ color: '#87CEEB', textAlign: 'center', marginBottom: '40px', fontSize: '2rem' }}>Tutorials</h2>
      <div className="row">
        {tutorials.map((tutorial, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="tutorial-card" style={{
              background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(135, 206, 235, 0.1) 100%)',
              backdropFilter: 'blur(15px)',
              border: '1px solid rgba(135, 206, 235, 0.3)',
              borderRadius: '20px',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3)',
              transition: 'all 0.3s ease',
              overflow: 'hidden',
              position: 'relative',
              height: '100%'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: `linear-gradient(90deg, ${tutorial.color}, #4682B4, ${tutorial.color})`,
                backgroundSize: '200% 100%',
                animation: 'shimmer 3s ease-in-out infinite'
              }}></div>
              <div className="card-body" style={{ padding: '30px', textAlign: 'center' }}>
                <div style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${tutorial.color} 0%, #4682B4 100%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  boxShadow: `0 8px 25px rgba(${tutorial.color === '#87CEEB' ? '135, 206, 235' : '16, 185, 129'}, 0.3)`
                }}>
                  <i className={tutorial.icon} style={{ fontSize: '1.8rem', color: '#fff' }}></i>
                </div>
                <h5 className="card-title" style={{ color: '#fff', fontSize: '1.3rem', fontWeight: '700', marginBottom: '10px' }}>
                  {tutorial.name}
                </h5>
                <p className="card-text" style={{ color: '#ccc', fontSize: '1rem', lineHeight: '1.6', marginBottom: '20px' }}>
                  {tutorial.description}
                </p>
                <button className="btn" style={{
                  background: `linear-gradient(135deg, ${tutorial.color} 0%, #4682B4 100%)`,
                  border: 'none',
                  borderRadius: '25px',
                  color: '#fff',
                  padding: '10px 25px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  transition: 'all 0.3s ease'
                }}>
                  <i className="fas fa-play" style={{ marginRight: '8px' }}></i>
                  Start Learning
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 style={{ color: '#87CEEB', textAlign: 'center', margin: '80px 0 40px', fontSize: '2rem' }}>Tools</h2>
      <div className="row">
        {tools.map((tool, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="tool-card" style={{
              background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(102, 126, 234, 0.1) 100%)',
              backdropFilter: 'blur(15px)',
              border: '1px solid rgba(102, 126, 234, 0.3)',
              borderRadius: '20px',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3)',
              transition: 'all 0.3s ease',
              overflow: 'hidden',
              position: 'relative',
              height: '100%'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: `linear-gradient(90deg, ${tool.color}, #667eea, ${tool.color})`,
                backgroundSize: '200% 100%',
                animation: 'shimmer 3s ease-in-out infinite'
              }}></div>
              <div className="card-body" style={{ padding: '30px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${tool.color} 0%, #667eea 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '20px',
                    boxShadow: `0 8px 25px rgba(${tool.color === '#007acc' ? '0, 122, 204' : '51, 51, 51'}, 0.3)`
                  }}>
                    <i className={tool.icon} style={{ fontSize: '1.5rem', color: '#fff' }}></i>
                  </div>
                  <div>
                    <h5 className="card-title" style={{ color: '#fff', fontSize: '1.3rem', fontWeight: '700', marginBottom: '5px' }}>
                      {tool.name}
                    </h5>
                    <p className="card-text" style={{ color: '#ccc', fontSize: '0.95rem', margin: 0 }}>
                      {tool.description}
                    </p>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <a href={tool.link} className="btn" style={{
                    background: `linear-gradient(135deg, ${tool.color} 0%, #667eea 100%)`,
                    border: 'none',
                    borderRadius: '25px',
                    color: '#fff',
                    padding: '10px 25px',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}>
                    <i className="fas fa-external-link-alt" style={{ marginRight: '8px' }}></i>
                    {tool.linkText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 style={{ color: '#87CEEB', textAlign: 'center', margin: '80px 0 40px', fontSize: '2rem' }}>Competitions</h2>
      <div className="row">
        {contests.map((contest, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="contest-card" style={{
              background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(245, 101, 101, 0.1) 100%)',
              backdropFilter: 'blur(15px)',
              border: '1px solid rgba(245, 101, 101, 0.3)',
              borderRadius: '20px',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3)',
              transition: 'all 0.3s ease',
              overflow: 'hidden',
              position: 'relative',
              height: '100%'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: `linear-gradient(90deg, ${contest.color}, #e53e3e, ${contest.color})`,
                backgroundSize: '200% 100%',
                animation: 'shimmer 3s ease-in-out infinite'
              }}></div>
              <div className="card-body" style={{ padding: '30px', textAlign: 'center' }}>
                <div style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${contest.color} 0%, #e53e3e 100%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  boxShadow: `0 8px 25px rgba(${contest.color === '#f59e0b' ? '245, 158, 11' : '239, 68, 68'}, 0.3)`
                }}>
                  <i className={contest.icon} style={{ fontSize: '1.8rem', color: '#fff' }}></i>
                </div>
                <h5 className="card-title" style={{ color: '#fff', fontSize: '1.3rem', fontWeight: '700', marginBottom: '10px' }}>
                  {contest.name}
                </h5>
                <p className="card-text" style={{ color: '#ccc', fontSize: '1rem', lineHeight: '1.6', marginBottom: '20px' }}>
                  {contest.description}
                </p>
                <button className="btn" style={{
                  background: `linear-gradient(135deg, ${contest.color} 0%, #e53e3e 100%)`,
                  border: 'none',
                  borderRadius: '25px',
                  color: '#fff',
                  padding: '10px 25px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  transition: 'all 0.3s ease'
                }}>
                  <i className="fas fa-trophy" style={{ marginRight: '8px' }}></i>
                  Participate
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Resources;