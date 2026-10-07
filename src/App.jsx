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
    memberships: [
      { name: "IEEE Student Membership", number: "Add Number Here" },
      { name: "ACM Student Membership", number: "Add Number Here" }
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

        {/* Memberships Section */}
        <section>
          <h2 className="text-xl font-semibold text-slate-300 mb-4">Memberships</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {profile.memberships.map((item, idx) => (
              <div key={idx} className="p-4 bg-slate-800/30 border border-slate-800 rounded-xl">
                <p className="text-sm font-medium text-slate-300">{item.name}</p>
                <p className="text-xs text-slate-500 mt-1">{item.number}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
