import React from 'react';

const Gallery = () => {
  const albums = [
    {
      id: 1,
      title: 'Web Development Workshop',
      description: 'Hands-on session covering modern web technologies including React, Node.js, and responsive design principles.',
      icon: 'fas fa-code',
      date: 'Dec 2024',
      photos: 25,
      color: '#87CEEB'
    },
    {
      id: 2,
      title: 'Monthly Programming Contest',
      description: 'Intense coding competition featuring algorithmic challenges and problem-solving under time constraints.',
      icon: 'fas fa-trophy',
      date: 'Nov 2024',
      photos: 32,
      color: '#f59e0b'
    },
    {
      id: 3,
      title: 'NASA Space Apps Challenge',
      description: 'Team Polaris receiving recognition for their innovative Meteor Shield project at the international space apps challenge.',
      icon: 'fas fa-rocket',
      date: 'Oct 2024',
      photos: 18,
      color: '#10b981'
    },
    {
      id: 4,
      title: 'AI & Machine Learning Seminar',
      description: 'Exploring the future of artificial intelligence with practical demonstrations and industry insights.',
      icon: 'fas fa-brain',
      date: 'Sep 2024',
      photos: 28,
      color: '#8b5cf6'
    },
    {
      id: 5,
      title: 'Annual General Meeting',
      description: 'Community gathering featuring achievements, planning sessions, and networking opportunities.',
      icon: 'fas fa-users',
      date: 'Aug 2024',
      photos: 35,
      color: '#ef4444'
    },
    {
      id: 6,
      title: 'Freshers Orientation',
      description: 'Welcoming new members to the programming community with introductory sessions and team building activities.',
      icon: 'fas fa-graduation-cap',
      date: 'Jul 2024',
      photos: 42,
      color: '#06b6d4'
    }
  ];

  const videos = [
    {
      id: 1,
      title: 'Workshop Highlights',
      description: 'A compilation of the best moments from our recent web development workshop, featuring student projects and expert demonstrations.',
      embedId: 'dQw4w9WgXcQ' // Replace with actual video ID
    },
    {
      id: 2,
      title: 'Contest Champions',
      description: 'Interviews with our monthly programming contest winners, sharing their strategies, challenges, and future goals in competitive programming.',
      embedId: 'dQw4w9WgXcQ' // Replace with actual video ID
    }
  ];

  const stats = [
    { number: '50+', label: 'Events Covered' },
    { number: '1000+', label: 'Photos' },
    { number: '25+', label: 'Videos' },
    { number: '5', label: 'Years of Memories' }
  ];

  return (
    <>
      {/* Gallery Hero Section */}
      <section className="gallery-hero">
        <div className="container">
          <h1 style={{ color: '#fff', fontSize: '3rem', fontWeight: '700', marginBottom: '20px' }}>
            <i className="fas fa-images" style={{ marginRight: '15px', color: '#87CEEB' }}></i>
            Gallery
          </h1>
          <p style={{ color: '#ccc', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            Capturing moments of innovation, learning, and achievement from our programming community
          </p>
        </div>
      </section>

      <section className="container my-5">
        {/* Statistics Section */}
        <div className="row mb-5">
          {stats.map((stat, index) => (
            <div key={index} className="col-md-3">
              <div className="stats-card">
                <div className="stats-number">{stat.number}</div>
                <div className="stats-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Photo Albums Section */}
        <h2 className="section-title">Photo Albums</h2>
        <p className="section-subtitle">Explore our collection of memorable moments from workshops, contests, and events</p>

        <div className="row">
          {albums.map((album) => (
            <div key={album.id} className="col-lg-4 col-md-6 mb-4">
              <div className="album-card">
                <div className="album-image" style={{ background: `linear-gradient(135deg, ${album.color} 0%, #4682B4 100%)` }}>
                  <i className={album.icon} style={{ fontSize: '4rem', color: 'rgba(255, 255, 255, 0.8)' }}></i>
                </div>
                <div className="album-content">
                  <h3 className="album-title">{album.title}</h3>
                  <p className="album-description">{album.description}</p>
                  <div className="album-meta">
                    <span><i className="fas fa-calendar-alt"></i> {album.date}</span>
                    <span><i className="fas fa-images"></i> {album.photos} photos</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Videos Section */}
        <h2 className="section-title" style={{ marginTop: '80px' }}>Featured Videos</h2>
        <p className="section-subtitle">Watch highlights from our events and educational content</p>

        <div className="row">
          {videos.map((video) => (
            <div key={video.id} className="col-lg-6 mb-4">
              <div className="video-card">
                <div className="ratio ratio-16x9">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.embedId}`}
                    title={video.title}
                    allowFullScreen
                  ></iframe>
                </div>
                <div style={{ padding: '20px' }}>
                  <h3 className="video-title">
                    <i className="fab fa-youtube" style={{ color: '#ff0000', marginRight: '10px' }}></i>
                    {video.title}
                  </h3>
                  <p className="video-description">{video.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-5">
          <div className="cta-card">
            <h3 style={{ color: '#fff', marginBottom: '20px' }}>Want to be part of our story?</h3>
            <p style={{ color: '#ccc', marginBottom: '30px' }}>Join DIU CPC and create memories that will be featured in our gallery!</p>
            <a href="#contact" className="btn btn-primary">
              <i className="fas fa-user-plus" style={{ marginRight: '10px' }}></i>
              Join Our Community
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .gallery-hero {
          background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
          color: #fff;
          padding: 80px 0;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .gallery-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="20" cy="30" r="0.5" fill="rgba(255,255,255,0.05)"/><circle cx="80" cy="70" r="0.5" fill="rgba(255,255,255,0.05)"/><circle cx="10" cy="80" r="0.3" fill="rgba(255,255,255,0.03)"/><circle cx="90" cy="20" r="0.3" fill="rgba(255,255,255,0.03)"/></svg>') repeat;
          opacity: 0.5;
          animation: twinkle 4s ease-in-out infinite alternate;
        }

        .album-card {
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(135, 206, 235, 0.1) 100%);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(135, 206, 235, 0.3);
          border-radius: 20px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
          overflow: hidden;
          height: 100%;
        }

        .album-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
          border-color: rgba(135, 206, 235, 0.6);
        }

        .album-image {
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .album-content {
          padding: 20px;
        }

        .album-title {
          color: #fff;
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .album-description {
          color: #ccc;
          font-size: 0.9rem;
          margin-bottom: 15px;
        }

        .album-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.8rem;
          color: #87CEEB;
        }

        .video-card {
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(245, 101, 101, 0.1) 100%);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(245, 101, 101, 0.3);
          border-radius: 20px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .video-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
          border-color: rgba(245, 101, 101, 0.6);
        }

        .video-title {
          color: #fff;
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .video-description {
          color: #ccc;
          font-size: 0.9rem;
        }

        .section-title {
          color: #fff;
          text-align: center;
          margin-bottom: 60px;
          font-size: 2.5rem;
          font-weight: 700;
        }

        .section-subtitle {
          color: #87CEEB;
          text-align: center;
          margin-bottom: 40px;
          font-size: 1.3rem;
        }

        .stats-card {
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(16, 185, 129, 0.1) 100%);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(16, 185, 129, 0.3);
          border-radius: 15px;
          padding: 20px;
          text-align: center;
          margin-bottom: 20px;
        }

        .stats-number {
          color: #10b981;
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 5px;
        }

        .stats-label {
          color: #fff;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .cta-card {
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(102, 126, 234, 0.1) 100%);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(102, 126, 234, 0.3);
          border-radius: 20px;
          padding: 40px;
          display: inline-block;
        }

        @keyframes twinkle {
          0% { opacity: 0.3; }
          100% { opacity: 0.7; }
        }

        @media (max-width: 768px) {
          .album-card,
          .video-card {
            margin-bottom: 20px;
          }

          .section-title {
            font-size: 2rem;
          }

          .gallery-hero h1 {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default Gallery;