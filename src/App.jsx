import React from 'react';

export default function App() {
  const profile = {
    name: "Leisha S Nivas",
    title: "B.Tech CSE Student",
    institution: "REVA University",
    links: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/leisha-s-228ab9385/?isSelfProfile=true" },
      { name: "GitHub", url: "https://github.com/leishasnivas-boop" },
      { name: "LeetCode", url: "https://leetcode.com/u/leisha__s/" },
      { name: "HackerRank", url: "https://www.hackerrank.com/profile/leishasnivas" },
      { name: "Instagram", url: "https://www.instagram.com/developpro_/" },
      { name: "My Blog", url: "#" },
      { name: "GeeksforGeeks", url: "#" }
    ],
    projects: [
      {
        title: "Haven Platform",
        description: "A comprehensive legal aid web application providing accessible resources, complaint generation, and automated assistance tools. Designed with responsive UI components for intuitive user navigation during emergency legal queries."
      },
      {
        title: "Nebula Striker",
        description: "An interactive arcade space shooter game integrated with custom hardware controls using an Arduino microcontroller. Features real-time audio effects, dynamic enemy spawning, and responsive joystick handling."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-6 md:p-12 flex flex-col items-center justify-center">
      <div className="max-w-3xl w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl space-y-8">
        
        {/* Header Section */}
        <header className="border-b border-slate-800 pb-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            {profile.name}
          </h1>
          <p className="mt-2 text-lg text-indigo-400 font-medium">
            {profile.title} <span className="text-slate-500">•</span> {profile.institution}
          </p>
        </header>

        {/* Links Grid */}
        <section>
          <h2 className="text-xl font-semibold text-slate-300 mb-4">Profiles & Platforms</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {profile.links.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 hover:border-indigo-500 rounded-xl transition-all duration-200 group"
              >
                <span className="font-medium text-slate-200 group-hover:text-indigo-300">
                  {link.name}
                </span>
                <span className="text-xs text-indigo-400 group-hover:translate-x-1 transition-transform">
                  Visit ↗
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Featured Projects Section */}
        <section>
          <h2 className="text-xl font-semibold text-slate-300 mb-4">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {profile.projects.map((project, idx) => (
              <div 
                key={idx} 
                className="p-5 bg-slate-800/40 border border-slate-700/50 rounded-xl flex flex-col justify-between hover:border-indigo-500/50 transition-colors"
              >
                <div>
                  <h3 className="text-lg font-bold text-indigo-300">{project.title}</h3>
                  <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
