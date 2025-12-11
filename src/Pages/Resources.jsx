const Resources = () => {
  const tutorials = [
    {
      title: "Programming Basics",
      description: "Learn the fundamentals of programming with C, C++, and Python",
      icon: "📚",
      color: "from-blue-500 to-blue-700",
      topics: ["Variables & Data Types", "Control Structures", "Functions", "Arrays & Pointers"],
      level: "Beginner"
    },
    {
      title: "Data Structures & Algorithms",
      description: "Master DSA concepts essential for competitive programming",
      icon: "🌳",
      color: "from-green-500 to-green-700",
      topics: ["Linked Lists", "Trees & Graphs", "Sorting & Searching", "Dynamic Programming"],
      level: "Intermediate"
    },
    {
      title: "Web Development",
      description: "Build modern web applications from scratch",
      icon: "🌐",
      color: "from-purple-500 to-purple-700",
      topics: ["HTML/CSS", "JavaScript", "React.js", "Node.js & Express"],
      level: "Beginner to Advanced"
    },
    {
      title: "Competitive Programming",
      description: "Strategies and techniques for programming contests",
      icon: "🏆",
      color: "from-yellow-500 to-orange-600",
      topics: ["Problem Solving", "Time Complexity", "Contest Strategies", "Practice Problems"],
      level: "Intermediate"
    }
  ];

  const tools = [
    {
      name: "VS Code",
      description: "Powerful code editor with extensions",
      icon: "💻",
      link: "https://code.visualstudio.com/",
      category: "Editor"
    },
    {
      name: "GitHub",
      description: "Version control and collaboration platform",
      icon: "🐙",
      link: "https://github.com/",
      category: "Version Control"
    },
    {
      name: "Codeforces",
      description: "Competitive programming platform",
      icon: "🎯",
      link: "https://codeforces.com/",
      category: "Practice"
    },
    {
      name: "LeetCode",
      description: "Technical interview preparation",
      icon: "📊",
      link: "https://leetcode.com/",
      category: "Practice"
    },
    {
      name: "HackerRank",
      description: "Coding challenges and competitions",
      icon: "🚀",
      link: "https://www.hackerrank.com/",
      category: "Practice"
    },
    {
      name: "GeeksforGeeks",
      description: "Tutorials and interview questions",
      icon: "📖",
      link: "https://www.geeksforgeeks.org/",
      category: "Learning"
    }
  ];

  const contests = [
    {
      name: "ICPC",
      description: "International Collegiate Programming Contest",
      icon: "🌍",
      link: "https://icpc.global/",
      frequency: "Annual"
    },
    {
      name: "NASA Space Apps Challenge",
      description: "International hackathon organized by NASA",
      icon: "🚀",
      link: "https://www.spaceappschallenge.org/",
      frequency: "Annual"
    },
    {
      name: "Google Code Jam",
      description: "Google's coding competition",
      icon: "🔍",
      link: "https://codingcompetitions.withgoogle.com/codejam",
      frequency: "Annual"
    },
    {
      name: "Meta Hacker Cup",
      description: "Meta's annual programming competition",
      icon: "👍",
      link: "https://www.facebook.com/codingcompetitions/hacker-cup",
      frequency: "Annual"
    },
    {
      name: "Codeforces Rounds",
      description: "Regular competitive programming contests",
      icon: "⚡",
      link: "https://codeforces.com/contests",
      frequency: "Weekly"
    },
    {
      name: "AtCoder",
      description: "Japanese competitive programming platform",
      icon: "🎌",
      link: "https://atcoder.jp/",
      frequency: "Weekly"
    }
  ];

  const books = [
    {
      title: "Introduction to Algorithms (CLRS)",
      author: "Cormen, Leiserson, Rivest, Stein",
      icon: "📕"
    },
    {
      title: "Competitive Programming 4",
      author: "Steven & Felix Halim",
      icon: "📗"
    },
    {
      title: "The Art of Computer Programming",
      author: "Donald Knuth",
      icon: "📘"
    },
    {
      title: "Cracking the Coding Interview",
      author: "Gayle Laakmann McDowell",
      icon: "📙"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent">
          Learning Resources
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Everything you need to excel in programming, from tutorials to tools and competitions
        </p>
      </div>

      {/* Tutorials Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-100">
          <i className="fas fa-graduation-cap mr-3 text-blue-400"></i>
          Tutorials & Learning Paths
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tutorials.map((tutorial, index) => (
            <div
              key={index}
              className="card bg-gray-800/50 border border-blue-500/30 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105"
            >
              <div className="card-body">
                <div className="flex items-start gap-4">
                  <div className={`text-6xl p-4 rounded-xl bg-gradient-to-br ${tutorial.color}`}>
                    <span className="block" style={{ filter: 'brightness(1.5)' }}>
                      {tutorial.icon}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="card-title text-2xl text-gray-100 mb-2">{tutorial.title}</h3>
                    <div className="badge bg-blue-600 text-white border-none mb-2">
                      {tutorial.level}
                    </div>
                    <p className="text-gray-300 mb-4">{tutorial.description}</p>
                  </div>
                </div>
                
                <div className="divider my-2"></div>
                
                <div>
                  <h4 className="font-semibold text-gray-200 mb-2">Topics Covered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {tutorial.topics.map((topic, idx) => (
                      <span
                        key={idx}
                        className="badge badge-outline border-blue-400 text-blue-300"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tools Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-100">
          <i className="fas fa-tools mr-3 text-purple-400"></i>
          Essential Tools
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="card bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-purple-500/30 shadow-lg hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105"
            >
              <div className="card-body items-center text-center">
                <div className="text-6xl mb-4">{tool.icon}</div>
                <h3 className="card-title text-xl text-gray-100">{tool.name}</h3>
                <div className="badge bg-purple-600 text-white border-none mb-2">
                  {tool.category}
                </div>
                <p className="text-gray-300 mb-4">{tool.description}</p>
                <a
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm bg-gradient-to-r from-blue-800 to-purple-600 text-white border-none hover:from-blue-700 hover:to-purple-500"
                >
                  Visit Site <i className="fas fa-external-link-alt ml-2"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contests Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-100">
          <i className="fas fa-trophy mr-3 text-yellow-400"></i>
          Programming Contests
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contests.map((contest, index) => (
            <div
              key={index}
              className="card bg-gray-800/50 border border-yellow-500/30 shadow-lg hover:shadow-xl hover:shadow-yellow-500/20 transition-all duration-300 hover:scale-105"
            >
              <div className="card-body">
                <div className="flex items-center gap-4 mb-3">
                  <div className="text-5xl">{contest.icon}</div>
                  <div>
                    <h3 className="card-title text-lg text-gray-100">{contest.name}</h3>
                    <div className="badge badge-sm bg-yellow-500 text-white border-none">
                      {contest.frequency}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">{contest.description}</p>
                <a
                  href={contest.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm bg-yellow-600 text-white border-none hover:bg-yellow-700"
                >
                  Learn More <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Books Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-100">
          <i className="fas fa-book mr-3 text-green-400"></i>
          Recommended Books
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.map((book, index) => (
            <div
              key={index}
              className="card bg-gradient-to-br from-green-900/30 to-green-800/30 border border-green-500/30 shadow-lg hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300 hover:scale-105"
            >
              <div className="card-body items-center text-center">
                <div className="text-7xl mb-4">{book.icon}</div>
                <h3 className="font-bold text-gray-100 mb-2">{book.title}</h3>
                <p className="text-sm text-gray-300">{book.author}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <div className="text-center bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-blue-900/30 border border-blue-500/30 rounded-2xl p-12 shadow-xl">
        <h3 className="text-4xl font-bold mb-4 text-gray-100">
          Ready to Start Learning?
        </h3>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join our community events and workshops to learn from experienced programmers and compete with your peers
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="/events"
            className="btn btn-lg bg-gradient-to-r from-blue-800 to-purple-600 text-white border-none hover:from-blue-700 hover:to-purple-500"
          >
            <i className="fas fa-calendar mr-2"></i>
            View Upcoming Events
          </a>
          <a
            href="/contact"
            className="btn btn-lg btn-outline border-2 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white"
          >
            <i className="fas fa-envelope mr-2"></i>
            Contact Us
          </a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Resources;
