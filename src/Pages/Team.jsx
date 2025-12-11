const Team = () => {
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

  const strategicMembers = [
    {
      name: "Md Siamul Islam Soaib",
      role: "Strategic Member",
      batch: "D-85",
      phone: "01682684452",
      email: "soaib@diu-cpc.com",
      facebook: "https://www.facebook.com/mdsiamulislamsoaib",
      linkedin: "https://www.linkedin.com/in/mdsiamulislamsoaib/",
      github: "https://github.com/mdsiamulislam",
      image: "👨‍💻"
    },
    {
      name: "Md. Nazmus Sakib",
      role: "Public Relation Co-Ordinator",
      batch: "E-104",
      phone: "01992547202",
      email: "nazmus@diu-cpc.com",
      facebook: "https://www.facebook.com/engrsakib02/",
      linkedin: "https://www.linkedin.com/in/engrsakib/",
      github: "https://github.com/engrsakib",
      image: "👨‍💻"
    },
    {
      name: "Masrafi Mubin",
      role: "Strategic Member",
      batch: "D-93",
      phone: "01834566383",
      email: "ratul@diu-cpc.com",
      image: "👨‍💻"
    },
    {
      name: "S M Nabil Ausaf",
      role: "Strategic Member",
      batch: "D-91",
      phone: "01922274318",
      email: "nabil@diu-cpc.com",
      facebook: "https://www.facebook.com/share/15HYN3Ad1N/",
      linkedin: "http://linkedin.com/in/smnabilausaf",
      github: "https://github.com/AvengerNabil",
      image: "👨‍💻"
    },
    {
      name: "Md. Asikur Rahman Khan",
      role: "Strategic Member",
      batch: "D-90",
      phone: "01758792678",
      email: "ashik@diu-cpc.com",
      facebook: "https://www.facebook.com/share/18isMq9rTB/",
      linkedin: "https://www.linkedin.com/in/mdasikurrahmankhan17/",
      github: "https://github.com/mdashikkhan04",
      image: "👨‍💻"
    },
    {
      name: "Fardin Kamal",
      role: "Strategic Member",
      batch: "D-85",
      phone: "01601912958",
      email: "swad@diu-cpc.com",
      facebook: "https://www.facebook.com/fardinkamal62/",
      linkedin: "https://www.linkedin.com/in/fardinkamal62/",
      github: "https://github.com/fardinkamal62/",
      image: "👨‍💻"
    },
    {
      name: "Al Noman Robin",
      role: "Strategic Member",
      batch: "D-91",
      phone: "01774139359",
      email: "robin@diu-cpc.com",
      facebook: "https://www.facebook.com/share/191xdp1j27/",
      linkedin: "https://www.linkedin.com/in/al-noman-robin-4378542a1/",
      github: "https://github.com/AlnomanRobin",
      image: "👨‍💻"
    },
    {
      name: "Eastodev Roy Utso",
      role: "Strategic Member",
      batch: "D-92",
      phone: "01733865288",
      email: "utso@diu-cpc.com",
      facebook: "https://www.facebook.com/share/15u6JNMi25/",
      linkedin: "https://www.linkedin.com/in/eastodev-roy-utso-9146a2292",
      github: "https://github.com/eastodev288",
      image: "👨‍💻"
    },
    {
      name: "Abdullah Al Masud",
      role: "Strategic Member",
      batch: "D-93",
      phone: "01772901068",
      email: "masud@diu-cpc.com",
      facebook: "https://www.facebook.com/abdullahalmasud.khan.1/",
      linkedin: "https://www.linkedin.com/in/abdullah-al-masud-khan/",
      github: "https://github.com/khan-masud",
      image: "👨‍💻"
    },
    {
      name: "Shohidur Rahman Sharif",
      role: "Strategic Member",
      batch: "D-78B",
      phone: "01303390274",
      email: "sharif@diu-cpc.com",
      facebook: "https://www.facebook.com/sharif.474",
      linkedin: "https://www.linkedin.com/in/shohidur-rahman-sharif-b65385254/",
      github: "https://github.com/sharif474",
      image: "👨‍💻"
    },
    {
      name: "Mir Yeasir Abrar",
      role: "Strategic Member",
      batch: "D-98",
      phone: "01581622685",
      email: "yeasir@diu-cpc.com",
      facebook: "https://www.facebook.com/Gentleman.Abrar/",
      linkedin: "https://www.linkedin.com/in/mir-yeasir-abrar",
      github: "https://github.com/MirYeasirAbrar",
      image: "👨‍💻"
    },
    {
      name: "Md Mosfiqur Rahman",
      role: "Social Media Manager",
      batch: "D-91",
      phone: "01726680532",
      email: "mosfiqur@diu-cpc.com",
      facebook: "https://www.facebook.com/share/1bzyqtuxSD/",
      linkedin: "https://www.linkedin.com/in/md-mosfiqur-rahman-a23041358",
      github: "https://github.com/Musfiq-003",
      image: "👨‍💻"
    },
    {
      name: "Al Tuhim MD Shaad",
      role: "Strategic Member",
      batch: "D-86",
      phone: "01952501479",
      email: "shaad@diu-cpc.com",
      facebook: "https://www.facebook.com/share/16JGD2dq9e/",
      linkedin: "https://linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=al-tuhim-md-shaad-7635a733b",
      github: "https://github.com/ShaadSD",
      image: "👨‍💻"
    },
    {
      name: "Rasel Hasan",
      role: "Strategic Member",
      batch: "E-106",
      phone: "01757527570",
      email: "rasel@diu-cpc.com",
      facebook: "https://www.facebook.com/raselhasan.rj",
      linkedin: "https://www.linkedin.com/in/raselhasan10/",
      github: "https://github.com/RH1010",
      image: "👨‍💻"
    },
    {
      name: "Yasin Arafat",
      role: "Strategic Member",
      batch: "D-91",
      phone: "01602090250",
      email: "yeasin@diu-cpc.com",
      facebook: "https://www.facebook.com/share/18acAo1mrn/",
      linkedin: "https://www.linkedin.com/in/yasin-arafat-hira365",
      github: "https://github.com/yasin-arafat26",
      image: "👨‍💻"
    },
    {
      name: "Md Badhon Mia",
      role: "Strategic Member",
      batch: "D-84",
      phone: "01842540751",
      email: "badhon@diu-cpc.com",
      facebook: "https://www.facebook.com/mdbayzidmiabadhonn",
      linkedin: "https://www.linkedin.com/in/md-badhon-mia/",
      github: "https://github.com/bayzidmiabadhon",
      image: "👨‍💻"
    }
  ];

  const advisors = [
    {
      name: "Prof. Md. Abdul Based",
      role: "Advisor",
      department: "Department of CSE",
      image: "👨‍🏫"
    },
    {
      name: "Prof. Md. Mahabubur Rahman",
      role: "Advisor",
      department: "Department of CSE",
      image: "👨‍🏫"
    }
  ];

  const alumni = [
    {
      name: "Rownak Borhan Himel",
      role: "Alumnus",
      bio: "PhD student at NAIST, Japan. Speaker on research paper writing."
    },
    {
      name: "Mehedi Hasan Likhon",
      role: "Alumnus",
      bio: "Senior Software Engineer at Brain Station 23."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-8">
      {/* Hero Section - Dark like cpc_website */}
      <div className="text-center mb-16 bg-gradient-to-br from-[#0f0f23] via-[#1a1a2e] to-[#16213e] rounded-2xl p-12 shadow-2xl">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent">
          Our Committee
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Meet the dedicated individuals leading DIU CPC towards excellence in competitive programming and innovation
        </p>
      </div>

      {/* Advisors Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-100">
          <span className="border-b-4 border-blue-400 pb-2">Faculty Advisors</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {advisors.map((advisor, index) => (
            <div
              key={index}
              className="card shadow-xl shadow-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105"
            >
              <div className="card-body items-center text-center">
                <div className="text-8xl mb-4">{advisor.image}</div>
                <h3 className="card-title text-2xl text-gray-100">{advisor.name}</h3>
                <div className="badge badge-lg bg-gradient-to-r from-blue-600 to-purple-500 text-white border-none mb-2">
                  {advisor.role}
                </div>
                <p className="text-gray-300">{advisor.department}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Committee Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-100">
          <span className="border-b-4 border-purple-400 pb-2">Core Committee Members</span>
        </h2>
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

                {/* Contact Info */}
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

                {/* Social Links */}
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

      {/* Strategic Members Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-100">
          <span className="border-b-4 border-green-400 pb-2">Strategic Members</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {strategicMembers.map((member, index) => (
            <div
              key={index}
              className="card shadow-lg shadow-green-500/20 hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300 hover:scale-105"
            >
              <div className="card-body items-center text-center p-4">
                <div className="text-6xl mb-3">{member.image}</div>
                <h3 className="text-sm font-bold text-gray-100 leading-tight">{member.name}</h3>
                <div className="badge badge-sm bg-green-600 text-white border-none my-1">
                  {member.role}
                </div>
                <p className="text-xs text-gray-300">Batch: {member.batch}</p>

                {/* Social Links */}
                <div className="flex gap-1 mt-2 justify-center flex-wrap">
                  {member.facebook && (
                    <a
                      href={member.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-xs btn-circle bg-blue-600 text-white border-none hover:bg-blue-700"
                      title="Facebook"
                    >
                      <i className="fab fa-facebook-f text-xs"></i>
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-xs btn-circle bg-blue-800 text-white border-none hover:bg-blue-900"
                      title="LinkedIn"
                    >
                      <i className="fab fa-linkedin-in text-xs"></i>
                    </a>
                  )}
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-xs btn-circle bg-gray-800 text-white border-none hover:bg-gray-900"
                      title="GitHub"
                    >
                      <i className="fab fa-github text-xs"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Alumni Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-100">
          <span className="border-b-4 border-yellow-400 pb-2">Alumni Spotlights</span>
        </h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th className="text-gray-100 bg-gray-800/50">Name</th>
                <th className="text-gray-100 bg-gray-800/50">Role</th>
                <th className="text-gray-100 bg-gray-800/50">Bio</th>
              </tr>
            </thead>
            <tbody>
              {alumni.map((alum, index) => (
                <tr key={index} className="hover:bg-gray-800/30 border-gray-700">
                  <td className="font-semibold text-gray-100">{alum.name}</td>
                  <td>
                    <div className="badge badge-ghost text-gray-200 border-gray-500">{alum.role}</div>
                  </td>
                  <td className="text-gray-300">{alum.bio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Join Us Section */}
      <div className="text-center card shadow-xl shadow-blue-500/20 p-12">
        <h3 className="text-4xl font-bold mb-4 text-gray-100">
          Want to Join Our Team?
        </h3>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          We're always looking for passionate individuals to help grow our community. Whether you're interested in organizing events, mentoring juniors, or contributing to our initiatives, there's a place for you!
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="/contact"
            className="btn btn-lg bg-gradient-to-r from-blue-600 to-purple-500 text-white border-none hover:from-blue-700 hover:to-purple-600"
          >
            <i className="fas fa-envelope mr-2"></i>
            Get in Touch
          </a>
          <a
            href="/events"
            className="btn btn-lg btn-outline border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
          >
            <i className="fas fa-calendar mr-2"></i>
            View Events
          </a>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        <div className="stat card shadow-lg shadow-blue-500/20 text-center p-6">
          <div className="stat-figure text-blue-400 text-4xl">
            <i className="fas fa-users"></i>
          </div>
          <div className="stat-value text-blue-400">50+</div>
          <div className="stat-title text-gray-200 font-semibold">Active Members</div>
        </div>

        <div className="stat card shadow-lg shadow-purple-500/20 text-center p-6">
          <div className="stat-figure text-purple-400 text-4xl">
            <i className="fas fa-trophy"></i>
          </div>
          <div className="stat-value text-purple-400">15+</div>
          <div className="stat-title text-gray-200 font-semibold">Achievements</div>
        </div>

        <div className="stat card shadow-lg shadow-green-500/20 text-center p-6">
          <div className="stat-figure text-green-400 text-4xl">
            <i className="fas fa-calendar-check"></i>
          </div>
          <div className="stat-value text-green-400">30+</div>
          <div className="stat-title text-gray-200 font-semibold">Events Organized</div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Team;
