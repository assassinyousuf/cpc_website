import React, { useState, useEffect } from 'react';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('/events.json')
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(error => console.error('Error loading events:', error));
  }, []);

  const getEventIcon = (eventName) => {
    const name = eventName.toLowerCase();
    if (name.includes('contest') || name.includes('competition')) return 'fas fa-trophy';
    if (name.includes('workshop')) return 'fas fa-tools';
    if (name.includes('seminar')) return 'fas fa-chalkboard-teacher';
    if (name.includes('hackathon')) return 'fas fa-code';
    return 'fas fa-calendar-alt';
  };

  const getEventColor = (eventName) => {
    const name = eventName.toLowerCase();
    if (name.includes('contest') || name.includes('competition')) return { primary: '#f59e0b', secondary: '#d97706' };
    if (name.includes('workshop')) return { primary: '#10b981', secondary: '#059669' };
    if (name.includes('seminar')) return { primary: '#8b5cf6', secondary: '#7c3aed' };
    if (name.includes('hackathon')) return { primary: '#ef4444', secondary: '#dc2626' };
    return { primary: '#87CEEB', secondary: '#4682B4' };
  };

  return (
    <section className="container my-5">
      <h1 className="section-title" style={{ color: '#fff', textAlign: 'center', marginBottom: '60px' }}>Events</h1>

      <div className="row">
        {events.map((event, index) => {
          const colors = getEventColor(event.event);
          return (
            <div key={index} className="col-md-6 mb-4">
              <div className="event-card" style={{
                background: `linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(${colors.primary === '#87CEEB' ? '135, 206, 235' : colors.primary === '#f59e0b' ? '245, 158, 11' : colors.primary === '#10b981' ? '16, 185, 129' : colors.primary === '#8b5cf6' ? '139, 92, 246' : '239, 68, 68'}, 0.1) 100%)`,
                backdropFilter: 'blur(15px)',
                border: `1px solid rgba(${colors.primary === '#87CEEB' ? '135, 206, 235' : colors.primary === '#f59e0b' ? '245, 158, 11' : colors.primary === '#10b981' ? '16, 185, 129' : colors.primary === '#8b5cf6' ? '139, 92, 246' : '239, 68, 68'}, 0.3)`,
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
                  background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary}, ${colors.primary})`,
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 3s ease-in-out infinite'
                }}></div>

                <div className="card-body" style={{ padding: '30px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '20px',
                      boxShadow: `0 8px 25px rgba(${colors.primary === '#87CEEB' ? '135, 206, 235' : colors.primary === '#f59e0b' ? '245, 158, 11' : colors.primary === '#10b981' ? '16, 185, 129' : colors.primary === '#8b5cf6' ? '139, 92, 246' : '239, 68, 68'}, 0.3)`
                    }}>
                      <i className={getEventIcon(event.event)} style={{ fontSize: '1.5rem', color: '#fff' }}></i>
                    </div>
                    <div style={{ flex: 1 }}>
                      <h5 className="card-title" style={{ color: '#fff', fontSize: '1.3rem', fontWeight: '700', marginBottom: '5px' }}>
                        {event.event}
                      </h5>
                      <div style={{
                        background: `rgba(${colors.primary === '#87CEEB' ? '135, 206, 235' : colors.primary === '#f59e0b' ? '245, 158, 11' : colors.primary === '#10b981' ? '16, 185, 129' : colors.primary === '#8b5cf6' ? '139, 92, 246' : '239, 68, 68'}, 0.2)`,
                        color: colors.primary,
                        padding: '4px 12px',
                        borderRadius: '15px',
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        display: 'inline-block'
                      }}>
                        <i className="fas fa-calendar" style={{ marginRight: '5px' }}></i>
                        {event.date}
                      </div>
                    </div>
                  </div>

                  <p className="card-text" style={{ color: '#ccc', fontSize: '1rem', lineHeight: '1.6', margin: 0 }}>
                    {event.description}
                  </p>

                  <div style={{ marginTop: '20px', textAlign: 'right' }}>
                    <button className="btn" style={{
                      background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                      border: 'none',
                      borderRadius: '25px',
                      color: '#fff',
                      padding: '8px 20px',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      transition: 'all 0.3s ease'
                    }}>
                      <i className="fas fa-external-link-alt" style={{ marginRight: '8px' }}></i>
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {events.length === 0 && (
        <div style={{ textAlign: 'center', padding: '60px 20px' }}>
          <div style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #87CEEB 0%, #4682B4 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 30px',
            boxShadow: '0 8px 25px rgba(135, 206, 235, 0.3)'
          }}>
            <i className="fas fa-calendar-alt" style={{ fontSize: '3rem', color: '#fff' }}></i>
          </div>
          <h3 style={{ color: '#fff', marginBottom: '15px' }}>Loading Events...</h3>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Please wait while we fetch the latest events</p>
        </div>
      )}
    </section>
  );
};

export default Events;