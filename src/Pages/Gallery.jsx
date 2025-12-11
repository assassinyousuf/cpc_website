import { useState } from "react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const albums = [
    {
      id: 1,
      title: "NASA Space Apps Challenge 2024",
      description: "Team Polaris won Champions in Barishal Division",
      date: "October 2024",
      photos: 25,
      icon: "🚀",
      color: "from-blue-500 to-blue-700"
    },
    {
      id: 2,
      title: "Fall Fest 2024",
      description: "DIU CPC sponsored job fairs and programming contests",
      date: "November 2024",
      photos: 40,
      icon: "🎪",
      color: "from-purple-500 to-purple-700"
    },
    {
      id: 3,
      title: "Monthly Programming Contest",
      description: "Regular competitive programming contests",
      date: "December 2024",
      photos: 15,
      icon: "💻",
      color: "from-green-500 to-green-700"
    },
    {
      id: 4,
      title: "Web Development Workshop",
      description: "From Basic to Advance, led by industry experts",
      date: "May 2024",
      photos: 30,
      icon: "🌐",
      color: "from-orange-500 to-orange-700"
    },
    {
      id: 5,
      title: "Research Paper Writing Session",
      description: "Live session with alumnus Rownak Borhan Himel",
      date: "May 2024",
      photos: 20,
      icon: "📝",
      color: "from-red-500 to-red-700"
    },
    {
      id: 6,
      title: "Orientation Program 2024",
      description: "Welcoming new members to DIU CPC",
      date: "January 2024",
      photos: 35,
      icon: "🎓",
      color: "from-indigo-500 to-indigo-700"
    }
  ];

  const videos = [
    {
      id: 1,
      title: "CPC Highlights 2024",
      description: "A compilation of our best moments from 2024",
      thumbnail: "🎬",
      duration: "5:30",
      color: "from-pink-500 to-pink-700"
    },
    {
      id: 2,
      title: "NASA Space Apps Challenge Journey",
      description: "Behind the scenes of our winning teams",
      thumbnail: "🎥",
      duration: "8:45",
      color: "from-cyan-500 to-cyan-700"
    },
    {
      id: 3,
      title: "Programming Contest Tutorial",
      description: "Tips and tricks for competitive programming",
      thumbnail: "📹",
      duration: "12:20",
      color: "from-yellow-500 to-yellow-700"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 relative">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-purple-400 rounded-full blur-3xl animate-pulse"></div>
          </div>
          <div className="relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Gallery
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our journey through photos and videos from events, workshops, and competitions
            </p>
          </div>
        </div>

        {/* Photo Albums Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">📸 Photo Albums</h2>
            <div className="badge badge-lg bg-gradient-to-r from-blue-800 to-purple-600 text-white border-none">
              {albums.length} Albums
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {albums.map((album) => (
              <div
                key={album.id}
                className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(135, 206, 235, 0.1) 100%)',
                  backdropFilter: 'blur(15px)',
                  border: '1px solid rgba(135, 206, 235, 0.3)'
                }}
              >
                {/* Album Cover */}
                <div className={`h-48 bg-gradient-to-br ${album.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <span className="text-8xl relative z-10 group-hover:scale-110 transition-transform duration-300">
                    {album.icon}
                  </span>
                </div>

                {/* Album Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                    {album.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">{album.description}</p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-400">
                      <i className="fas fa-calendar-alt mr-2"></i>
                      {album.date}
                    </span>
                    <span className="text-purple-400">
                      <i className="fas fa-images mr-2"></i>
                      {album.photos} photos
                    </span>
                  </div>

                  <button className="mt-4 w-full btn btn-sm bg-gradient-to-r from-blue-800 to-purple-600 border-none text-white hover:from-blue-700 hover:to-purple-500">
                    View Album
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Videos Section */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">🎬 Videos</h2>
            <div className="badge badge-lg bg-gradient-to-r from-pink-600 to-red-600 text-white border-none">
              {videos.length} Videos
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div
                key={video.id}
                className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-pink-500/20 transition-all duration-300 hover:scale-105 cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(245, 101, 101, 0.1) 100%)',
                  backdropFilter: 'blur(15px)',
                  border: '1px solid rgba(245, 101, 101, 0.3)'
                }}
              >
                {/* Video Thumbnail */}
                <div className={`h-48 bg-gradient-to-br ${video.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/30"></div>
                  <span className="text-8xl relative z-10">{video.thumbnail}</span>
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-gray-800/90 border border-white flex items-center justify-center">
                      <i className="fas fa-play text-2xl text-red-600 ml-1"></i>
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-xs">
                    {video.duration}
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-pink-400 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">{video.description}</p>

                  <button className="w-full btn btn-sm bg-gradient-to-r from-pink-600 to-red-600 border-none text-white hover:from-pink-500 hover:to-red-500">
                    <i className="fas fa-play mr-2"></i>
                    Watch Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-blue-900/30 border border-blue-500/30 rounded-2xl p-8 shadow-xl">
          <h3 className="text-3xl font-bold text-gray-100 mb-4">
            Want to See More?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Follow us on social media for daily updates, behind-the-scenes content, and live event coverage
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://www.facebook.com/groups/diucsecpc/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-blue-600 text-white border-none hover:bg-blue-700"
            >
              <i className="fab fa-facebook mr-2"></i>
              Facebook
            </a>
            <a
              href="https://www.youtube.com/@diucsecpc"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-red-600 text-white border-none hover:bg-red-700"
            >
              <i className="fab fa-youtube mr-2"></i>
              YouTube
            </a>
            <a
              href="https://www.linkedin.com/company/diucsecpc"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-blue-700 text-white border-none hover:bg-blue-800"
            >
              <i className="fab fa-linkedin mr-2"></i>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
