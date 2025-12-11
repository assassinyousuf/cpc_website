import { default as photo1 } from "../assets/p1.png";
import photo2 from "../assets/p2.png";
import photo3 from "../assets/p3.jpg";

const About = () => {
  const coreTeam = [
    {
      name: "Sarker Sifatullah Haque Sajeeb",
      role: "President",
      batch: "D-78A",
      roll: "10",
      phone: "01850676787",
      email: "sifat@diu-cpc.com",
      facebook: "https://www.facebook.com/sajeeb.haque",
      linkedin: "https://www.linkedin.com/in/sifatullah-haque/",
      github: "https://github.com/sifatullah-haque",
      image: "👨‍💼"
    },
    {
      name: "Md. Rasel Islam",
      role: "Vice President",
      batch: "D-72",
      roll: "25",
      phone: "01306512656",
      email: "rasel.islam@diu-cpc.com",
      facebook: "https://www.facebook.com/share/1V3A8Kj6NM/",
      linkedin: "https://www.linkedin.com/in/rasel-islam-817748269",
      github: "https://github.com/raselsbd",
      image: "👨‍💼"
    },
    {
      name: "Md Alam Hossain",
      role: "Vice President",
      batch: "E-101",
      roll: "20",
      phone: "01790190009",
      email: "alam@diu-cpc.com",
      facebook: "https://www.facebook.com/alam.398/",
      linkedin: "https://www.linkedin.com/in/md-alam-hossain/",
      github: "https://github.com/alamrpi",
      image: "👨‍💼"
    },
    {
      name: "Asif Elahi",
      role: "General Secretary",
      batch: "D-75",
      roll: "40",
      phone: "01778791778",
      email: "asif@diu-cpc.com",
      facebook: "https://www.facebook.com/asifelahi488",
      linkedin: "https://www.linkedin.com/in/asiifelahi/",
      github: "https://github.com/asifelahii",
      image: "👨‍💼"
    },
    {
      name: "MD. SOUMIK HASAN",
      role: "Joint Secretary",
      batch: "D-72",
      roll: "34",
      phone: "01716101715",
      email: "soumik@diu-cpc.com",
      facebook: "https://www.facebook.com/soumik.hasan.37",
      linkedin: "https://www.linkedin.com/in/soumik-hasan-smk",
      github: "https://github.com/Soumik-HasanSMK",
      image: "👨‍💼"
    },
    {
      name: "Fatema Khanom",
      role: "Joint Secretary",
      batch: "D-78A",
      roll: "09",
      phone: "01751549818",
      email: "fatema@diu-cpc.com",
      facebook: "https://www.facebook.com/fatemaurmi06",
      linkedin: "https://www.linkedin.com/in/fatema-khanom-53a44a256/",
      github: "https://github.com/Fatema-Khanom",
      image: "👩‍💼"
    },
    {
      name: "Md. Yousuf Hossain",
      role: "Treasurer",
      batch: "D-91",
      roll: "31",
      phone: "01629263618",
      email: "yousuf@diu-cpc.com",
      facebook: "https://www.facebook.com/yousufhossain.mehrab",
      linkedin: "https://www.linkedin.com/in/yousuf-hossain-06089a328/",
      github: "https://github.com/assassinyousuf",
      image: "👨‍💼"
    },
    {
      name: "Md. Mehedi Hasan",
      role: "Event Coordinator",
      batch: "D-90",
      roll: "04",
      phone: "01403005254",
      email: "mehedi@diu-cpc.com",
      facebook: "https://www.facebook.com/share/1AEJuijctJ/?mibextid=qi2Omg",
      linkedin: "https://www.linkedin.com/in/meetmehedi",
      github: "https://github.com/meetmehedi",
      image: "👨‍💼"
    },
    {
      name: "Foysal Mahmud Zihak",
      role: "Technical Coordinator",
      batch: "D-93",
      roll: "35",
      phone: "01732969766",
      email: "zihak@diu-cpc.com",
      facebook: "https://www.facebook.com/FoysalZihak/",
      linkedin: "https://www.linkedin.com/in/zihak/",
      github: "https://github.com/fzihak",
      image: "👨‍💼"
    },
    {
      name: "MD Mahadi Rahman Labib",
      role: "Student Engagement",
      batch: "D-86",
      roll: "35",
      phone: "01705617457",
      email: "labib@diu-cpc.com",
      facebook: "https://www.facebook.com/profile.php?id=100071748218063",
      linkedin: "https://www.linkedin.com/in/mahadi-rahman-labib-64780a2a3/",
      github: "https://github.com/MadaDlabib",
      image: "👨‍💼"
    },
    {
      name: "Marjanah Afrose",
      role: "Public Relationship Manager",
      batch: "D-90",
      roll: "38",
      phone: "01556401501",
      email: "marjanah@diu-cpc.com",
      facebook: "https://www.facebook.com/share/1APhVw5LH6/",
      linkedin: "https://www.linkedin.com/in/marjanah-afrose-0a3781328",
      github: "https://github.com/Marjanah-003",
      image: "👩‍💼"
    },
    {
      name: "Sumaiya Akter",
      role: "Woman's Coordinator",
      batch: "D-71",
      roll: "25",
      phone: "01755724125",
      email: "sumaiya@diu-cpc.com",
      facebook: "https://www.facebook.com/share/1Q4SxWPbKd/",
      linkedin: "https://www.linkedin.com/in/sumaiya-akter-016336293",
      image: "👩‍💼"
    },
    {
      name: "Md. Mahbub Alam Efaz",
      role: "Evening Batches Coordinator",
      batch: "E-98th",
      roll: "04",
      phone: "01671962853",
      email: "mahbub@diu-cpc.com",
      facebook: "https://www.facebook.com/share/1AMwc4eAGv/",
      image: "👨‍💼"
    },
    {
      name: "Mst. Miskatun Jannat",
      role: "Membership Coordinator",
      batch: "D-91",
      roll: "14",
      phone: "01728937311",
      email: "miskat@diu-cpc.com",
      facebook: "https://www.facebook.com/share/1Df3N7NEZV/",
      linkedin: "https://www.linkedin.com/in/miskatul-jannat-813b72321",
      github: "https://github.com/Miskatulj/Miskatul_Jannat",
      image: "👩‍💼"
    },
    {
      name: "Shihab Shariar",
      role: "Programming Lead",
      batch: "D-72",
      roll: "11",
      phone: "01744915011",
      email: "shihab@diu-cpc.com",
      facebook: "https://www.facebook.com/5H1H48.7",
      linkedin: "https://www.linkedin.com/in/shihab-shariar",
      github: "https://github.com/shihab-7",
      image: "👨‍💼"
    }
  ];

  const developers = [
    {
      name: "Dolan Dhrubo Ray",
      role: "Frontend Developer",
      image: photo1,
      skills: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/devDhrubo",
      linkedin: "https://linkedin.com/in/devdhrubo",
    },
    {
      name: "SM Nabil Ausaf",
      role: "Researcher",
      image: photo2,
      skills: [" Task Management", "Team Collaboration", "Presentation"],
      github: "https://github.com/teammember2",
      linkedin: "https://linkedin.com/in/teammember2",
    },
    {
      name: "Md. Moshiur Rahman",
      role: "Researcher",
      image: photo3,
      skills: [" Task Management", "Team Collaboration", "Presentation"],
      github: "https://github.com/teammember3",
      linkedin: "https://linkedin.com/in/teammember3",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-100 mb-4">
          About <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">CPC</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
          The Dhaka International University Computer Programming Club (DIU CPC) is an official student organization 
          affiliated with the Department of Computer Science and Engineering (CSE).
        </p>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          DIU CPC operates as a "family" unit, emphasizing collaborative learning in programming, problem-solving, 
          and innovation. We provide free seminars, workshops, and training to all CSE students, inspiring young innovators.
        </p>
      </div>

      {/* History Timeline */}
      <div className="mb-16 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 shadow-lg border border-blue-500/20">
        <h2 className="text-3xl font-bold text-center text-gray-100 mb-8">
          <i className="fas fa-history mr-3 text-blue-400"></i>
          Our Journey
        </h2>
        <div className="timeline">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-800/50 border border-blue-500/30 rounded-xl shadow-md hover:shadow-xl hover:shadow-blue-500/20 transition-all">
              <div className="text-4xl mb-3">🏛️</div>
              <h3 className="font-bold text-blue-400 text-xl mb-2">1995-1996</h3>
              <p className="text-gray-300">DIU established and CSE Department founded, laying the foundation for CPC</p>
            </div>
            <div className="text-center p-6 bg-gray-800/50 border border-purple-500/30 rounded-xl shadow-md hover:shadow-xl hover:shadow-purple-500/20 transition-all">
              <div className="text-4xl mb-3">📈</div>
              <h3 className="font-bold text-purple-400 text-xl mb-2">2024</h3>
              <p className="text-gray-300">Major ramp up in activities, Fall Fest sponsorship, and increased community engagement</p>
            </div>
            <div className="text-center p-6 bg-gray-800/50 border border-blue-500/30 rounded-xl shadow-md hover:shadow-xl hover:shadow-blue-500/20 transition-all">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="font-bold text-blue-400 text-xl mb-2">2025</h3>
              <p className="text-gray-300">NASA Space Apps Challenge wins, new committee, and digital platform launch</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* Mission */}
        <div className="card shadow-xl shadow-blue-500/20">
          <div className="card-body">
            <h2 className="card-title text-2xl text-blue-400 mb-4">
              🎯 Our Mission
            </h2>
            <p className="text-gray-300 leading-relaxed italic">
              "To digitally transform DIU CPC into an interactive and accessible
              community that fosters programming excellence, collaboration, and
              innovation among students."
            </p>
            <p className="text-gray-300">
              <b>Our mission is to:</b>
              <li>Enhance communication between the club and its members.</li>
              <li>
                Inspire active participation through engaging and rewarding
                digital features.
              </li>
              <li>
                Promote lifelong learning via resources, tutorials, and coding
                challenges.
              </li>
              <li>
                Strengthen professional networks by connecting students with
                peers, mentors, and opportunities
              </li>
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="card bg-gradient-to-br from-purple-900/30 to-purple-800/30 border border-purple-500/30 shadow-lg shadow-purple-500/20">
          <div className="card-body">
            <h2 className="card-title text-2xl text-purple-300 mb-4">
              🌟 Our Vision
            </h2>
            <p className="text-gray-300 leading-relaxed italic">
              "To be the foremost university programming community in
              Bangladesh, recognized for innovation, collaboration, and
              meaningful impact — on campus and beyond."
            </p>
            <p>
              <b>We envision a future where:</b>
              <li>
                All DIU CPC members enjoy equal access to events, resources, and
                opportunities, regardless of location. .
              </li>
              <li>
                The platform serves as a permanent digital archive of the club’s
                milestones, achievements, and learning materials.
              </li>
              <li>
                DIU CPC consistently produces skilled, industry-ready graduates
                through continuous training, challenges, and mentorship.
              </li>
              <li>
                Technology is leveraged not only for organization but to ignite
                creativity, innovation, and leadership within the
                programming community.
              </li>
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-100 mb-8">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center p-6 rounded-lg bg-red-900/30 border border-red-500/30 hover:bg-red-900/40 transition-colors shadow-md hover:shadow-red-500/20">
            <div className="text-4xl mb-3">🤝</div>
            <h3 className="font-bold text-red-400 mb-2">Community</h3>
            <p className="text-sm text-gray-300">
              Building stronger connections within university ecosystems
            </p>
          </div>
          <div className="text-center p-6 rounded-lg bg-green-900/30 border border-green-500/30 hover:bg-green-900/40 transition-colors shadow-md hover:shadow-green-500/20">
            <div className="text-4xl mb-3">💡</div>
            <h3 className="font-bold text-green-400 mb-2">Innovation</h3>
            <p className="text-sm text-gray-300">
              Leveraging technology to solve real campus problems
            </p>
          </div>
          <div className="text-center p-6 rounded-lg bg-yellow-900/30 border border-yellow-500/30 hover:bg-yellow-900/40 transition-colors shadow-md hover:shadow-yellow-500/20">
            <div className="text-4xl mb-3">🚀</div>
            <h3 className="font-bold text-yellow-400 mb-2">Impact</h3>
            <p className="text-sm text-gray-300">
              Creating meaningful change in students' daily lives
            </p>
          </div>
          <div className="text-center p-6 rounded-lg bg-blue-900/30 border border-blue-500/30 hover:bg-blue-900/40 transition-colors shadow-md hover:shadow-blue-500/20">
            <div className="text-4xl mb-3">🔒</div>
            <h3 className="font-bold text-blue-400 mb-2">Trust</h3>
            <p className="text-sm text-gray-300">
              Ensuring secure and reliable platform experiences
            </p>
          </div>
        </div>
      </div>

      {/* Membership Benefits */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-100 mb-8">
          <i className="fas fa-star mr-3 text-yellow-400"></i>
          Membership Benefits
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all">
            <div className="card-body">
              <div className="text-5xl mb-4 text-center">🎓</div>
              <h3 className="card-title text-blue-400 justify-center mb-3">Free Training & Workshops</h3>
              <ul className="space-y-2 text-gray-300">
                <li>✓ Regular programming workshops</li>
                <li>✓ Expert-led training sessions</li>
                <li>✓ Competitive programming tutorials</li>
                <li>✓ Access to learning resources</li>
              </ul>
            </div>
          </div>
          
          <div className="card shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all">
            <div className="card-body">
              <div className="text-5xl mb-4 text-center">🤝</div>
              <h3 className="card-title text-purple-400 justify-center mb-3">Networking Opportunities</h3>
              <ul className="space-y-2 text-gray-300">
                <li>✓ Connect with industry professionals</li>
                <li>✓ Alumni mentorship programs</li>
                <li>✓ Collaborative project teams</li>
                <li>✓ Career guidance sessions</li>
              </ul>
            </div>
          </div>
          
          <div className="card shadow-xl hover:shadow-2xl hover:shadow-green-500/20 transition-all">
            <div className="card-body">
              <div className="text-5xl mb-4 text-center">🏆</div>
              <h3 className="card-title text-green-400 justify-center mb-3">Resume Enhancement</h3>
              <ul className="space-y-2 text-gray-300">
                <li>✓ Contest participation certificates</li>
                <li>✓ Event organization experience</li>
                <li>✓ Leadership opportunities</li>
                <li>✓ Project showcase platform</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Features Overview */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-100 mb-8">
          Platform Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card bg-red-900/30 border border-red-500/30 shadow-md hover:shadow-red-500/20">
            <div className="card-body">
              <h3 className="card-title text-red-400">🩸 Blood Bank</h3>
              <p className="text-gray-300">
                Donor registration and blood request management system
              </p>
            </div>
          </div>
          <div className="card bg-blue-900/30 border border-blue-500/30 shadow-md hover:shadow-blue-500/20">
            <div className="card-body">
              <h3 className="card-title text-blue-400">🔍 Lost & Found</h3>
              <p className="text-gray-300">
                Report and find lost items across campus
              </p>
            </div>
          </div>
          <div className="card bg-green-900/30 border border-green-500/30 shadow-md hover:shadow-green-500/20">
            <div className="card-body">
              <h3 className="card-title text-green-400">🌊 Emergency Aid</h3>
              <p className="text-gray-300">
                Flood relief and medical aid donation coordination
              </p>
            </div>
          </div>
          <div className="card bg-yellow-900/30 border border-yellow-500/30 shadow-md hover:shadow-yellow-500/20">
            <div className="card-body">
              <h3 className="card-title text-yellow-400">🎉 Events</h3>
              <p className="text-gray-300">
                Campus event discovery and management
              </p>
            </div>
          </div>
          <div className="card bg-purple-900/30 border border-purple-500/30 shadow-md hover:shadow-purple-500/20">
            <div className="card-body">
              <h3 className="card-title text-purple-400">🛒 Marketplace</h3>
              <p className="text-gray-300">
                Buy, sell, and auction student items
              </p>
            </div>
          </div>
          <div className="card bg-orange-900/30 border border-orange-500/30 shadow-md hover:shadow-orange-500/20">
            <div className="card-body">
              <h3 className="card-title text-orange-400">📢 Bulletin</h3>
              <p className="text-gray-300">
                Important announcements and notices
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-100">
          <span className="border-b-4 border-purple-400 pb-2">Our Committee</span>
        </h2>
        <p className="text-center text-gray-300 mb-8 max-w-2xl mx-auto">
          Meet the dedicated individuals leading DIU CPC towards excellence in competitive programming and innovation
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreTeam.map((member, index) => (
            <div
              key={index}
              className="card shadow-xl shadow-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105"
            >
              <div className="card-body items-center text-center p-6">
                <div className="text-7xl mb-4">{member.image}</div>
                <h3 className="card-title text-lg font-bold text-gray-100">{member.name}</h3>
                <div className="badge bg-blue-600 text-white border-none mb-2">
                  {member.role}
                </div>
                <p className="text-sm text-gray-300">
                  Batch: {member.batch} | Roll: {member.roll}
                </p>

                <div className="divider my-2"></div>
                
                <div className="flex flex-col gap-2 w-full">
                  <a
                    href={`tel:${member.phone}`}
                    className="btn btn-sm bg-green-600 text-white border-none hover:bg-green-700"
                  >
                    <i className="fas fa-phone"></i> Call
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="btn btn-sm bg-red-600 text-white border-none hover:bg-red-700"
                  >
                    <i className="fas fa-envelope"></i> Email
                  </a>
                </div>

                <div className="flex gap-2 mt-3 justify-center flex-wrap">
                  {member.facebook && (
                    <a
                      href={member.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-circle bg-blue-600 text-white border-none hover:bg-blue-700"
                      title="Facebook"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-circle bg-blue-800 text-white border-none hover:bg-blue-900"
                      title="LinkedIn"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  )}
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-circle bg-gray-800 text-white border-none hover:bg-gray-900"
                      title="GitHub"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <div className="text-center card shadow-xl shadow-blue-500/20 p-8">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">Get In Touch</h2>
        <p className="text-gray-300 mb-6">
          Have questions, suggestions, or want to contribute to CPC? We'd
          love to hear from you!
        </p>
        <div className="flex justify-center gap-4">
          <button className="btn btn-primary">📧 Contact Us</button>
          <button className="btn btn-outline btn-primary">
            🐙 Contribute on GitHub
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;
