import React from 'react';

const Team = () => {
  const executiveMembers = [
    {
      name: 'Sarker Sifatullah Haque Sajeeb',
      role: 'President',
      batch: 'D-78A, Roll: 10',
      phone: '01850676787',
      email: 'sifat@diu-cpc.com',
      facebook: 'https://www.facebook.com/sajeeb.haque',
      linkedin: 'https://www.linkedin.com/in/sifatullah-haque/',
      github: 'https://github.com/sifatullah-haque'
    },
    {
      name: 'Md. Rasel Islam',
      role: 'Vice President',
      batch: 'D-72, Roll: 25',
      phone: '01306512656',
      email: 'rasel.islam@diu-cpc.com',
      facebook: 'https://www.facebook.com/share/1V3A8Kj6NM/',
      linkedin: 'https://www.linkedin.com/in/rasel-islam-817748269',
      github: 'https://github.com/raselsbd'
    },
    {
      name: 'Md Alam Hossain',
      role: 'Vice President',
      batch: 'E-101, Roll: 20',
      phone: '01790190009',
      email: 'alam@diu-cpc.com',
      facebook: 'https://www.facebook.com/alam.398/',
      linkedin: 'https://www.linkedin.com/in/md-alam-hossain/',
      github: 'https://github.com/alamrpi'
    },
    {
      name: 'Asif Elahi',
      role: 'General Secretary',
      batch: 'D-75, Roll: 40',
      phone: '01778791778',
      email: 'asif@diu-cpc.com',
      facebook: 'https://www.facebook.com/asifelahi488',
      linkedin: 'https://www.linkedin.com/in/asiifelahi/',
      github: 'https://github.com/asifelahii'
    },
    {
      name: 'MD. SOUMIK HASAN',
      role: 'Joint Secretary',
      batch: 'D-72, Roll: 34',
      phone: '01716101715',
      email: 'soumik@diu-cpc.com',
      facebook: 'https://www.facebook.com/soumik.hasan.37',
      linkedin: 'https://www.linkedin.com/in/soumik-hasan-smk',
      github: 'https://github.com/Soumik-HasanSMK'
    },
    {
      name: 'Fatema Khanom',
      role: 'Joint Secretary',
      batch: 'D-78A, Roll: 09',
      phone: '01751549818',
      email: 'fatema@diu-cpc.com',
      facebook: 'https://www.facebook.com/fatemaurmi06',
      linkedin: 'https://www.linkedin.com/in/fatema-khanom-53a44a256/',
      github: 'https://github.com/Fatema-Khanom'
    },
    {
      name: 'Md. Yousuf Hossain',
      role: 'Treasurer',
      batch: 'D-91, Roll: 31',
      phone: '01629263618',
      email: 'yousuf@diu-cpc.com',
      facebook: 'https://www.facebook.com/yousufhossain.mehrab',
      linkedin: 'https://www.linkedin.com/in/yousuf-hossain-06089a328/',
      github: 'https://github.com/assassinyousuf'
    },
    {
      name: 'Md. Mehedi Hasan',
      role: 'Event Coordinator',
      batch: 'D-90, Roll: 04',
      phone: '01403005254',
      email: 'mehedi@diu-cpc.com',
      facebook: 'https://www.facebook.com/share/1AEJuijctJ/?mibextid=qi2Omg',
      linkedin: 'https://www.linkedin.com/in/meetmehedi',
      github: 'https://github.com/meetmehedi'
    },
    {
      name: 'Foysal Mahmud Zihak',
      role: 'Technical Coordinator',
      batch: 'D-93, Roll: 35',
      phone: '01732969766',
      email: 'zihak@diu-cpc.com',
      facebook: 'https://www.facebook.com/FoysalZihak/',
      linkedin: 'https://www.linkedin.com/in/zihak/',
      github: 'https://github.com/fzihak'
    },
    {
      name: 'MD Mahadi Rahman Labib',
      role: 'Student Engagement',
      batch: 'D-86, Roll: 35',
      phone: '01705617457',
      email: 'labib@diu-cpc.com',
      facebook: 'https://www.facebook.com/profile.php?id=100071748218063',
      linkedin: 'https://www.linkedin.com/in/mahadi-rahman-labib-64780a2a3/',
      github: 'https://github.com/MadaDlabib'
    },
    {
      name: 'Marjanah Afrose',
      role: 'Public Relationship Manager',
      batch: 'D-90, Roll: 38',
      phone: '01556401501',
      email: 'marjanah@diu-cpc.com',
      facebook: 'https://www.facebook.com/share/1APhVw5LH6/',
      linkedin: 'https://www.linkedin.com/in/marjanah-afrose-0a3781328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      github: 'https://github.com/Marjanah-003'
    },
    {
      name: 'Sumaiya Akter',
      role: 'Woman\'s Coordinator',
      batch: 'D-71, Roll: 25',
      phone: '01755724125',
      email: 'sumaiya@diu-cpc.com',
      facebook: 'https://www.facebook.com/share/1Q4SxWPbKd/',
      linkedin: 'https://www.linkedin.com/in/sumaiya-akter-016336293',
      github: 'N/A'
    },
    {
      name: 'Md. Mahbub Alam Efaz',
      role: 'Evening Batches Cooordinator',
      batch: 'E-98th, Roll: 04',
      phone: '01671962853',
      email: 'mahbub@diu-cpc.com',
      facebook: 'https://www.facebook.com/share/1AMwc4eAGv/',
      linkedin: 'N/A',
      github: 'N/A'
    },
    {
      name: 'Mst. Miskatun Jannat',
      role: 'Membership Coordinator',
      batch: 'D-91, Roll: 14',
      phone: '01728937311',
      email: 'miskat@diu-cpc.com',
      facebook: 'https://www.facebook.com/share/1Df3N7NEZV/',
      linkedin: 'https://www.linkedin.com/in/miskatul-jannat-813b72321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      github: 'https://github.com/Miskatulj/Miskatul_Jannat'
    },
    {
      name: 'Shihab Shariar',
      role: 'Programming Lead',
      batch: 'D-72, Roll: 11',
      phone: '01744915011',
      email: 'shihab@diu-cpc.com',
      facebook: 'https://www.facebook.com/5H1H48.7',
      linkedin: 'https://www.linkedin.com/in/shihab-shariar',
      github: 'https://github.com/shihab-7'
    }
  ];

  const strategicMembers = [
    {
      name: 'Md Siamul Islam Soaib',
      role: 'Strategic Member',
      batch: 'D-85',
      phone: '01682684452',
      email: 'soaib@diu-cpc.com',
      facebook: 'https://www.facebook.com/mdsiamulislamsoaib',
      linkedin: 'https://www.linkedin.com/in/mdsiamulislamsoaib/',
      github: 'https://github.com/mdsiamulislam'
    },
    {
      name: 'Md. Nazmus Sakib',
      role: 'Public Relation Co-Ordinator',
      batch: 'e-104',
      phone: '01992547202',
      email: 'nazmus@diu-cpc.com',
      facebook: 'https://www.facebook.com/engrsakib02/',
      linkedin: 'https://www.linkedin.com/in/engrsakib/',
      github: 'https://github.com/engrsakib'
    },
    {
      name: 'Masrafi Mubin',
      role: 'Strategic Member',
      batch: 'D-93',
      phone: '01834566383',
      email: 'ratul@diu-cpc.com',
      facebook: '',
      linkedin: '',
      github: ''
    },
    {
      name: 'S M Nabil Ausaf',
      role: 'Strategic Member',
      batch: 'D-91',
      phone: '01922274318',
      email: 'nabil@diu-cpc.com',
      facebook: 'https://www.facebook.com/share/15HYN3Ad1N/',
      linkedin: 'http://linkedin.com/in/smnabilausaf',
      github: 'https://github.com/AvengerNabil'
    },
    {
      name: 'Md. Asikur Rahman Khan',
      role: 'Strategic Member',
      batch: 'D-90',
      phone: '+880 1758 792678',
      email: 'ashik@diu-cpc.com',
      facebook: 'https://www.facebook.com/share/18isMq9rTB/',
      linkedin: 'https://www.linkedin.com/in/mdasikurrahmankhan17/',
      github: 'https://github.com/mdashikkhan04'
    },
    {
      name: 'Fardin Kamal',
      role: 'Strategic Member',
      batch: 'D-85',
      phone: '01601912958',
      email: 'swad@diu-cpc.com',
      facebook: 'https://www.facebook.com/fardinkamal62/',
      linkedin: 'https://www.linkedin.com/in/fardinkamal62/',
      github: 'https://github.com/fardinkamal62/'
    },
    {
      name: 'Al Noman Robin',
      role: 'Strategic Member',
      batch: 'D-91',
      phone: '01774139359',
      email: 'robin@diu-cpc.com',
      facebook: 'https://www.facebook.com/share/191xdp1j27/',
      linkedin: 'https://www.linkedin.com/in/al-noman-robin-4378542a1/',
      github: 'https://github.com/AlnomanRobin'
    },
    {
      name: 'Eastodev Roy Utso',
      role: 'Strategic Member',
      batch: 'D-92',
      phone: '01733865288',
      email: 'utso@diu-cpc.com',
      facebook: 'https://www.facebook.com/share/15u6JNMi25/',
      linkedin: 'https://www.linkedin.com/in/eastodev-roy-utso-9146a2292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      github: 'https://github.com/eastodev288'
    },
    {
      name: 'Abdullah Al Masud',
      role: 'Strategic Member',
      batch: 'D-93',
      phone: '01772901068',
      email: 'masud@diu-cpc.com',
      facebook: 'https://www.facebook.com/abdullahalmasud.khan.1/',
      linkedin: 'https://www.linkedin.com/in/abdullah-al-masud-khan/',
      github: 'https://github.com/khan-masud'
    },
    {
      name: 'Shohidur Rahman Sharif',
      role: 'Strategic Member',
      batch: 'D-78B',
      phone: '01303390274',
      email: 'sharif@diu-cpc.com',
      facebook: 'https://www.facebook.com/sharif.474',
      linkedin: 'https://www.linkedin.com/in/shohidur-rahman-sharif-b65385254/',
      github: 'https://github.com/sharif474'
    },
    {
      name: 'Mir Yeasir Abrar',
      role: 'Strategic Member',
      batch: 'D-98',
      phone: '01581622685',
      email: 'yeasir@diu-cpc.com',
      facebook: 'https://www.facebook.com/Gentleman.Abrar/',
      linkedin: 'www.linkedin.com/in/mir-yeasir-abrar',
      github: 'https://github.com/MirYeasirAbrar'
    },
    {
      name: 'Md Mosfiqur Rahman',
      role: 'Social Media Manager',
      batch: 'D-91',
      phone: '01726680532',
      email: 'mosfiqur@diu-cpc.com',
      facebook: 'https://www.facebook.com/share/1bzyqtuxSD/',
      linkedin: 'https://www.linkedin.com/in/md-mosfiqur-rahman-a23041358?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      github: 'https://github.com/Musfiq-003'
    },
    {
      name: 'Al Tuhim MD Shaad',
      role: 'Strategic Member',
      batch: 'D-86',
      phone: '01952501479',
      email: 'shaad@diu-cpc.com',
      facebook: 'https://www.facebook.com/share/16JGD2dq9e/',
      linkedin: 'https://linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=al-tuhim-md-shaad-7635a733b',
      github: 'https://github.com/ShaadSD'
    },
    {
      name: 'MD Mahadi Rahman Labib',
      role: 'Competitive Programming Co-Ordinator',
      batch: 'D-86',
      phone: '01705617457',
      email: 'labib@diu-cpc.com',
      facebook: 'https://www.facebook.com/profile.php?id=100071748218063',
      linkedin: 'https://www.linkedin.com/in/mahadi-rahman-labib-64780a2a3/',
      github: 'https://github.com/MadaDlabib'
    },
    {
      name: 'Rasel Hasan',
      role: 'Strategic Member',
      batch: 'E-106',
      phone: '01757527570',
      email: 'rasel@diu-cpc.com',
      facebook: 'https://www.facebook.com/raselhasan.rj',
      linkedin: 'https://www.linkedin.com/in/raselhasan10/',
      github: 'https://github.com/RH1010'
    },
    {
      name: 'Yasin Arafat',
      role: 'Strategic Member',
      batch: 'D-91',
      phone: '1602090250',
      email: 'yeasin@diu-cpc.com',
      facebook: 'https://www.facebook.com/share/18acAo1mrn/',
      linkedin: 'https://www.linkedin.com/in/yasin-arafat-hira365',
      github: 'https://github.com/yasin-arafat26'
    },
    {
      name: 'Md Badhon Mia',
      role: 'Strategic Member',
      batch: 'D-84',
      phone: '01842540751',
      email: 'badhon@diu-cpc.com',
      facebook: 'https://www.facebook.com/mdbayzidmiabadhonn',
      linkedin: 'https://www.linkedin.com/in/md-badhon-mia/',
      github: 'https://github.com/bayzidmiabadhon'
    }
  ];

  const alumni = [
    { name: 'Rownak Borhan Himel', role: 'Alumnus', bio: 'PhD student at NAIST, Japan. Speaker on research paper writing.' },
    { name: 'Mehedi Hasan Likhon', role: 'Alumnus', bio: 'Senior Software Engineer at Brain Station 23.' },
    { name: 'Jhankar Mahbub', role: 'Alumnus', bio: 'CEO, Programming Hero. Speaker on coding benefits.' },
    { name: 'Abdur Rakib', role: 'Alumnus', bio: 'COO, Programming Hero. Led web development workshop.' }
  ];

  return (
    <section className="team-section container my-5">
      <h1 className="section-title" style={{ color: '#fff', textAlign: 'center', marginBottom: '60px' }}>Committee</h1>

      <h2 style={{ color: '#87CEEB', textAlign: 'center', marginBottom: '40px', fontSize: '2rem' }}>Core Committee Members</h2>
      <div className="row">
        {executiveMembers.map((member, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card team-card" style={{
              background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(135, 206, 235, 0.1) 100%)',
              backdropFilter: 'blur(15px)',
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
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <img src="/cpc_website/icon/user.png" className="card-img-top" alt={member.name} style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  border: '3px solid #87CEEB',
                  margin: '0 auto',
                  boxShadow: '0 8px 25px rgba(135, 206, 235, 0.3)'
                }} />
              </div>
              <div className="card-body" style={{ padding: '20px' }}>
                <h5 className="card-title" style={{ color: '#fff', fontSize: '1.2rem', fontWeight: '700', textAlign: 'center', marginBottom: '10px' }}>
                  {member.name}
                </h5>
                <div style={{ textAlign: 'center', marginBottom: '15px' }}>
                  <span style={{
                    background: 'rgba(135, 206, 235, 0.2)',
                    color: '#87CEEB',
                    padding: '5px 15px',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: '600'
                  }}>
                    {member.role}
                  </span>
                </div>
                <p className="card-text" style={{ color: '#ccc', textAlign: 'center', marginBottom: '20px', fontSize: '0.9rem' }}>
                  Batch: {member.batch}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
                  <a href={`tel:${member.phone}`} className="btn btn-info" style={{
                    background: 'linear-gradient(135deg, #17a2b8 0%, #138496 100%)',
                    border: 'none',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    padding: '6px 12px'
                  }}>
                    <i className="fas fa-phone"></i>
                  </a>
                  <a href={`mailto:${member.email}`} className="btn btn-info" style={{
                    background: 'linear-gradient(135deg, #17a2b8 0%, #138496 100%)',
                    border: 'none',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    padding: '6px 12px'
                  }}>
                    <i className="fas fa-envelope"></i>
                  </a>
                  {member.facebook && <a href={member.facebook} className="btn btn-primary" style={{
                    background: 'linear-gradient(135deg, #1877f2 0%, #166fe5 100%)',
                    border: 'none',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    padding: '6px 12px'
                  }}>
                    <i className="fab fa-facebook-f"></i>
                  </a>}
                  {member.linkedin && member.linkedin !== 'N/A' && <a href={member.linkedin} className="btn btn-secondary" style={{
                    background: 'linear-gradient(135deg, #0077b5 0%, #005885 100%)',
                    border: 'none',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    padding: '6px 12px'
                  }}>
                    <i className="fab fa-linkedin-in"></i>
                  </a>}
                  {member.github && member.github !== 'N/A' && <a href={member.github} className="btn btn-dark" style={{
                    background: 'linear-gradient(135deg, #333 0%, #24292e 100%)',
                    border: 'none',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    padding: '6px 12px'
                  }}>
                    <i className="fab fa-github"></i>
                  </a>}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 style={{ color: '#87CEEB', textAlign: 'center', margin: '80px 0 40px', fontSize: '2rem' }}>Strategic Members</h2>
      <div className="row">
        {strategicMembers.map((member, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card team-card" style={{
              background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(102, 126, 234, 0.1) 100%)',
              backdropFilter: 'blur(15px)',
              border: '1px solid rgba(102, 126, 234, 0.3)',
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
                background: 'linear-gradient(90deg, #667eea, #764ba2, #667eea)',
                backgroundSize: '200% 100%',
                animation: 'shimmer 3s ease-in-out infinite'
              }}></div>
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <img src="/cpc_website/icon/user.png" className="card-img-top" alt={member.name} style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  border: '3px solid #667eea',
                  margin: '0 auto',
                  boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)'
                }} />
              </div>
              <div className="card-body" style={{ padding: '20px' }}>
                <h5 className="card-title" style={{ color: '#fff', fontSize: '1.1rem', fontWeight: '700', textAlign: 'center', marginBottom: '10px' }}>
                  {member.name}
                </h5>
                <div style={{ textAlign: 'center', marginBottom: '15px' }}>
                  <span style={{
                    background: 'rgba(102, 126, 234, 0.2)',
                    color: '#667eea',
                    padding: '4px 12px',
                    borderRadius: '15px',
                    fontSize: '0.8rem',
                    fontWeight: '600'
                  }}>
                    {member.role}
                  </span>
                </div>
                <p className="card-text" style={{ color: '#ccc', textAlign: 'center', marginBottom: '20px', fontSize: '0.9rem' }}>
                  Batch: {member.batch}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', justifyContent: 'center' }}>
                  <a href={`tel:${member.phone}`} className="btn btn-info" style={{
                    background: 'linear-gradient(135deg, #17a2b8 0%, #138496 100%)',
                    border: 'none',
                    borderRadius: '15px',
                    fontSize: '0.7rem',
                    padding: '5px 10px'
                  }}>
                    <i className="fas fa-phone"></i>
                  </a>
                  <a href={`mailto:${member.email}`} className="btn btn-info" style={{
                    background: 'linear-gradient(135deg, #17a2b8 0%, #138496 100%)',
                    border: 'none',
                    borderRadius: '15px',
                    fontSize: '0.7rem',
                    padding: '5px 10px'
                  }}>
                    <i className="fas fa-envelope"></i>
                  </a>
                  {member.facebook && <a href={member.facebook} className="btn btn-primary" style={{
                    background: 'linear-gradient(135deg, #1877f2 0%, #166fe5 100%)',
                    border: 'none',
                    borderRadius: '15px',
                    fontSize: '0.7rem',
                    padding: '5px 10px'
                  }}>
                    <i className="fab fa-facebook-f"></i>
                  </a>}
                  {member.linkedin && member.linkedin !== 'N/A' && <a href={member.linkedin} className="btn btn-secondary" style={{
                    background: 'linear-gradient(135deg, #0077b5 0%, #005885 100%)',
                    border: 'none',
                    borderRadius: '15px',
                    fontSize: '0.7rem',
                    padding: '5px 10px'
                  }}>
                    <i className="fab fa-linkedin-in"></i>
                  </a>}
                  {member.github && member.github !== 'N/A' && <a href={member.github} className="btn btn-dark" style={{
                    background: 'linear-gradient(135deg, #333 0%, #24292e 100%)',
                    border: 'none',
                    borderRadius: '15px',
                    fontSize: '0.7rem',
                    padding: '5px 10px'
                  }}>
                    <i className="fab fa-github"></i>
                  </a>}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 style={{ color: '#87CEEB', textAlign: 'center', margin: '80px 0 40px', fontSize: '2rem' }}>Alumni Spotlights</h2>
      <div className="row">
        {alumni.map((alum, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="alumni-card" style={{
              background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(245, 101, 101, 0.1) 100%)',
              backdropFilter: 'blur(15px)',
              border: '1px solid rgba(245, 101, 101, 0.3)',
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
                background: 'linear-gradient(90deg, #f56565, #e53e3e, #f56565)',
                backgroundSize: '200% 100%',
                animation: 'shimmer 3s ease-in-out infinite'
              }}></div>
              <div className="card-body" style={{ padding: '30px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #f56565 0%, #e53e3e 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '20px',
                    boxShadow: '0 8px 25px rgba(245, 101, 101, 0.3)'
                  }}>
                    <i className="fas fa-graduation-cap" style={{ fontSize: '1.5rem', color: '#fff' }}></i>
                  </div>
                  <div>
                    <h5 className="card-title" style={{ color: '#fff', fontSize: '1.3rem', fontWeight: '700', marginBottom: '5px' }}>
                      {alum.name}
                    </h5>
                    <span style={{
                      background: 'rgba(245, 101, 101, 0.2)',
                      color: '#f56565',
                      padding: '4px 12px',
                      borderRadius: '15px',
                      fontSize: '0.8rem',
                      fontWeight: '600'
                    }}>
                      {alum.role}
                    </span>
                  </div>
                </div>
                <p className="card-text" style={{ color: '#ccc', fontSize: '1rem', lineHeight: '1.6', margin: 0 }}>
                  {alum.bio}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;